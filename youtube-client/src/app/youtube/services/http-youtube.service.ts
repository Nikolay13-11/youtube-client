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
    // ApiKey = 'AIzaSyBKAbqCLb7EN_kt7idMSUcilvkpNGa1_fQ';
    BaseUrl = `https://www.googleapis.com/youtube/v3/search`;

    constructor(private http: HttpClient) { }

    serchResult!: any[];

    private fetchSearchResult(value:string): Observable<ISearchResult> {
        return this.http.get<ISearchResult>(this.BaseUrl, {
            params: new HttpParams().set('q', value)
        })
    }

    fetchSearchWithIds(idsValue: string): Observable<IResultStatistic> {
        let params = new HttpParams()
        params = params.append('id', idsValue)
        params = params.append('part', 'snippet,statistics')
        return this.http.get<IResultStatistic>(this.BaseUrl, {
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
