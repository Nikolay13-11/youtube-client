import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputSearchService {

    private inputSearch = new BehaviorSubject('');

    sharedInputSearch = this.inputSearch.asObservable();

    newxtInputSearch(input:string) {
        this.inputSearch.next(input)
        console.log(input);

    }

}
