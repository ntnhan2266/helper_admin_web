import { Injectable } from '@angular/core';

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

    public showNotification(from, align, message, type) {
  
        const color = Math.floor((Math.random() * 4) + 1);
  
        $.notify({
            icon: 'check',
            message: message
  
        },{
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
}
