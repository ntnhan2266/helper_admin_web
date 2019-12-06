import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { APIService } from '../helper/api.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService extends APIService {
  constructor(public http: HttpClient, public cookieService: CookieService) {
    super(http, cookieService);
  }

  get(): Observable<any> {
    return this.http
      .get(environment.apiUrl + `/settings`, this.httpOptions)
      .pipe(catchError(this.handleError<any>('load_settings')));
  }

  update(data) {
    return this.http
      .put(environment.apiUrl + `/setting/day-to-review`, data, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updated_settings')));
  }
}
