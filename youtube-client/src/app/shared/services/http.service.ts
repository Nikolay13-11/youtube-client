import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

export interface Todo {
    completed: boolean
    title: string
    id?: number
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  fetchTodos(): Observable<Todo[]> {
      let params = new HttpParams()
      params = params.append('_limit', '5')
      params = params.append('custom', 'anything')

    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
        // params: new HttpParams().set('_limit', '5')
        params
    })
    .pipe(
        delay(500),
        catchError(error => {
        console.log('Error', error.message)
        return throwError(error)
    }))
  }


}
