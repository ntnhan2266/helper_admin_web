import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(public _cookieService: CookieService, public router: Router) {}

    canActivate(): boolean {
        const tokenExists: boolean = this._cookieService.check('X-Token');
        if (!tokenExists) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
