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

export class MaidsService extends APIService {
    constructor(public http: HttpClient, 
        public cookieService: CookieService) {
        super(http, cookieService);
    }

    list(data): Observable<any> {
        return this.http.get(environment.apiUrl
            + `/maids?pageIndex=${data.pageIndex}&pageSize=${data.pageSize}&query=${data.query}`, this.httpOptions)
            .pipe(
                catchError(this.handleError<any>('load_maids'))
            );
    }

    active(id: any): Observable<any> {
        return this.http.put(environment.apiUrl
            + `/maids/active`, { id }, this.httpOptions)
            .pipe(
                catchError(this.handleError<any>('active_helper_id_' + id))
            );
    }

    deactive(id: any): Observable<any> {
        return this.http.put(environment.apiUrl
            + `/maids/deactive`, { id }, this.httpOptions)
            .pipe(
                catchError(this.handleError<any>('deactive_helper_id_' + id))
            );
    }

}
