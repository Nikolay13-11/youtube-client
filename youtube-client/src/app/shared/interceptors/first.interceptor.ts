import {
    HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class FirstInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercept request', request);

    const cloned = request.clone({
        headers: request.headers.append(
            'Auth',
            'SOME RANDOME TOKEN'
        )
    })
    return next.handle(cloned).pipe(
        tap(event => {
            if (event.type === HttpEventType.Response) {
                console.log('Interseptor response', event);

            }
        })
    );
  }
}
