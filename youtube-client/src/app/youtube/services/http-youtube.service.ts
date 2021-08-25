import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseUrlItems, BaseUrlStatistic } from 'src/app/core/constants/constants';
import { InputSearchService } from 'src/app/youtube/services/input-search.service';

import { IResultStatistic, ISearchResult } from '../models/search-result.model';

@Injectable({
    providedIn: 'root'
})
export class HttpYoutubeService {

    constructor(private http: HttpClient, private inputSearch: InputSearchService) { }

    testInput() {
        console.log(this.inputSearch.sharedInputSearch);
    }

    fetchTodos(value: string): Observable<ISearchResult> {
        //   let params = new HttpParams()
        //   params = params.append('_limit', '5')
        //   params = params.append('custom', 'anything')
        console.log('service work good')

        return this.http.get<ISearchResult>(`${BaseUrlItems}${value}`, {
            // params: new HttpParams().set('_limit', '5')
            // params
        })
            .pipe(
                catchError(error => {
                    console.log('Error', error.message)
                    return throwError(error)
                }))
    }

    fetchStatistic(): Observable<IResultStatistic> {
        //   let params = new HttpParams()
        //   params = params.append('_limit', '5')
        //   params = params.append('custom', 'anything')

        return this.http.get<IResultStatistic>(`${BaseUrlStatistic}`)
            .pipe(
                catchError(error => {
                    console.log('Error', error.message)
                    return throwError(error)
                }))
    }


}
