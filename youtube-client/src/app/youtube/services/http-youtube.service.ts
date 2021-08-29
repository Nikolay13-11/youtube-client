import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { generateIdsList } from 'src/app/shared/helpers/helper';

import { IResultStatistic, ISearchResult } from '../models/search-result.model';

@Injectable({
    providedIn: 'root'
})
export class HttpYoutubeService {

    BaseUrl = `https://www.googleapis.com/youtube/v3/`;

    constructor(private http: HttpClient) { }

    serchResult!: any[];

    private fetchSearchResult(value:string): Observable<ISearchResult> {
        let params = new HttpParams()
        params = params.append('type', 'video')
        params = params.append('part', 'snippet')
        params = params.append('maxResults', '16')
        params = params.append('q', value)
        return this.http.get<ISearchResult>(`${this.BaseUrl}search`, {
            params
        })
    }

    fetchSearchWithIds(idsValue: string): Observable<IResultStatistic> {
        let params = new HttpParams()
        params = params.append('id', idsValue)
        params = params.append('part', 'snippet,statistics')
        return this.http.get<IResultStatistic>(`${this.BaseUrl}videos`, {
            params
        })
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
                    this.serchResult = res.items;
                    return this.serchResult
                })
            ),
            catchError(error => {
                console.log('Error', error.message);
                return throwError(error);
            })
        )
    }
}
