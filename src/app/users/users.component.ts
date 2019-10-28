import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [];
  total = 0;
  pageSize = 10;
  pageEvent: PageEvent;
  query = '';

  constructor(private _userService: UsersService) {
  }

  ngOnInit() {
    this.getUser(null);
  }

  public getUser(event?: PageEvent) {
    this._userService.list({
      pageIndex: event ? event.pageIndex : 0,
      pageSize: this.pageSize,
      query: this.query,
    })
        .subscribe((result) => {
          if (!result.errorCode) {
            this.users = result.users;
            this.total = result.total;
          }
        });
    return event;
  }

}
