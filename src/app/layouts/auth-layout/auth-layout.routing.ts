import { Routes } from '@angular/router';
import { LogInComponent } from 'app/login/login.component';
import { SignUpComponent } from 'app/sign-up/sign-up.component';
import { ForgotPasswordComponent } from 'app/forgot-password/forgot-password.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login', component: LogInComponent },
    { path: 'register', component: SignUpComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent }
];
