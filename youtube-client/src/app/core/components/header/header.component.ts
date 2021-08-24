import { Component } from '@angular/core';

import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchStateService } from 'src/app/youtube/services/search-state.service';

import { InputSearchService } from '../../services/input-search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent  {

    sub: Subscription;

    test = ''
    public searchValue = new Subject<any>()

constructor(private searchState: SearchStateService,
    private inputService: InputSearchService) {
    this.sub = this.searchValue.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
    )
    .subscribe(x => console.log(x)
    )
}

next(event: { target: { value: string; }; }) {
    this.test = event.target.value
    this.searchValue.next(event)
}


    getSearchState(event: Event) {
        event.preventDefault();
        this.searchState.nextState(true)
    }
}
