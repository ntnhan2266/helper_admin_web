import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:4000/api';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) {
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  register(data): Observable<any> {
    return this.http.post(endpoint + '/register-admin', JSON.stringify(data), httpOptions).pipe(
      tap((result) => console.log(`register successfully ${result}`)),
      catchError(this.handleError<any>('register_new_account'))
    );
  }

  forgotPassword(data): Observable<any> {
    return this.http.post(endpoint + '/forgot-password', JSON.stringify(data), httpOptions).pipe(
      tap((result) => console.log(`send email successfully`)),
      catchError(this.handleError<any>('forgot_password'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
