import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { HttpEventType } from '@angular/common/http';
import { UsersService } from '../users.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-new-video',
  templateUrl: './new-video.component.html',
  styleUrls: ['./new-video.component.css'],
})
export class NewVideoComponent implements OnInit {
  video!: any;
  registerForm!: FormGroup;
  name: any;
  constructor(
    private http: HttpClient,
    private usersServices: UsersService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      name: [''],
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {}

  onFileChange(event: any) {
    this.video = event.target.files[0];
  }
  onSubmit() {
    console.log(`---`);
    console.log(`---`);
    console.log(`---`);

    // console.log(this.registerForm);
  }

  uploadFile() {
    const formData = new FormData();
    formData.append('video', this.video);
    formData.append('name', this.video.name);

    console.log(`---`);
    console.log(`---`);
    console.log(`---`);
    console.log(this.registerForm);
    console.log(this.video);

    // this.usersServices.uploadVideo(formData);
    this.http
      .post(
        'https://travelsitenode.onrender.com/api/v1/admin/uploadVideo',
        formData
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
