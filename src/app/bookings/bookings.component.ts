import { Component, OnInit } from '@angular/core';
import { BookingsService } from './bookings.service';
import { PageEvent } from '@angular/material/paginator';
import { UtilsService } from 'app/helper/utils.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BookingDetailsDialogComponent } from 'app/dialogs/booking-details-dialog/booking-details-dialog.component';
import { BookingCancelDialogComponent } from 'app/dialogs/booking-cancel-dialog/booking-cancel-dialog.component';
import { AppConstants } from 'app/helper/constants';

@Component({
    selector: 'app-users',
    templateUrl: './bookings.component.html',
    styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
    bookings = [];
    total = 0;
    pageSize = 10;
    pageEvent: PageEvent;
    query = '';

    constructor(private _bookingService: BookingsService,
        private _dialog: MatDialog,
        private _utilService: UtilsService, ) {
    }

    ngOnInit() {
        this.getData(null);
    }

    public getData(event?: PageEvent) {
        this._bookingService.list({
            pageIndex: event ? event.pageIndex : 0,
            pageSize: this.pageSize,
            query: this.query,
        })
            .subscribe((result) => {
                if (!result.errorCode) {
                    this.bookings = result.bookings;
                    this.total = result.total;
                }
            });
        return event;
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
        const dialogRef = this._dialog.open(BookingCancelDialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((_) => {
            this.bookings[index].status = AppConstants.BOOKING_STATUS.CANCELLED;
        });
    }

    public getType(type: number): string {
        return this._utilService.getBookingType(type);
    }

    public getStatus(status: number): string {
        return this._utilService.getBookingStatus(status);
    }
}
