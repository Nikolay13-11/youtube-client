import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { BehaviorSubject } from 'rxjs';
import { updateSearchResultsSuccessfully } from 'src/app/redux/actions/youtubeVideos.actions';
import { Islogged } from 'src/app/shared/helpers/helper';

import { HttpYoutubeService } from './http-youtube.service';

@Injectable({
    providedIn: 'root'
})
export class InputSearchService {

    constructor(private http:HttpYoutubeService, private store: Store) {}

    countOfLetters = 3;

    private inputSearch = new BehaviorSubject('');
    private searchResult = new BehaviorSubject<Array<string>>([]);

    sharedInputSearch = this.inputSearch.asObservable()
    sharedsearchResult = this.searchResult.asObservable()

    nextInputSearch(value: string) {
        this.inputSearch.next(value);
        if(value.length >= this.countOfLetters && Islogged()) {
            this.http.getSearchResults(value).subscribe(i =>
                {
                    this.store.dispatch(updateSearchResultsSuccessfully(
                        {
                            searchResults:( {
                               ...i
                              }),}
                    )
                    )

                this.http.getSearchResults(value).subscribe(i => this.searchResult.next(i))
                }

                )





        }
        else if (value.length === 0) {
            this.searchResult.next([])
        }
    }


}
