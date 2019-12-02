import { Component, OnInit } from "@angular/core";
import { BookingsService } from "./bookings.service";
import { PageEvent } from "@angular/material/paginator";
import { UtilsService } from "app/helper/utils.service";
import {
  MatDialog,
  MatDialogConfig,
  MatDatepickerInputEvent
} from "@angular/material";
import { BookingCancelDialogComponent } from "app/dialogs/booking-cancel-dialog/booking-cancel-dialog.component";
import { AppConstants } from "app/helper/constants";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { FormControl } from "@angular/forms";
import { UsersService } from "app/users/users.service";
import { MaidsService } from "app/maids/maids.service";

export interface FormItem {
  label: string;
  value: any;
}

@Component({
  selector: "app-bookings",
  templateUrl: "./bookings.component.html",
  styleUrls: ["./bookings.component.scss"]
})
export class BookingsComponent implements OnInit {
  bookings = [];
  total = 0;
  pageSize = 10;
  pageEvent: PageEvent;
  query = "";
  options: FormItem[] = [];
  userFilter = "";
  filterBy = "helper";
  date = new Date();
  queryId = '';

  private subject: Subject<string> = new Subject();

  constructor(
    private _bookingService: BookingsService,
    private _dialog: MatDialog,
    private _utilService: UtilsService,
    private _usersService: UsersService,
    private _maidService: MaidsService,
  ) {}

  ngOnInit() {
    // Init subscribe event
    this.subject.pipe(debounceTime(500)).subscribe(searchTextValue => {
      this.changeUserOptions(searchTextValue);
    });
    this.getData(null);
  }

  private changeUserOptions(keyword: string) {
    this.options = [];
    if (this.filterBy === "user") {
      this._usersService
        .list({ pageIndex: 0, pageSize: 5, query: keyword })
        .subscribe(res => {
          const users = res.users;
          for (const user of users) {
            this.options.push({
              label: user.name,
              value: user._id
            });
          }
        });
    } else {
      this._maidService
        .list({pageSize: 5, pageIndex: 0, query: keyword})
        .subscribe(res => {
          const maids = res.maids;
          console.log(maids);
          for (const maid of maids) {
            this.options.push({
              label: maid.user.name,
              value: maid._id
            });
          }
        })
    }
  }

  changeQueryID = (option) => {
    this.queryId = option.value;
  }

  public getData(event?: PageEvent) {
    this._bookingService
      .list({
        pageIndex: event ? event.pageIndex : 0,
        pageSize: this.pageSize,
        filterBy: this.filterBy,
        queryId: this.queryId,
        date: this.date
      })
      .subscribe(result => {
        if (!result.errorCode) {
          this.bookings = result.bookings;
          this.total = result.total;
        }
      });
    return event;
  }

  public onDateChange(event: MatDatepickerInputEvent<any>) {
    this.date = event.value;
  }

  public openDetailsDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this._dialog.open(BookingCancelDialogComponent, dialogConfig);
  }

  getOptionText(option) {
    return option ? option.label : '';
  }

  public cancelBooking(id, index): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "450px";
    dialogConfig.data = { id };
    const dialogRef = this._dialog.open(
      BookingCancelDialogComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe(_ => {
      this.bookings[index].status = AppConstants.BOOKING_STATUS.CANCELLED;
    });
  }

  public getType(type: number): string {
    return this._utilService.getBookingType(type);
  }

  public getStatus(status: number): string {
    return this._utilService.getBookingStatus(status);
  }

  public onUserFilterChange(event) {
    this.subject.next(event.target.value);
  }
}
