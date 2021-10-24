import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Users } from '../main.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent implements OnInit {
  userData: Users;
  userId: any;
  imageCapturedAt: Date;
  imageUploaded: boolean = false;
  @ViewChild('fileInput') el: ElementRef;
  uploadForm = this.fb.group({
    file: [null]
  })

  imageUrl: any;
  editFile: boolean = true;
  removeUpload: boolean = false;

  latitude: number;
  longitude: number;
  zoom: number;

  constructor(
    public fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute) {
    this.userData = this.router.getCurrentNavigation().extras.state as Users;
    if (this.userData) {
      localStorage.setItem("user", JSON.stringify(this.userData));
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params.id;
    });
    if (!this.userData) {
      let localData = JSON.parse(localStorage.getItem("user"));
      this.userData = (localData.id == this.userId) ? localData : [];
    }
    this.setCurrentLocation();
  }

  uploadImage(event) {
    let reader = new FileReader();
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.uploadForm.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
        this.imageUploaded = true;
        this.imageCapturedAt = new Date();
      }
      this.cd.markForCheck();
    }
  }

  removeUploadedFile() {
    let newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = '';
    this.editFile = true;
    this.removeUpload = false;
    this.uploadForm.patchValue({
      file: [null]
    });
  }

  onSubmit() {
    if (!this.uploadForm.valid) {
      alert('Please select an image before submitting!')
      return false;
    } else {
      console.log(this.uploadForm.value);
    }
  }

  setCurrentLocation() {
    this.latitude = 51.678418;
    this.longitude = 7.809007;
    this.zoom = 15;
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }
}
