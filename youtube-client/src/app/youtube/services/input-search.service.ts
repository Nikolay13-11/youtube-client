import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Islogged } from 'src/app/shared/helpers/helper';

import { HttpYoutubeService } from './http-youtube.service';

@Injectable({
    providedIn: 'root'
})
export class InputSearchService {

    constructor(private http:HttpYoutubeService) {}

    countOfLetters = 3;

    private inputSearch = new BehaviorSubject('');
    private searchResult = new BehaviorSubject<Array<string>>([]);

    sharedInputSearch = this.inputSearch.asObservable()
    sharedsearchResult = this.searchResult.asObservable()

    nextInputSearch(value: string) {
        this.inputSearch.next(value);
        if(value.length >= this.countOfLetters && Islogged()) {
            this.http.getSearchResults(value).subscribe(i => this.searchResult.next(i))
        }
        else if (value.length === 0) {
            this.searchResult.next([])
        }
    }


}
