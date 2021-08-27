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

    sharedInputSearch = this.inputSearch.asObservable()
    // newxtInputSearch(input: string) {
    //     this.inputSearch.next(input)
    //     console.log(input);
    // }
    test(val:string) {
        console.log(`Hello letters ${val}`);

    }

    nextInputSearch(value: string) {
        this.inputSearch.next(value);
        console.log(Islogged());

        if(value.length >= this.countOfLetters && Islogged()) {
            this.ttt.fetchTodos(value).subscribe()
        }
    }


}
