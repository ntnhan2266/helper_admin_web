import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from './auth.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './auth-layout.component.html',
    styleUrls: ['./auth-layout.component.css']
})

export class AuthLayoutComponent implements OnInit {
    title = 'angular-material-login-template';

    constructor(private _formBuilder: FormBuilder,
                private _snackBar: MatSnackBar,
                private _auth: AuthService,
                private _cookieService: CookieService,
                private _router: Router) {
    }

    ngOnInit() {
        const tokenExists: boolean = this._cookieService.check('X-Token');
        if (tokenExists) {
            this._router.navigate(['/users']);
        }
    }
}
