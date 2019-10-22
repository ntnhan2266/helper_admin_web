import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'app/helper/must-match.validator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private _formBuilder: FormBuilder, private _snackBar: MatSnackBar, private _auth: AuthService, ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this._formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  async onSubmit() {
    if (this.form.valid && !this.loading) {
      this.loading = true;
      this._auth.register(this.form.value).subscribe((result) => {
        if (!result.errorCode) {
          this.loading = false;
          this.form.reset();
          this.openSnackBar('Register successfully', 'OK');
        } else {
          this.loading = false;
          this.openSnackBar('Something went wrong', 'OK');
        }
      }, (err) => {
        console.log(err);
      });
    }
  }

}
