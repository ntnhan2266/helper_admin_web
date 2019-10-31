import { Routes } from '@angular/router';
import { UsersComponent } from '../../users/users.component';
import { BookingsComponent } from 'app/bookings/bookings.component';
import { ServiceCategoriesComponent } from 'app/service-categories/service-categories.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'bookings', component: BookingsComponent },
    { path: 'categories', component: ServiceCategoriesComponent }
];
