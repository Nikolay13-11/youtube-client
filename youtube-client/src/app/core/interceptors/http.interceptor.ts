import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class HttpReqInterceptor implements HttpInterceptor {

  constructor() {}
  serchResult: any = [];

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const ApiKey = 'AIzaSyBKAbqCLb7EN_kt7idMSUcilvkpNGa1_fQ';
    const cloned = request.clone({
        setParams: {
        key: ApiKey,
        },
    })
    return next.handle(cloned)
  }
}
