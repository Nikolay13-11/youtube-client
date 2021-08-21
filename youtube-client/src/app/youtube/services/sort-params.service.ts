import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SortParamsService {

    private sortType = new BehaviorSubject('');
    private sortDirection = new BehaviorSubject('');
    private sortPanelState = new BehaviorSubject(false);

    sharedsortType = this.sortType.asObservable();
    sharedsortDirection = this.sortDirection.asObservable();
    sharedsortPanelState = this.sortPanelState.asObservable();

    nextSort(sortDirection:string, sortType:string) {
        this.sortType.next(sortType)
        this.sortDirection.next(sortDirection)
    }

    nextPanelState(state:boolean) {
        this.sortPanelState.next(state)
    }
}
