import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FilterParamsSortService {

    private fiterInput = new BehaviorSubject('');
    sharedfilterInput = this.fiterInput.asObservable();

    nextFilter(input:string) {
        this.fiterInput.next(input)
    }
}
