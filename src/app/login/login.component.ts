
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';

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
          this._router.navigate(['/users']);
        } else {
          this.openSnackBar('Invalid credentials', 'OK');
        }
      });
    }
  }
}
