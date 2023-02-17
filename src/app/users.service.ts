import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { HttpEventType } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// const endpoint = '';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HttpHeaders } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { PopupComponent } from './popup/popup.component';
let token;

@Injectable({
  providedIn: 'root',
})
export class UsersService implements HttpInterceptor {
  constructor(
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog
  ) {}
  data1: any;
  // showPopup(message: string) {
  //   const dialogRef = this.dialog.open(PopupComponent, {
  //     data: { message: message },
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log('The dialog was closed');
  //   });
  // }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    token = localStorage.getItem('currentUser');
    // let token1 = token;
    let jwttoken = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(`token:${token}`);

    return next.handle(jwttoken);
  }

  showPopup(message: string): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
      data: { message: message },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  getAllUsers(): Observable<any> {
    return this.http.get('http://127.0.0.1:3000/api/v1/admin/allUsers').pipe(
      map((res: any) => {
        console.log(res);

        return res;
      })
    );
  }
  getAllAgents(): Observable<any> {
    return this.http
      .get('http://127.0.0.1:3000/api/v1/admin/totalRegisteredAgents')
      .pipe(
        map((res: any) => {
          console.log(res);

          return res;
        })
      );
  }

  getAllBookings(): Observable<any> {
    return this.http
      .get('http://127.0.0.1:3000/api/v1/admin/flightBookingDetails')
      .pipe(
        map((res: any) => {
          console.log(`-----------`);
          // console.log(res);

          return res;
        })
      );
  }
  dashboard(): Observable<any> {
    return this.http.get('http://127.0.0.1:3000/api/v1/admin/dashboard').pipe(
      map((res: any) => {
        console.log(`-----------`);
        console.log(res);
        console.log(`*************`);
        console.log(`*************`);
        console.log(`*************`);
        console.log(res);
        // fail'
        if (res.status === 'fail' || res.status === '400') {
          this.router.navigateByUrl('login');
        }

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
      .post<any>('http://127.0.0.1:3000/api/v1/admin/login', data)
      .subscribe((res) => {
        console.log(res);
        console.log(`--`);

        if (res && res.HttpErrorResponse) {
          alert('invalid credentials');

          this.router.navigateByUrl('');
        }
        console.log(res);
        localStorage.setItem('currentUser', res.token);
        token = res.token;
        if (res) {
          alert('login sucessfully');
          this.router.navigateByUrl('dashboard');
        }
      });
  }

  deleteProduct(id: String) {
    this.http
      .delete('http://127.0.0.1:3000/api/v1/admin/deleteUser/' + id + '')
      .subscribe((data) => {
        alert(`user deleted`);
        this.router.navigateByUrl('users');
      });
  }
  agentActivate(id: string) {
    this.http
      .delete('http://127.0.0.1:3000/api/v1/admin/activateAgency/' + id + '')
      .subscribe((data) => {
        this.data1 = data;
        console.log(this.data1);

        if (this.data1.admin.subscribe === true) {
          this.showPopup(`Agent activated`);
        }
        if (this.data1.admin.subscribe === false) {
          this.showPopup(`Agent Deactivated`);
        }
        this.router.navigateByUrl('agents');
        location.reload();
      });
  }
  // getAllactivatedAgents();

  getAllactivatedAgents(): Observable<any> {
    return this.http
      .get('http://127.0.0.1:3000/api/v1/admin/getActivatedAgents')
      .pipe(
        map((res: any) => {
          // console.log(res);

          return res;
        })
      );
  }
  getUser(id: String) {
    console.log(`heyy `);

    return this.http
      .get('http://127.0.0.1:3000/api/v1/admin/viewUser/' + id + '')
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteBooking(id: String) {
    this.http
      .delete('http://127.0.0.1:3000/api/v1/admin/deleteBookings/' + id + '')
      .subscribe((data) => {
        alert(`bookings deleted`);
        this.router.navigateByUrl('bookings');
      });
  }
  getBookings(id: String) {
    console.log(`heyy `);

    return this.http
      .get(
        'http://127.0.0.1:3000/api/v1/admin/userFlightBookingDetails/' + id + ''
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  uploadVideo(data: { video: File }) {
    console.log(`---------`);

    this.http
      .post<any>('http://127.0.0.1:3000/api/v1/admin/uploadVideo', data.video, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          // track the progress
        } else if (event.type === HttpEventType.Response) {
          // handle the response
        }
      });
  }
  getVideos(): Observable<any> {
    return this.http.get('http://127.0.0.1:3000/api/v1/admin/getVideo').pipe(
      map((res: any) => {
        console.log(`-----------`);
        // console.log(res);

        return res;
      })
    );
  }
  deleteVideos(id: String) {
    this.http
      .delete('http://127.0.0.1:3000/api/v1/admin/deleteBookings/' + id + '')
      .subscribe((data) => {
        alert(`bookings deleted`);
        this.router.navigateByUrl('bookings');
      });
  }
}
