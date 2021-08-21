import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private LoginState = new BehaviorSubject(false);
    private ButtonState = new BehaviorSubject('Login');
    private Name = new BehaviorSubject('');

    sharedLoginState = this.LoginState.asObservable();
    sharedButtonState = this.ButtonState.asObservable();
    sharedName = this.Name.asObservable();

    constructor() {}

        nextLoginState(state:boolean) {
            this.LoginState.next(state)
        }

        nextButtonState(state:string) {
            this.ButtonState.next(state)
        }
        nextName(value:string) {
            this.Name.next(value)
        }

}
