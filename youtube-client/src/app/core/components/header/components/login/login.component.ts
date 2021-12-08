import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ClearStorage } from 'src/app/shared/helpers/helper';
import { SearchStateService } from 'src/app/youtube/services/search-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    constructor(
        private router:Router,
        private authService: AuthService,
        private state:SearchStateService,
        private activeRouter: ActivatedRoute,
        ) {}
    buttonActionName$?: Observable<string>
    loginState$?:Observable<boolean>;
    UserName$?:Observable<string | undefined>

    checkState() {
        this.buttonActionName$ = this.authService.sharedButtonName;
    }

    updatesharedButtonName() {
        this.loginState$ = this.authService.sharedLoginState
    }

    updateUserName() {
        this.UserName$ = this.authService.sharedCurrentName
    }

    updateCurrentStateLogin() {
        this.authService.updateStateAndName()
    }

    ngOnInit () {
        this.checkState()
        this.updatesharedButtonName()
        this.updateUserName()
        this.authService.nextCurrentName('Your Name')
        this.updateCurrentStateLogin();
    }

    closeAdmin() {
        if(this.router.url === '/main/admin') {
            this.router.navigate(['/main'])
        }
    }

    logOut() {
        if(this.loginState$) {
            this.router.navigate([''])
            ClearStorage()
            this.authService.nextLoginState(false)
            this.authService.nextCurrentName('Your Name')
            this.authService.nextButtonState('Login');
            this.state.nextState(false)
        }
    }
}
