import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { selectCustomCards } from 'src/app/redux/selectors/customCards.selector';
import { selectYoutubeVideos } from 'src/app/redux/selectors/youtubeVideos.selector';
import { FilterParamsSortService } from 'src/app/youtube/services/filter-params-sort.service';

import { SortParamsService } from '../../services/sort-params.service';

@Component({
    selector: 'app-search-item',
    templateUrl: './search-item.component.html',
    styleUrls: ['./search-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchItemComponent implements OnInit {

    dirrection$?: Observable<any>;
    type$?: Observable<any>;
    input$?: Observable<any>;

    cards$:Observable<any> = this.store$.select(selectCustomCards)
    searchResult$:Observable<any> = this.store$.select(selectYoutubeVideos)


    constructor(
        private sortServise:SortParamsService,
        private filterService:FilterParamsSortService,
        private store$: Store
        ) {}


    getSortParams() {
        this.dirrection$ = this.sortServise.sharedsortDirection;
        this.type$ = this.sortServise.sharedsortType;
    }

    getInputParams() {
        this.input$ = this.filterService.sharedfilterInput;
    }

    ngOnInit() {
        this.getSortParams();
        this.getInputParams();
    }
}
