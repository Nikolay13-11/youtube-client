import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { response } from 'src/app/response';
import { FilterParamsSortService } from 'src/app/shared/services/filter-params-sort.service';
import { SortParamsService } from 'src/app/shared/services/sort-params.service';

@Component({
    selector: 'app-search-item',
    templateUrl: './search-item.component.html',
    styleUrls: ['./search-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchItemComponent implements OnInit{

    form = response.items;
    cont!: number;
    dirrection$?: Observable<any>;
    type$?: Observable<any>;
    input$?: Observable<any>;

    constructor(private sortServise:SortParamsService, private filterService:FilterParamsSortService) {}

    getSortParams() {
        this.dirrection$ = this.sortServise.sharedsortDirection
        this.type$ = this.sortServise.sharedsortType
    }

    getInputParams() {
        this.input$ = this.filterService.sharedfilterInput
    }

    ngOnInit() {
       this.getSortParams()
       this.getInputParams()
    }


}
