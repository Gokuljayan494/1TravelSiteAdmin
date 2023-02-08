import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent {
  title = 'pagination';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: number = 10;
  constructor(private usersServices: UsersService, private router: Router) {}
  ngOnInit(): void {
    this.postList();
  }
  postList(): void {
    this.usersServices.getVideos().subscribe((response) => {
      if (response.status === 'fail') {
        alert('please login');
        this.router.navigateByUrl('');
      }

      console.log(response);

      this.POSTS = response.videos;

      // console.log(response);

      console.log(`hey`);
      console.log(this.POSTS);
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
  deleteVideos(id: String) {
    this.usersServices.deleteBooking(id);
    console.log(`id here ${id}`);
  }
}
