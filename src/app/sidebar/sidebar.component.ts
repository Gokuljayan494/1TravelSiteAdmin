import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private router: Router) {}
  // status: boolean = false;
  // clickEvent() {
  //   this.status = !this.status;
  //   console.log(`hello toggle`);
  // }
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
  loggedIn = false;

  login() {
    // login logic
    this.loggedIn = true;
  }
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}
