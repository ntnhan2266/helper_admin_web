import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    animal: string;
    name: string;
}

@Component({
    selector: 'app-booking-cancel-dialog',
    templateUrl: './booking-cancel-dialog.component.html',
    styleUrls: ['./booking-cancel-dialog.component.scss']
})

export class BookingCancelDialogComponent {
    reason: string;

    constructor(
        public dialogRef: MatDialogRef<BookingCancelDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    close(): void {
        this.dialogRef.close();
    }

}
