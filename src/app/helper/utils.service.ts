import { Injectable } from '@angular/core';
import { AppConstants } from '../helper/constants';

declare var $: any;


@Injectable({
    providedIn: 'root'
})

export class UtilsService {
    public type = {
        none: '',
        info: 'info',
        success: 'success',
        warning: 'warning',
        danger: 'danger'
    };

    constructor() {
    }

    public showNotification(from, align, message, type, icon = 'check') {

        const color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: icon,
            message: message

        }, {
            type: type,
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template:
                `
            <div class="alert alert-success alert-with-icon" data-notify="container">
                <i class="material-icons" data-notify="icon">check</i>
                <button mat-button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <i class="material-icons">close</i></button>
                <span data-notify="message">${message}</span>
            </div>
            `
        });
    }

    getBookingStatus(status: number): string {
        switch (status) {
            case AppConstants.BOOKING_STATUS.WAITING_APPROVE:
                return 'Wait for approving'
            case AppConstants.BOOKING_STATUS.APPROVED:
                return 'Approved'
            case AppConstants.BOOKING_STATUS.COMPLETED:
                return 'Completed';
            case AppConstants.BOOKING_STATUS.CANCELLED:
                return 'Cancelled';
            case AppConstants.BOOKING_STATUS.REJECTED:
                return 'Rejected';
            default:
                return '';
        }
    }

    getBookingType(type: number): string {
        switch (type) {
            case 1:
                return 'House cleaning';
            case 2:
                return 'Gardening'
            case 3:
                return 'Go to market'
            case 4:
                return 'Child care'
            case 5:
                return 'Laundry'
            case 6:
                return 'Other'
            default:
                return 'Other'
        }
    }
}
