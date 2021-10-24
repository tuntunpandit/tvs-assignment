import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { MainService } from './main.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListDetailComponent
      },
      {
        path: 'list/:id',
        component: ViewDetailComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [
    MainComponent,
    ListDetailComponent,
    ViewDetailComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule,
    ChartsModule,
    RouterModule.forChild(mainRoutes)
  ],
  providers: [
    MainService
  ]
})
export class MainModule { }
