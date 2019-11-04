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

export class ServiceCategoriesService extends APIService {
    constructor(public http: HttpClient,
        public cookieService: CookieService) {
        super(http, cookieService);
    }

    list(data: any): Observable<any> {
        return this.http.get(environment.apiUrl
            + `/categories?pageIndex=${data.pageIndex}&pageSize=${data.pageSize}`, this.httpOptions)
            .pipe(
                catchError(this.handleError<any>('load_bookings'))
            );
    }

    active(id: string): Observable<any> {
        return this.http.put(environment.apiUrl + `/category/active`,
            {_id: id},
            this.httpOptions)
            .pipe(
                catchError(this.handleError<any>('active_category_id_' + id))
            );
    }

    deactive(id: string): Observable<any> {
        return this.http.put(environment.apiUrl + `/category/deactive`,
            {_id: id},
            this.httpOptions)
            .pipe(
                catchError(this.handleError<any>('deactive_category_id_' + id))
            );
    }

}
