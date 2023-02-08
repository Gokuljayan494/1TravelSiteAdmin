import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-flight-bookings-detail-page',
  templateUrl: './flight-bookings-detail-page.component.html',
  styleUrls: ['./flight-bookings-detail-page.component.css'],
})
export class FlightBookingsDetailPageComponent implements OnInit {
  id: number;
  POSTS: any;
  idValue: any;
  response: any;
  constructor(
    private route: ActivatedRoute,
    private usersServices: UsersService
  ) {
    console.log(this.id);
  }
  ngOnInit(): void {
    this.id = +this.route.paramMap.subscribe((res) => {
      console.log(res.getAll('id'));
      console.log(res.getAll('id')[0]);
      this.idValue = res.getAll('id')[0];

      console.log(this.idValue);
      this.postList();
    });
  }
  postList() {
    console.log(this.idValue);
    this.usersServices.getBookings(this.idValue).subscribe((res) => {
      console.log(res);
      console.log(res.booking.user);

      this.POSTS = res.booking;
    });

    console.log(this.response);
  }
}
