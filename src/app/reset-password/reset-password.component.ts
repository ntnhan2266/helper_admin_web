import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from 'app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MustMatch } from 'app/helper/must-match.validator';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

    form: FormGroup;
    loading: boolean;
    token: String;

    constructor(private _formBuilder: FormBuilder,
        private _snackBar: MatSnackBar,
        private _auth: AuthService,
        private _router: Router,
        private _route: ActivatedRoute) {
        this.createForm();
        this.loading = false;
    }

    ngOnInit() {
        this.token = this._route.snapshot.params.token;
    }

    createForm() {
        this.form = this._formBuilder.group({
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
        }, {
            validators: MustMatch('password', 'confirmPassword')
        });
    }

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 3000,
        });
    }

    onSubmit() {
        if (this.form.valid) {
            this.loading = true;
            const data = {
                token: this.token,
                password: this.form.value.password
            };
            this._auth.resetPassword(data).subscribe((result) => {
                console.log(result)
                this.loading = false;
                if (!result.errorCode) {
                    this._router.navigate(['/login']);
                    this.openSnackBar('Update password successfully', 'OK');
                } else {
                    this.openSnackBar('Something went wrong', 'OK');
                }
            });
        }
    }

}
