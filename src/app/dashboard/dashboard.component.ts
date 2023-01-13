import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  POSTS: any;
  constructor(private usersServices: UsersService) {}
  ngOnInit(): void {
    this.postList();
  }
  postList(): void {
    this.usersServices.dashboard().subscribe((response) => {
      // console.log(response);
      this.POSTS = response;
      // return response;
    });
  }
}
