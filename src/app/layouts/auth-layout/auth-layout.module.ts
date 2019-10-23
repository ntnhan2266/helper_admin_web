import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';

import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatTooltipModule,
    MatCardModule,
} from '@angular/material';
import { SignUpComponent } from 'app/sign-up/sign-up.component';
import { LogInComponent } from 'app/login/login.component';
import { ForgotPasswordComponent } from 'app/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from 'app/reset-password/reset-password.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AuthLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatCardModule,
    ],
    declarations: [
        LogInComponent,
        SignUpComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
    ]
})

export class AuthLayoutModule {
}
