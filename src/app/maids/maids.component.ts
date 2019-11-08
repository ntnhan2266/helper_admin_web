import { Component, OnInit } from '@angular/core';
import { MaidsService } from './maids.service';
import { PageEvent } from '@angular/material/paginator';
import { UtilsService } from 'app/helper/utils.service';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-maids',
    templateUrl: './maids.component.html',
    styleUrls: ['./maids.component.scss']
})

export class MaidsComponent implements OnInit {
    maids = [];
    total = 0;
    pageSize = 10;
    pageEvent: PageEvent;
    query = '';

    constructor(private _maidservice: MaidsService,
        private _utilService: UtilsService,
        private dialog: MatDialog) {
    }

    ngOnInit() {
        this.getData(null);
    }

    public getData(event?: PageEvent) {
        this._maidservice.list({
            pageIndex: event ? event.pageIndex : 0,
            pageSize: this.pageSize,
            query: this.query,
        })
            .subscribe((result) => {
                if (!result.errorCode) {
                    this.maids = result.maids;
                    this.total = result.total;
                }
            });
        return event;
    }

    public getLiteracy(literacyCode: number): string {
        return this._utilService.getLiteracy(literacyCode);
    }

    public getSupportArea(areaCodes: Array<number>): string {
        let text = '';
        for (const code of areaCodes) {
            text += this._utilService.getSupportArea(code) + ', ';
        }
        if (text.length > 2) {
            text = text.substr(0, text.length - 2);
        }
        return text;
    }

    public getJobs(jobs: Array<any>): string {
        let text = '';
        for (const job of jobs) {
            text += job.nameEn + ', ';
        }
        if (text.length > 2) {
            text = text.substr(0, text.length - 2);
        }
        return text;
    }
}
