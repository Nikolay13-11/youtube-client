import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { InputSearchService } from 'src/app/core/services/input-search.service';
import { HttpYoutubeService } from '../../services/http-youtube.service';
import { SearchStateService } from '../../services/search-state.service';
import { SortParamsService } from '../../services/sort-params.service';



@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit, OnDestroy {

    stateSearch = false;
    stateSort$?: Observable<boolean>;
    sub?: Subscription;
    input?: Observable<string>
    test!: string;

    constructor(
        private steteFromService: SearchStateService,
        private stateFromSortService: SortParamsService,
        private feth: HttpYoutubeService,
        private inp: InputSearchService
    ) { }

    updateStateSort() {
        this.stateSort$ = this.stateFromSortService.sharedsortPanelState;
    }

    ngOnInit() {
        this.updateStateSort()
        this.sub = this.steteFromService.sharedState.subscribe(state => this.stateSearch = state);
        this.upd()
    }

    upd() {
        this.inp.sharedInputSearch.subscribe(i => this.test = i);
        console.log(this.test);
        this.feth.fetchTodos(this.test);
    }

    ngOnDestroy() {
        this.sub?.unsubscribe()
    }

}
