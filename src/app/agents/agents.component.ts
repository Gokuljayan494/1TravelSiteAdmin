import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css'],
})
export class AgentsComponent {
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
    this.usersServices.getAllAgents().subscribe((response) => {
      this.POSTS = response.agent;
      console.log(this.POSTS);

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
  onActivate(id: string) {
    this.usersServices.agentActivate(id);
  }
}
