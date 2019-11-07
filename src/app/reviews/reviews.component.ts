import { Component, OnInit } from '@angular/core';
import { ReviewsService } from './reviews.service';
import { PageEvent } from '@angular/material/paginator';
import { UtilsService } from 'app/helper/utils.service';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss']
})

export class ReviewsComponent implements OnInit {
    reviews = [];
    total = 0;
    pageSize = 10;
    pageEvent: PageEvent;
    query = '';

    constructor(private _reviewservice: ReviewsService,
        private _utilService: UtilsService, ) {
    }

    ngOnInit() {
        this.getData(null);
    }

    public getData(event?: PageEvent) {
        this._reviewservice.list({
            pageIndex: event ? event.pageIndex : 0,
            pageSize: this.pageSize,
            query: this.query,
        })
            .subscribe((result) => {
                if (!result.errorCode) {
                    this.reviews = result.reviews;
                    this.total = result.total;
                }
            });
        return event;
    }
}
