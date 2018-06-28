import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

const BASE_URL = 'http://api.tvmaze.com/';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    if (!req.url.startsWith('http')) {
      return next.handle(req.clone({url: `${BASE_URL}${req.url}`}));
    } else {
      return next.handle(req);

    }

  }
}
