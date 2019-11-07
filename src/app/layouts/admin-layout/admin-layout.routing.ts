import { Routes } from '@angular/router';
import { UsersComponent } from '../../users/users.component';
import { BookingsComponent } from 'app/bookings/bookings.component';
import { ServiceCategoriesComponent } from 'app/service-categories/service-categories.component';
import { ServiceCategoryDetailsComponent } from 'app/service-category-details/service-category-details.component';
import { TransactionsComponent } from 'app/transactions/transactions.component';
import { ReviewsComponent } from 'app/reviews/reviews.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'bookings', component: BookingsComponent },
    { path: 'categories', component: ServiceCategoriesComponent },
    { path: 'categories/detail/:id', component: ServiceCategoryDetailsComponent },
    { path: 'categories/detail', component: ServiceCategoryDetailsComponent },
    { path: 'transactions', component: TransactionsComponent },
    { path: 'reviews', component: ReviewsComponent },
];
