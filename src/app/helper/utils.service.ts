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

    getLiteracy(literacyType: number): string {
        switch (literacyType) {
            case AppConstants.LITERACY.OTHER:
                return 'Other';
            case AppConstants.LITERACY.HIGH_SCHOOL:
                return 'High school';
            case AppConstants.LITERACY.UNIVERSITY:
                return 'University';
            case AppConstants.LITERACY.COLLEGE:
                return 'College';
            case AppConstants.LITERACY.POST_GRADUATE:
                return 'Post graduate';
            default:
                return 'Other';
        }
    }

    getSupportArea(areaCode: number): string {
        switch (areaCode) {
            case AppConstants.SUPPURT_AREA.DIS_1:
                return 'District 1';
            case AppConstants.SUPPURT_AREA.DIS_2:
                return 'District 2';
            case AppConstants.SUPPURT_AREA.DIS_3:
                return 'District 3';
            case AppConstants.SUPPURT_AREA.DIS_4:
                return 'District 4';
            case AppConstants.SUPPURT_AREA.DIS_5:
                return 'District 5';
            case AppConstants.SUPPURT_AREA.DIS_6:
                return 'District 6';
            case AppConstants.SUPPURT_AREA.DIS_7:
                return 'District 7';
            case AppConstants.SUPPURT_AREA.DIS_8:
                return 'District 8';
            case AppConstants.SUPPURT_AREA.DIS_9:
                return 'District 9';
            case AppConstants.SUPPURT_AREA.DIS_10:
                return 'District 10';
            case AppConstants.SUPPURT_AREA.DIS_11:
                return 'District 11';
            case AppConstants.SUPPURT_AREA.DIS_12:
                return 'District 12';
            case AppConstants.SUPPURT_AREA.DIS_BINH_THANH:
                return 'District Binh Thanh';
            case AppConstants.SUPPURT_AREA.DIS_GO_VAP:
                return 'District Go Vap';
            case AppConstants.SUPPURT_AREA.DIS_PHU_NHUAN:
                return 'District Phu Nhuan';
            case AppConstants.SUPPURT_AREA.DIS_TAN_BINH:
                return 'District Tan Binh';
            case AppConstants.SUPPURT_AREA.DIS_THU_DUC:
                return 'District Thu Duc';
            case AppConstants.SUPPURT_AREA.DIS_BINH_CHANH:
                return 'District Binh Chanh';
            case AppConstants.SUPPURT_AREA.DIS_CAN_GIO:
                return 'District Can Gio';
            case AppConstants.SUPPURT_AREA.DIS_CU_CHI:
                return 'District Cu Chi';
            case AppConstants.SUPPURT_AREA.DIS_HOOC_MON:
                return 'District Hooc Mon';
            case AppConstants.SUPPURT_AREA.DIS_NHA_BE:
                return 'District Nha Be';
            default:
                return '--';
        }
    }

    getReportReason(reason: number): string {
        switch (reason) {
            case AppConstants.REPORT_REASON.NOT_COMPLETED:
                return 'Not complete';
            case AppConstants.REPORT_REASON.ATTITUDE:
                return 'Bad attitude';
            case AppConstants.REPORT_REASON.INEFFICENT:
                return 'Work ineffecient';
            case AppConstants.REPORT_REASON.OTHER:
                return 'Other';
            default:
                return 'Unknow';
        }
    }

}
