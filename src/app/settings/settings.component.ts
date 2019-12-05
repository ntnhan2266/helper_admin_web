import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';
import { PageEvent } from '@angular/material/paginator';
import { UtilsService } from 'app/helper/utils.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit {
    Settings = [];
    total = 0;
    pageSize = 10;
    pageEvent: PageEvent;
    query = '';

    constructor(private _Settingservice: SettingsService,
        private _utilService: UtilsService, ) {
    }

    ngOnInit() {
        this.getData(null);
    }

    public getData(event?: PageEvent) {
        this._Settingservice.list({
            pageIndex: event ? event.pageIndex : 0,
            pageSize: this.pageSize,
            query: this.query,
        })
            .subscribe((result) => {
                if (!result.errorCode) {
                    this.Settings = result.Settings;
                    this.total = result.total;
                }
            });
        return event;
    }

    public markAsPaid(id: string, index: number) {
        this._Settingservice.pay(id).subscribe(res => {
            this.Settings[index].status = 2;
            this._utilService.showNotification('top', 'right', 'Completed transaction', this._utilService.type.success);
        });
    }
}
