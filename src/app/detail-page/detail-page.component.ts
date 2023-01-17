import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
})
export class DetailPageComponent implements OnInit {
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
      console.log(`------------------`);

      console.log(this.idValue);
      this.postList();
    });
  }
  postList() {
    console.log(this.idValue);
    this.usersServices.getUser(this.idValue).subscribe((res) => {
      console.log(res);

      this.POSTS = res.user;
    });

    console.log(`------------------------`);

    console.log(this.response);
  }
}
