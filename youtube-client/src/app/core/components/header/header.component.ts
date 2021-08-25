import { Component } from '@angular/core';

import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchStateService } from 'src/app/youtube/services/search-state.service';

import { InputSearchService } from '../../../youtube/services/input-search.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {

    sub: Subscription;
    name: string = ''
    public searchValue = new Subject<any>()

    constructor(private searchState: SearchStateService,
        private inputService: InputSearchService) {
        this.sub = this.searchValue.pipe(
            debounceTime(1000),
            distinctUntilChanged(),
        )
            .subscribe(value => {
                this.inputService.nextInputSearch(value)
            })
    }

    next(event: any) {
        // this.test = event.target.value
        // this.searchValue.next(event.target.value)
        // console.log(event.target.value)
        // this.inputService.newxtInputSearch(event)
        this.searchValue.next(event)
    }

    // testM(event: any) {
    //     console.log(this.name)
    // }


    getSearchState(event: Event) {
        event.preventDefault();
        this.searchState.nextState(true)
    }
}
