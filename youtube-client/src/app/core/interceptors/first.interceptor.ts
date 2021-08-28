import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class FirstInterceptor implements HttpInterceptor {

  constructor() {}
  serchResult: any = [];

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('Intercept request', request);
    const cloned = request.clone()
    return next.handle(cloned).pipe(
        // // switchMap(response => {
        // //     console.log(response);
        // // })
        // tap(event => {
        //     if (event.type === HttpEventType.Response) {
        //         this.serchResult.splice(0, 1, event.body.items)[0]
        //         // .map((item:any) => {
        //         //     return item.id.videoId
        //         // })
        //     }
        // })
    )
  }
}
