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
export class BookingsService extends APIService {
  constructor(public http: HttpClient, public cookieService: CookieService) {
    super(http, cookieService);
  }

  list(data): Observable<any> {
    return this.http
      .get(
        environment.apiUrl +
          `/bookings/list?pageIndex=${data.pageIndex}&pageSize=${data.pageSize}
          &filterBy=${data.filterBy}&queryId=${data.queryId}&type=${data.type}`,
        this.httpOptions
      )
      .pipe(catchError(this.handleError<any>('load_bookings')));
  }

  cancel(id, content): Observable<any> {
    return this.http
      .put(
        environment.apiUrl + `/booking/admin-cancel`,
        { id, content },
        this.httpOptions
      )
      .pipe(catchError(this.handleError<any>('admin_cancel_bookings')));
  }
}
