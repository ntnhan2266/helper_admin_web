import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {APIService} from '../../helper/api.service';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class AuthService extends APIService {
    constructor(public http: HttpClient, public cookieService: CookieService) {
        super(http, cookieService);
  }

  register(data: any): Observable<any> {
      return this.http.post(environment.apiUrl + '/register-admin', JSON.stringify(data), this.httpOptions).pipe(
      catchError(this.handleError<any>('register_new_account'))
    );
  }

  login(data: any): Observable<any> {
      return this.http.post(environment.apiUrl + '/login-admin', JSON.stringify(data), this.httpOptions).pipe(
      catchError(this.handleError<any>('admin_login'))
    );
  }

  forgotPassword(data: any): Observable<any> {
      return this.http.post(environment.apiUrl + '/forgot-password', JSON.stringify(data), this.httpOptions).pipe(
      catchError(this.handleError<any>('forgot_password'))
    );
  }

  resetPassword(data: any): Observable<any> {
      return this.http.post(environment.apiUrl + '/reset-password', JSON.stringify(data), this.httpOptions).pipe(
      catchError(this.handleError<any>('reset_password'))
    );
  }
}
