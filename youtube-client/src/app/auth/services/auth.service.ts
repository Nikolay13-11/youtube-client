import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { CheckStorage } from 'src/app/shared/helpers/helper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private LoginState = new BehaviorSubject(false);
    private ButtonName = new BehaviorSubject('Login');
    private CurrentName = new BehaviorSubject<string | undefined>('');

    sharedLoginState = this.LoginState.asObservable();
    sharedButtonName = this.ButtonName.asObservable();
    sharedCurrentName = this.CurrentName.asObservable();

    constructor() {}

        nextLoginState(state:boolean) {
            this.LoginState.next(state)
        }

        nextButtonState(state:string) {
            this.ButtonName.next(state)
        }
        nextCurrentName(value:string | undefined) {
            this.CurrentName.next(value)
            console.log(value)
        }



        updateStateAndName() {
            const currentName = localStorage.key(0);
            if(CheckStorage() > 0) {
                this.ButtonName.next('Logout')
                this.CurrentName.next(currentName!)
                this.LoginState.next(true)
            }
        }
}
