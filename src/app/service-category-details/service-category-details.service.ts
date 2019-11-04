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

export class ServiceCategoryDetailsService extends APIService {
    constructor(public http: HttpClient,
        public cookieService: CookieService) {
        super(http, cookieService);
    }

    save(data: any): Observable<any> {
        return this.http.post(environment.apiUrl + `/category`,
            data,
            this.httpOptions)
            .pipe(
                catchError(this.handleError<any>('save_category'))
            );
    }

    edit(data: any): Observable<any> {
        return this.http.put(environment.apiUrl + `/category/edit`,
            data,
            this.httpOptions)
            .pipe(
                catchError(this.handleError<any>('edit_category_id_' + data._id))
            );
    }

    details(id: string): Observable<any> {
        return this.http.get(environment.apiUrl + `/category?id=${id}`,
            this.httpOptions)
            .pipe(
                catchError(this.handleError<any>('load_category_id_' + id))
            );
    }

}
