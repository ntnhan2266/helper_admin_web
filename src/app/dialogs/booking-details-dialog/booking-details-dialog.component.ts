import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    animal: string;
    name: string;
}

@Component({
    selector: 'app-booking-details-dialog',
    templateUrl: './booking-details-dialog.component.html',
    styleUrls: ['./booking-details-dialog.component.scss']
})

export class BookingDetailsDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<BookingDetailsDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}