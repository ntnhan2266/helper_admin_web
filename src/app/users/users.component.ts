import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { PageEvent } from '@angular/material/paginator';
import { UtilsService } from 'app/helper/utils.service';

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

  constructor(private _userService: UsersService,
    private _utilService: UtilsService, ) {
  }

  ngOnInit() {
    this.getData(null);
  }

  public getData(event?: PageEvent) {
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

  public activeUser(id: string, index: number) {
    this._userService.active(id).subscribe(result => {
      if (!result.errorCode) {
        this.users[index].isActive = true;
        this._utilService.showNotification('top', 'right', 'Active user successfully', this._utilService.type.success);
      }
    })
  }

  public deactiveUser(id: string, index: number) {
    this._userService.deactive(id).subscribe(result => {
      if (!result.errorCode) {
        this.users[index].isActive = false;
        this._utilService.showNotification('top', 'right', 'Active user successfully', this._utilService.type.success);
      }
    })
  }

}
