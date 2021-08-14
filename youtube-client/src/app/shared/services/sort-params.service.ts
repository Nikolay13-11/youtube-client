import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortParamsService {

    private sortType = new BehaviorSubject('');
    private sortDirection = new BehaviorSubject('');

    sharedsortType = this.sortType.asObservable();
    sharedsortDirection = this.sortDirection.asObservable();

  constructor() { }

  nextSort(sortDirection:string, sortType:string) {
      this.sortType.next(sortType)
      this.sortDirection.next(sortDirection)
  }
}
