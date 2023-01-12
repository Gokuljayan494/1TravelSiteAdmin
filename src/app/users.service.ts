import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// const endpoint = '';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HttpHeaders } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
let token = '';

@Injectable({
  providedIn: 'root',
})
export class UsersService implements HttpInterceptor {
  constructor(private http: HttpClient, private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token1 = token;
    let jwttoken = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(`token:${token}`);

    return next.handle(jwttoken);
  }

  getAllPosts(): Observable<any> {
    return this.http
      .get('https://travelsitenode.onrender.com/api/v1/admin/allUsers')
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  ////////////////////

  // bookings
  // fetchProduct1() {
  getAllBookings(): Observable<any> {
    return this.http
      .get(
        'https://travelsitenode.onrender.com/api/v1/admin/flightBookingDetails'
      )
      .pipe(
        map((res: any) => {
          console.log(`-----------`);
          console.log(res);

          return res;
        })
      );
  }
  onLogin(data: any) {
    console.log(`---------`);
    console.log(data);

    console.log(`${(data.email, data.password)}`);

    // console.log(products);
    this.http
      .post<any>(
        ' https://travelsitenode.onrender.com/api/v1/admin/login',
        data
      )
      .subscribe((res) => {
        console.log(res);
        token = res.token;
        if (res.status === 'sucess') {
          alert('logged in sucessfully');
          this.router.navigateByUrl('');
        } else {
          alert(`Error`);
        }
      });
  }
}
