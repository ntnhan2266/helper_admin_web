import { Component, OnInit } from '@angular/core';
import { ServiceCategoryDetailsService } from './service-category-details.service';
import { ActivatedRoute } from '@angular/router';

export interface ServiceCategory {
    id: string;

}

@Component({
    selector: 'app-service-categories',
    templateUrl: './service-category-details.component.html',
    styleUrls: ['./service-category-details.component.scss']
})
export class ServiceCategoryDetailsComponent implements OnInit {
    category: ServiceCategory;
    id: string;

    constructor(private _servicecategoryService: ServiceCategoryDetailsService,
        private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this.id = this._route.snapshot.params.id;
        if (this.id) {
            this.getData(this.id);
        }
    }

    public getData(id) {
        
    }
}
