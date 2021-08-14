import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchStateService {

    private State = new BehaviorSubject(false);

    sharedState = this.State.asObservable()

  constructor() { }

  nextState(state:boolean) {
    this.State.next(state)
  }
}
