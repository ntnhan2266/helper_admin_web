import { Component, OnInit } from '@angular/core';
import { ReportedHelpersService } from './reported-helpers.service';
import { PageEvent } from '@angular/material/paginator';
import { UtilsService } from 'app/helper/utils.service';

@Component({
    selector: 'app-reported-helpers',
    templateUrl: './reported-helpers.component.html',
    styleUrls: ['./reported-helpers.component.scss']
})

export class ReportedHelpersComponent implements OnInit {
    reports = [];
    total = 0;
    pageSize = 10;
    pageEvent: PageEvent;
    query = '';

    constructor(private _reportService: ReportedHelpersService,
        private _utilService: UtilsService, ) {
    }

    ngOnInit() {
        this.getData(null);
    }

    public getData(event?: PageEvent) {
        this._reportService.list({
            pageIndex: event ? event.pageIndex : 0,
            pageSize: this.pageSize,
            query: this.query,
        })
            .subscribe((result) => {
                if (!result.errorCode) {
                    this.reports = result.transactions;
                    this.total = result.total;
                }
            });
        return event;
    }
}
