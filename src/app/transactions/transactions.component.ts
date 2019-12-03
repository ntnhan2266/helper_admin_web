import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './transactions.service';
import { PageEvent } from '@angular/material/paginator';
import { UtilsService } from 'app/helper/utils.service';
import { ServiceCategoriesService } from 'app/service-categories/service-categories.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactions = [];
  categories = [];
  total = 0;
  pageSize = 10;
  pageEvent: PageEvent;
  tid = '';
  status = '';
  type = '';

  constructor(
    private _transactionservice: TransactionsService,
    private _servicecategoryService: ServiceCategoriesService,
    private _utilService: UtilsService
  ) {}

  ngOnInit() {
    this.getCategories();
    this.getData(null);
  }

  getCategories = () => {
    this._servicecategoryService
      .list({
        pageIndex: 0,
        pageSize: 999
      })
      .subscribe(result => {
        if (result && !result.errorCode) {
          this.categories = result.categories;
        }
      });
  };

  public getData(event?: PageEvent) {
    this._transactionservice
      .list({
        pageIndex: event ? event.pageIndex : 0,
        pageSize: this.pageSize,
        tid: this.tid,
        status: this.status,
        type: this.type
      })
      .subscribe(result => {
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
      this._utilService.showNotification(
        'top',
        'right',
        'Completed transaction',
        this._utilService.type.success
      );
    });
  }
}
