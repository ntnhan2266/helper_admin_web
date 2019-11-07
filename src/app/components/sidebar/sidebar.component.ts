import { Component, OnInit } from '@angular/core';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/users', title: 'Users', icon: 'people', class: '' },
    { path: '/bookings', title: 'Bookings', icon: 'list_alt', class: '' },
    { path: '/categories', title: 'Catergories', icon: 'category', class: '' },
    { path: '/transactions', title: 'Transactions', icon: 'attach_money', class: '' },
    { path: '/reviews', title: 'Reviews', icon: 'rate_review', class: '' }
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor() {
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
