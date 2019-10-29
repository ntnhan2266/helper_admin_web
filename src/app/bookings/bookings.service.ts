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
        console.log(this.httpOptions.headers);
    }

    list(data): Observable<any> {
        return this.http.get(environment.apiUrl
            + `/bookings/list?pageIndex=${data.pageIndex}&pageSize=${data.pageSize}`, this.httpOptions)
            .pipe(
                catchError(this.handleError<any>('load_bookings'))
            );
    }

}
