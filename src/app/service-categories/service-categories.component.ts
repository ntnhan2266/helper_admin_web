import { Component, OnInit } from '@angular/core';
import { ServiceCategoriesService } from './service-categories.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
    selector: 'app-service-categories',
    templateUrl: './service-categories.component.html',
    styleUrls: ['./service-categories.component.scss']
})
export class ServiceCategoriesComponent implements OnInit {
    categories = [];
    total = 0;
    pageSize = 10;
    pageEvent: PageEvent;
    query = '';

    constructor(private _servicecategoryService: ServiceCategoriesService) {
    }

    ngOnInit() {
        this.getData(null);
    }

    public getData(event?: PageEvent) {
        this._servicecategoryService.list({
            pageIndex: event ? event.pageIndex : 0,
            pageSize: this.pageSize,
            query: this.query,
        })
            .subscribe((result) => {
                if (result && !result.errorCode) {
                    this.categories = result.bookings;
                    this.total = result.total;
                }
            });
        return event;
    }
}
