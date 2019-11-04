import { Component, OnInit } from '@angular/core';
import { ServiceCategoryDetailsService } from './service-category-details.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FilesService } from 'app/helper/files.service';
import {environment as env} from '../../environments/environment';
import { UtilsService } from 'app/helper/utils.service';
export interface ServiceCategory {
    _id: string;
    icon: string,
    nameVi: string,
    nameEn: string,
    order: number,
    isActive: boolean,
}

@Component({
    selector: 'app-service-categories',
    templateUrl: './service-category-details.component.html',
    styleUrls: ['./service-category-details.component.scss']
})
export class ServiceCategoryDetailsComponent implements OnInit {
    env: any;
    category: ServiceCategory;
    id: string;
    form: FormGroup;
    base64textString: string;
    fileType: string;
    fileName: string;
    loading: boolean;

    constructor(private _servicecategoryService: ServiceCategoryDetailsService,
        private _fileService: FilesService,
        private _utilService: UtilsService,
        private _formBuilder: FormBuilder,
        private _route: ActivatedRoute) {
        this.env = env;
        this.form = this._formBuilder.group({
            nameVi: ['', Validators.required],
            nameEn: ['', Validators.required],
            isActive: [true, []],
            order: [0, []],
        });
        this.category = {
            icon: '',
            _id: '',
            nameVi: '',
            nameEn: '',
            isActive: true,
            order: 0,
        };
        this.loading = false;
    }

    ngOnInit() {
        this.id = this._route.snapshot.params.id;
        if (this.id) {
            this.getData(this.id);
        }
    }

    public getData(id) {
        this._servicecategoryService.details(id).subscribe((result) => {
            if (result.category) {
                this.category = result.category;
            }
        });
    }

    handleFileSelect(evt) {
        const files = evt.target.files;
        const file = files[0];
        this.fileType = file.type;
        this.fileName = file.name;

        if (files && file) {
            const reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    }

    _handleReaderLoaded(readerEvt) {
        const binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
        // Call Upload API
        this.loading = true;
        this._fileService.upload({image: this.base64textString, name: this.fileName}).subscribe((result) => {
            this.loading = false;
            if (!result.errorCode) {
                this.category.icon = result.path;
            }
        });
    }

    createCategory() {
        this.loading = true;
        this._servicecategoryService.save(this.category).subscribe((result) => {
            this.loading = false;
            if (!result.errorCode) {
                this._utilService.showNotification('top', 'right',
                'Created successfully',
                this._utilService.type.success);
            }
        });
    }

    editCategory() {
        this.loading = true;
        this._servicecategoryService.edit(this.category).subscribe((result) => {
            this.loading = false;
            if (!result.errorCode) {
                this._utilService.showNotification('top', 'right',
                'Edit successfully',
                this._utilService.type.success);
            }
        });
    }

    public onSubmit() {
        if (this.id) {
            this.editCategory();
        } else  {
            this.createCategory();
        }
    }
}
