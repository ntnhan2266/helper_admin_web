import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AngularMaterialModule } from './angular-material.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { BookingCancelDialogComponent } from './dialogs/booking-cancel-dialog/booking-cancel-dialog.component';
import { RatingModule } from 'ng-starrating';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AngularMaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    RatingModule,
    LoadingBarHttpClientModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    BookingCancelDialogComponent,
    ConfirmDialogComponent
  ],
  providers: [CookieService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [
    BookingCancelDialogComponent,
    ConfirmDialogComponent
  ]
})
export class AppModule { }
