import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { ClearStorage } from 'src/app/auth/helpers/helper';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SearchStateService } from 'src/app/youtube/services/search-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
//   changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

    constructor(private router:Router, private log: AuthService, private state:SearchStateService) {}
    lofStateFromService$?: Observable<string>
    LogState = '';
    State$?:Observable<boolean>;
    UserName$?:Observable<string>

    checkState() {
        this.lofStateFromService$ = this.log.sharedButtonState;
    }

    upgradeState() {
        this.State$ = this.log.sharedLoginState
    }

    upgradeUserName() {
        this.UserName$ = this.log.sharedName
    }

    ngOnInit () {
        this.checkState()
        this.upgradeState()
        this.upgradeUserName()
        this.log.nextName('Your Name')
    }

    logOut() {
        if(this.State$) {
            this.router.navigate([''])
            ClearStorage()
            this.log.nextLoginState(false)
            this.log.nextName('Your Name')
            this.log.nextButtonState('Login');
            this.state.nextState(false)

        }
    }
}
