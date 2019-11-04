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

export class FilesService extends APIService {
    constructor(public http: HttpClient, public cookieService: CookieService) {
        super(http, cookieService);
    }

    upload(data): Observable<any> {
        return this.http.post(environment.apiUrl + `/file/upload`,
            data,
            this.httpOptions)
            .pipe(
                catchError(this.handleError<any>('upload_image'))
            );
    }

}
