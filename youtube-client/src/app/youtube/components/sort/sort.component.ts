import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FilterParamsSortService } from 'src/app/youtube/services/filter-params-sort.service';

import { SortParamsService } from '../../services/sort-params.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortComponent {

    sortParam:string | undefined;

    constructor(private sortService:SortParamsService, private filterService:FilterParamsSortService) {}

    changeDirection(type:string) {
        if(!this.sortParam || this.sortParam === "desc"){
            this.sortParam = 'asc'
            this.sortService.nextSort('asc', type)
        }
        else {
            this.sortParam = 'desc'
            this.sortService.nextSort('desc', type)
        }
    }

    sortByDate() {
       this.changeDirection('date')
    }

    sortByCount() {
        this.changeDirection('count')
    }

    inputSort(event:any) {
    this.filterService.nextFilter(event.target.value)
    }
}
