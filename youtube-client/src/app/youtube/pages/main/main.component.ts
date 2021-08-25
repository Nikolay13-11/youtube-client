import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { InputSearchService } from '../../services/input-search.service';
import { SortParamsService } from '../../services/sort-params.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent implements OnInit{

    stateSearch = false;
    stateSort$?: Observable<boolean>;
    sub?: Subscription;
    input$?: Observable<string>
    test!: string;

    constructor(
        // private steteFromService: SearchStateService,
        private stateFromSortService: SortParamsService,
        // private feth: HttpYoutubeService,
        private inp: InputSearchService,
    ) { }

    ngOnInit() {
        this.updateStateSort();
        // this.upd()
        // this.input$ = this.inp.sharedInputSearch;
        this.inp.sharedInputSearch.subscribe(i => console.log(i))
    }

    updateStateSort() {
        this.stateSort$ = this.stateFromSortService.sharedsortPanelState;
    }

    upd() {
        // this.sub = this.inp.sharedInputSearch.subscribe(i =>{
        //     console.log(i)
        //     this.feth.fetchTodos(i)
        //     .subscribe(i => console.log(i))
        // }
        // );
    }

}
