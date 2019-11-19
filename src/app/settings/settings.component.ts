import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './settings.service';
import { PageEvent } from '@angular/material/paginator';
import { UtilsService } from 'app/helper/utils.service';

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.scss']
})

export class TransactionsComponent implements OnInit {
    transactions = [];
    total = 0;
    pageSize = 10;
    pageEvent: PageEvent;
    query = '';

    constructor(private _transactionservice: TransactionsService,
        private _utilService: UtilsService, ) {
    }

    ngOnInit() {
        this.getData(null);
    }

    public getData(event?: PageEvent) {
        this._transactionservice.list({
            pageIndex: event ? event.pageIndex : 0,
            pageSize: this.pageSize,
            query: this.query,
        })
            .subscribe((result) => {
                if (!result.errorCode) {
                    this.transactions = result.transactions;
                    this.total = result.total;
                }
            });
        return event;
    }

    public markAsPaid(id: string, index: number) {
        this._transactionservice.pay(id).subscribe(res => {
            this.transactions[index].status = 2;
            this._utilService.showNotification('top', 'right', 'Completed transaction', this._utilService.type.success);
        });
    }
}
