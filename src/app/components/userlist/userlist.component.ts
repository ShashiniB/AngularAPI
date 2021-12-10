import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  // I didn't create user model because it changes in different situations. Like the user in GET is different from user in PUT requests.
  public usersObject: any;
  public pageNumber!: number;

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.pageNumber = 0;
    this.fetchUsers();
  }

  handlePage(event: PageEvent) {
    this.pageNumber = event.pageIndex;
    this.fetchUsers();
  }

  fetchUsers() {
    this._userService
      .getUsers(this.pageNumber + 1)
      .subscribe((res: any) => {
        this.usersObject = res;
      });
  }

  deleteUser(id: number) {
    this.usersObject.data = this.usersObject.data.filter(
      (user: any) => user.id != id
    );
    this._userService.deleteUser(id).subscribe(() => {
      // this.fetchUsers();
    });
  }
}

