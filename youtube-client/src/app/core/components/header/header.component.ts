import { Component } from '@angular/core';

import { SearchStateService } from 'src/app/youtube/services/search-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent  {

constructor(private searchState: SearchStateService) {}

    getSearchState(event: Event) {
        event.preventDefault();
        this.searchState.nextState(true)
    }
}
