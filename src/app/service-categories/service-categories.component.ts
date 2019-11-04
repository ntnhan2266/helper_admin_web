import { Component, OnInit } from '@angular/core';
import { ServiceCategoriesService } from './service-categories.service';
import { PageEvent } from '@angular/material/paginator';
import {environment as env} from '../../environments/environment';
import { Router } from '@angular/router';
import { ServiceCategoryDetailsService } from 'app/service-category-details/service-category-details.service';
import { UtilsService } from 'app/helper/utils.service';

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
    env: any;

    constructor(private _servicecategoryService: ServiceCategoriesService,
        private _utilService: UtilsService,
        private router: Router) {
        this.env = env;
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
                    this.categories = result.categories;
                    this.total = result.total;
                }
            });
        return event;
    }

    active(id: string, index: number) {
        this._servicecategoryService.active(id).subscribe((result) => {
            if (!result.errorCode) {
                this._utilService.showNotification('top', 'right',
                'Active successfully',
                this._utilService.type.success);
                this.categories[index].isActive = true;
            }
        });
    }

    deactive(id: string, index: number) {
        this._servicecategoryService.deactive(id).subscribe((result) => {
            if (!result.errorCode) {
                this._utilService.showNotification('top', 'right',
                'Deactive successfully',
                this._utilService.type.success);
                this.categories[index].isActive = false;
            }
        });
    }

    public goToDetail(id: string): void {
        this.router.navigate(['/categories/detail/' + id]);
    }
}
