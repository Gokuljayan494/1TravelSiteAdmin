import { Component, OnInit } from '@angular/core';
import { NavigationEnd, RouterModule, Routes } from '@angular/router';
import { UsersService } from './users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoginPage = false;
  constructor(private router: Router) {
    // console.log(Routes.);
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === '/login';
      }
    });
  }

  // if(router-outlet==="app-login") {}
}
