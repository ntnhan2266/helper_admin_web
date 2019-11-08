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

export class ReviewsService extends APIService {
    constructor(public http: HttpClient, 
        public cookieService: CookieService) {
        super(http, cookieService);
    }

    list(data): Observable<any> {
        return this.http.get(environment.apiUrl
            + `/reviews/list?pageIndex=${data.pageIndex}&pageSize=${data.pageSize}`, this.httpOptions)
            .pipe(
                catchError(this.handleError<any>('load_reviews'))
            );
    }

    delete(id: string): Observable<any> {
        return this.http.delete(environment.apiUrl
            + `/reviews/delete?id=${id}`, this.httpOptions)
            .pipe(
                catchError(this.handleError<any>('review_reviews'))
            );
    }
}
