import { Component, EventEmitter, Output } from '@angular/core';

import { SearchStateService } from 'src/app/youtube/services/search-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent  {
@Output() EventSetting = new EventEmitter();


constructor(private searchState: SearchStateService) {}

    getSearchState(event: Event) {
        event.preventDefault();
        this.searchState.nextState(true)
    }
    onNotify(event: any) {
        this.EventSetting.emit(event)
    }
}
