import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SortParamsService } from 'src/app/shared/services/sort-params.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortComponent {


    message:string | undefined;

    constructor(private sortService:SortParamsService) {}


    changeDirection(type:string) {
        if(!this.message || this.message === "desc"){
            this.message = 'asc'
            this.sortService.nextSort('asc', type)
        }
        else {
            this.message = 'desc'
            this.sortService.nextSort('desc', type)
        }
    }


    sortByDate() {
       this.changeDirection('date')
    }

    sortByCount() {
        this.changeDirection('count')
}

}
