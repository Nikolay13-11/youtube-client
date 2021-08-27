import {
    HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ISearchResult } from 'src/app/youtube/models/search-result.model';

@Injectable()
export class FirstInterceptor implements HttpInterceptor {

  constructor() {}
  serchResult: ISearchResult[] = [];

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('Intercept request', request);
    const cloned = request.clone()
    return next.handle(cloned).pipe(
        // switchMap(response => {
        //     console.log(response);

        // })
        tap(event => {
            if (event.type === HttpEventType.Response) {
                this.serchResult.splice(0, 1, event.body.items)
                console.log(this.serchResult);

            }

        })
    );
  }
}
