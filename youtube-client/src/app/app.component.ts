import { Component, OnInit } from '@angular/core';

import { SearchStateService } from './shared/services/search-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    stateSort: any = false;
    stateMainSearch = false;

    message:string | undefined;

    constructor(private stateService:SearchStateService) {}

    ngOnInit() {
        this.stateService.sharedState.subscribe(state => this.stateMainSearch = state)
    }

    eventSort(state: any) {
        this.stateSort = state;
    }

    changeStateMainSearch() {
        this.stateMainSearch = true
    }

}
