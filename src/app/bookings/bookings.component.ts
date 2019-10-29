import { Component, OnInit } from '@angular/core';
import { BookingsService } from './bookings.service';
import { PageEvent } from '@angular/material/paginator';
import { UtilsService } from 'app/helper/utils.service';

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

    public getType(type: number) {
        return this._utilService.getBookingType(type);
    }

    public getStatus(status: number) {
        return this._utilService.getBookingStatus(status);
    }
}
