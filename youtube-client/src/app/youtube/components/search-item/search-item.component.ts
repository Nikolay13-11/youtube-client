import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { response } from 'src/app/response';
import { FilterParamsSortService } from 'src/app/youtube/services/filter-params-sort.service';

import { SortParamsService } from '../../services/sort-params.service';

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
    a = '';
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
    t(event: Event) {
        this.a = (event.target as HTMLElement).id
        console.log(this.a)
    }


}
