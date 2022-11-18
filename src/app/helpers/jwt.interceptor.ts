import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        if (localStorage.getItem('token') != "undefined") {
            const token = localStorage.getItem('token');
            if (token) {
                request = request.clone({
                    setHeaders: {
                        'Content-Type': 'application/json; charset=utf-8',
                        Authorization: token
                    }
                });
            } else {
                this.router.navigate(['/']);
            }
        }

        return next.handle(request).pipe(
            catchError(
                (err, caught) => {
                    if (err == 'jwt expired') {
                        this.handleAuthError();
                        return of(err);
                    }
                    throw err;
                }
            )
        );
    }
    private handleAuthError() {
        localStorage.removeItem('auth');
        this.router.navigate(['/']);
    }
}
