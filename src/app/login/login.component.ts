import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  myForm: FormGroup;
  // myForm: FormGroup;
  constructor(private authService: UsersService) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.myForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  loginProcess() {
    if (this.myForm.valid) {
      this.authService.onLogin(this.myForm.value);
      // this
    }
  }
}
