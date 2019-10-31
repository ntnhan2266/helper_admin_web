import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookingsService } from 'app/bookings/bookings.service';

export interface DialogData {
    id: string;
}

@Component({
    selector: 'app-booking-cancel-dialog',
    templateUrl: './booking-cancel-dialog.component.html',
    styleUrls: ['./booking-cancel-dialog.component.scss']
})

export class BookingCancelDialogComponent {
    content: string;

    constructor(
        private bookingService: BookingsService,
        public dialogRef: MatDialogRef<BookingCancelDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    close(): void {
        this.dialogRef.close();
    }

    cancelBooking() {
        this.bookingService.cancel(this.data.id, this.content).subscribe((res) => {
            this.dialogRef.close('OK');
        })
    }

}
