import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor( private _router: Router) { }

    canActivate(): boolean {
        let token = localStorage.getItem('token');
        if (token) {
            return true;
        } else {
            this._router.navigate(['/login'])
            return false
        }
    }
}
