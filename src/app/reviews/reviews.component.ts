import { Component, OnInit } from '@angular/core';
import { ReviewsService } from './reviews.service';
import { PageEvent } from '@angular/material/paginator';
import { UtilsService } from 'app/helper/utils.service';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';

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
        private _utilService: UtilsService,
        private dialog: MatDialog) {
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

    private deleteReview(id: string, index: number) {
        this._reviewservice.delete(id).subscribe((result) => {
            if (result.completed) {
                this._utilService.showNotification(
                    'top', 'right',
                    'Deleted successfully',
                    this._utilService.type.success);
                this.reviews.splice(index, 1);
            }
        });
    }

    onDeleteReview(id: string, index: number) {
        const message = `Are you sure you want to do this?`;
        const dialogData = new ConfirmDialogModel('Confirm Action', message);
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: '500px',
            data: dialogData
        });

        dialogRef.afterClosed().subscribe(dialogResult => {
            const result = dialogResult;
            if (result) {
                this.deleteReview(id, index);
            }
        });
    }
}
