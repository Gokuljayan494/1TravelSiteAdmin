import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  title = 'pagination';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: number = 10;
  constructor(private usersServices: UsersService) {}
  ngOnInit(): void {
    this.postList();
  }
  postList(): void {
    this.usersServices.getAllPosts().subscribe((response) => {
      this.POSTS = response.data.users;
      console.log(response.data.users);

      console.log(`hey`);

      // console.log(this.POSTS);
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.postList();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.postList();
  }
}
