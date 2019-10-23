import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;
  loading: boolean;

  constructor(private _formBuilder: FormBuilder, private _snackBar: MatSnackBar, private _auth: AuthService, private _router: Router) {
    this.createForm();
    this.loading = false;
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
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
      this._auth.forgotPassword(this.form.value).subscribe((result) => {
        this.loading = false;
        if (!result.errorCode) {
          this._router.navigate(['/login']);
          this.openSnackBar('Sent email', 'OK');
        } else {
          this.openSnackBar('Something went wrong', 'OK');
        }
      });
    }
  }

}
