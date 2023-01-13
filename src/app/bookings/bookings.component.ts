import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent {
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
    this.usersServices.getAllBookings().subscribe((response) => {
      this.POSTS = response.flightBookings;
      // console.log(response);

      console.log(`hey`);
      console.log(this.POSTS);

      console.log(`------------`);
      console.log(`------------`);
      console.log(`------------`);
      console.log(`------------`);

      console.log(this.POSTS);
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
