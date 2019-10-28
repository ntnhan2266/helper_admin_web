import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {AuthService} from 'app/layouts/auth-layout/auth.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LogInComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private _formBuilder: FormBuilder,
              private _snackBar: MatSnackBar,
              private _auth: AuthService,
              private _cookieService: CookieService,
              private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
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
      this._auth.login(this.form.value).subscribe((result) => {
        this.loading = false;
        if (!result.errorCode) {
            this._cookieService.set('X-Token', result.token);
            this._cookieService.set('User', JSON.stringify(result.user));
          this._router.navigate(['/users']);
        } else {
          this.openSnackBar('Invalid credentials', 'OK');
        }
      });
    }
  }
}
