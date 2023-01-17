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
    this.usersServices.getAllUsers().subscribe((response) => {
      this.POSTS = response.data.user;
      console.log(response.data);

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
  onDeleteProduct(id: String) {
    this.usersServices.deleteProduct(id);
    console.log(`id here ${id}`);
  }
  // constructor(route: ActivatedRoute) {
  //   this.id = route.snapshot.paramMap.get('id');
  // }
}
