import { Routes } from '@angular/router';
import { LogInComponent } from 'app/login/login.component';
import { SignUpComponent } from 'app/sign-up/sign-up.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login', component: LogInComponent },
    { path: 'register', component: SignUpComponent },
];
