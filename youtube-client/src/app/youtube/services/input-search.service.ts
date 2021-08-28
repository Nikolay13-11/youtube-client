import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Islogged } from 'src/app/shared/helpers/helper';

import { HttpYoutubeService } from './http-youtube.service';

@Injectable({
    providedIn: 'root'
})
export class InputSearchService {

    constructor(private ttt:HttpYoutubeService) {}

    countOfLetters = 3;

    private inputSearch = new BehaviorSubject('');
    private searchResult = new BehaviorSubject<Array<string>>([]);
    // private searchResult = new BehaviorSubject('');

    sharedInputSearch = this.inputSearch.asObservable()
    sharedsearchResult = this.searchResult.asObservable()

    test(val:string) {
        console.log(`Hello letters ${val}`);
    }

    nextInputSearch(value: string) {
        this.inputSearch.next(value);
        if(value.length >= this.countOfLetters && Islogged()) {
            this.ttt.getSearchResults(value).subscribe(i => this.searchResult.next(i))
        }
        else if (value.length === 0) {
            this.searchResult.next([])
        }
    }


}
