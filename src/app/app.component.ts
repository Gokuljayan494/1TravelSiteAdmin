import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersService } from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'primeAdmin';
  open = true;
  constructor() {
    // console.log(Routes.);
  }

  // if(router-outlet==="app-login") {}
}
