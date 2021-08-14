import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { response } from 'src/app/response';
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

    constructor(private sortServise:SortParamsService) {}

    getI() {
        this.dirrection$ = this.sortServise.sharedsortDirection
        this.type$ = this.sortServise.sharedsortType
    }

    ngOnInit() {
       this.getI()
    }


}
