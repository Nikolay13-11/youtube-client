import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { SearchStateService } from '../../services/search-state.service';
import { SortParamsService } from '../../services/sort-params.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

    stateSearch = false;
    stateSort = false;
    test$?: Observable<boolean>;

  constructor(private steteFromService:SearchStateService, private stateFromSortService:SortParamsService) { }

    updateStateSort() {
        this.test$ = this.stateFromSortService.sharedsortPanelState;
    }

    ngOnInit() {
        this.updateStateSort()
        this.steteFromService.sharedState.subscribe(state => this.stateSearch = state);
    }


}
