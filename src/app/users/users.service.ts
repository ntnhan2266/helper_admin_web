import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { APIService } from '../helper/api.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})

export class UsersService extends APIService {
    constructor(public http: HttpClient, public cookieService: CookieService) {
        super(http, cookieService);
    }

    list(data): Observable<any> {
        return this.http.get(environment.apiUrl
            + `/users?pageIndex=${data.pageIndex}&pageSize=${data.pageSize}&query=${data.query}`, this.httpOptions)
            .pipe(
                catchError(this.handleError<any>('load_users'))
            );
    }

    active(id): Observable<any> {
        return this.http.put(environment.apiUrl
            + `/user/active`, { id }, this.httpOptions)
            .pipe(
                catchError(this.handleError<any>('active_user_id_' + id))
            );
    }

    deactive(id): Observable<any> {
        return this.http.put(environment.apiUrl
            + `/user/deactive`, { id }, this.httpOptions)
            .pipe(
                catchError(this.handleError<any>('deactive_user_id_' + id))
            );
    }

}
