import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newUrl = req.url;
        if(!req.url.includes('http') && !req.url.includes('assets') ){
            newUrl = `http://URL.com${req.url}`
        }
        const apiReq = req.clone({ url: newUrl });
        return next.handle(apiReq);
    }
}
