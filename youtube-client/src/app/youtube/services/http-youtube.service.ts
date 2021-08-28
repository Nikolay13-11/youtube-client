import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiKey, ApiStatisticUrl, BaseUrlItems } from 'src/app/core/constants/constants';
import { generateIdsList } from 'src/app/shared/helpers/helper';

import { IResultStatistic, ISearchResult } from '../models/search-result.model';

@Injectable({
    providedIn: 'root'
})
export class HttpYoutubeService {

    constructor(private http: HttpClient) { }

    serchResult!: any[];
    private fetchSearchResult(value:string): Observable<ISearchResult> {
        return this.http.get<ISearchResult>(`${BaseUrlItems}${value}`)
    }

    fetchSearchWithIds(idsValue: string): Observable<any> {
        const URL = ApiStatisticUrl(ApiKey, idsValue)
        return this.http.get<IResultStatistic>(URL)
    }

    getSearchResults(value:string): Observable<any> {
        return this.fetchSearchResult(value)
        .pipe(
            switchMap((res:ISearchResult) => {
                const ids: string = generateIdsList(res);
                return this.fetchSearchWithIds(ids);
            },
            ),
            map(
                ((res:IResultStatistic) => {
                    this.serchResult = res.items
                    console.log(this.serchResult);
                    return this.serchResult
                })
            )
        )
    }










    // // testInput() {
    // //     console.log(this.inputSearch.sharedInputSearch);
    // // }

    // fetchTodos(value: string): Observable<ISearchResult[]> {
    //     //   let params = new HttpParams()
    //     //   params = params.append('_limit', '5')
    //     //   params = params.append('custom', 'anything')
    //     return this.http.get<ISearchResult[]>(`${BaseUrlItems}${value}`)
    //         // .pipe(
    //         //     switchMap<string, Observable<any[]>>((i:s) => {
    //         //         const serchResultIds:any = generateIdsList(i)

    //         //     }),
    //         //     // catchError(error => {
    //         //     //     console.log('Error', error.message)
    //         //     //     return throwError(error)
    //         //     // })
    //         // )
    //     }

    // fetchStatistic(): Observable<IResultStatistic> {
    //     //   let params = new HttpParams()
    //     //   params = params.append('_limit', '5')
    //     //   params = params.append('custom', 'anything')

    //     return this.http.get<IResultStatistic>(`${BaseUrlStatistic}`)
    //         .pipe(
    //             catchError(error => {
    //                 console.log('Error', error.message)
    //                 return throwError(error)
    //             }))
    // }


}
