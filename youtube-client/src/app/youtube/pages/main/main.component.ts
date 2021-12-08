import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { SortParamsService } from '../../services/sort-params.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit{

    stateSort$?: Observable<boolean>;

    constructor( private stateFromSortService: SortParamsService) { }

    ngOnInit() {
        this.updateStateSort();
    }

    updateStateSort() {
        this.stateSort$ = this.stateFromSortService.sharedsortPanelState;
    }
}
