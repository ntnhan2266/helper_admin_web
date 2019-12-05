import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { UsersComponent } from '../../users/users.component';
import { AngularMaterialModule } from '../../angular-material.module';
import { BookingsComponent } from 'app/bookings/bookings.component';
import { ServiceCategoriesComponent } from 'app/service-categories/service-categories.component';
import { ServiceCategoryDetailsComponent } from 'app/service-category-details/service-category-details.component';
import { TransactionsComponent } from 'app/transactions/transactions.component';
import { ReviewsComponent } from 'app/reviews/reviews.component';
import { RatingModule } from 'ng-starrating';
import { MaidsComponent } from 'app/maids/maids.component';
import { ReportedHelpersComponent } from 'app/reported-helpers/reported-helpers.component';
import { SettingsComponent } from 'app/settings/settings.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        RatingModule,
    ],
    declarations: [
        DashboardComponent,
        UserProfileComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        UpgradeComponent,
        UsersComponent,
        BookingsComponent,
        ServiceCategoriesComponent,
        ServiceCategoryDetailsComponent,
        TransactionsComponent,
        ReviewsComponent,
        MaidsComponent,
        ReportedHelpersComponent,
        SettingsComponent,
    ]
})

export class AdminLayoutModule {
}
