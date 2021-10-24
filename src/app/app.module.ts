import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { MainGuard } from './guards/main.guard';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
// components
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    canActivate: [MainGuard],
    data: {
      preload: true,
    },
  },
  {
    path: '',
    loadChildren: () => import('./login/auth.module').then(m => m.AuthModule),
    canActivate: [AuthGuard],
    data: {
      auth: true
    },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ChartsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBjKQrznzrNWhT2yVwtzWxVL7Z4NQ5ipps',
      libraries: ['places']
    })
  ],
  providers: [
    AuthGuard,
    MainGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
