import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { FilterParamsSortService } from 'src/app/youtube/services/filter-params-sort.service';

import { InputSearchService } from '../../services/input-search.service';
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
    form$?: Observable<any>;

    constructor(
        private sortServise:SortParamsService,
        private filterService:FilterParamsSortService,
        private items:InputSearchService,
        ) {}

    updateResult() {
        this.form$ = this.items.sharedsearchResult;
    }

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
        this.updateResult();
    }
}
