import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {CookieService} from 'ngx-cookie-service';


@Injectable({
    providedIn: 'root'
})

export class APIService {
    protected httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    constructor(protected http: HttpClient,
        protected cookieService: CookieService) {
        const tokenExists: boolean = this.cookieService.check('X-Token');
        if (tokenExists) {
            const token: String = this.cookieService.get('X-Token');
            this.httpOptions.headers = this.httpOptions.headers.append('Authorization', `Bearer ${token}`);
        }
    }

    protected handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead
            console.log(`${operation} failed: ${error.message}`);
            // If unauthorized remove all cookie
            const errorDetails = error.error;
            if (errorDetails && errorDetails.errorCode === 401) {
                this.cookieService.deleteAll();
                window.location.href = '/';
            }
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
