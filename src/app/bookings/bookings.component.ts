import { Component, OnInit } from '@angular/core';
import { BookingsService } from './bookings.service';
import { PageEvent } from '@angular/material/paginator';
import { UtilsService } from 'app/helper/utils.service';
import { MatDialog, MatDialogConfig, MatDatepickerInputEvent } from '@angular/material';
import { BookingCancelDialogComponent } from 'app/dialogs/booking-cancel-dialog/booking-cancel-dialog.component';
import { AppConstants } from 'app/helper/constants';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  bookings = [];
  total = 0;
  pageSize = 10;
  pageEvent: PageEvent;
  query = '';
  options: string[] = ['One', 'Two', 'Three'];
  userFilter = '';
  filterBy = 'helper';
  date = new Date();

  private subject: Subject<string> = new Subject();

  constructor(
    private _bookingService: BookingsService,
    private _dialog: MatDialog,
    private _utilService: UtilsService
  ) {}

  ngOnInit() {
    // Init subscribe event
    this.subject.pipe(debounceTime(500)).subscribe(searchTextValue => {
      this.changeUserOptions(searchTextValue);
    });
    this.getData(null);
  }

  private changeUserOptions(keyword: string) {
    console.log(keyword);
  }

  public getData(event?: PageEvent) {
    this._bookingService
      .list({
        pageIndex: event ? event.pageIndex : 0,
        pageSize: this.pageSize,
        query: this.query
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

  public cancelBooking(id, index): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '450px';
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
