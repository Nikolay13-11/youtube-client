import { Component, OnDestroy } from '@angular/core';

import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { InputSearchService } from '../../../youtube/services/input-search.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnDestroy{

    sub: Subscription;
    value: string = '';
    public searchValue = new Subject<any>();

    constructor(private inputService: InputSearchService) {
        this.sub = this.searchValue.pipe(
            debounceTime(1000),
            distinctUntilChanged(),
        )
            .subscribe(value => {
                this.inputService.nextInputSearch(value)
            })
    }

    updateSearchValue(event: any) {
        this.searchValue.next(event)
    }

    ngOnDestroy() {
        this.sub.unsubscribe()
    }
}
