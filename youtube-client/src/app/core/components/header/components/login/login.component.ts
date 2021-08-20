import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

    LogState = 'Login';

    changeLogState() {
        if(this.LogState === 'Login') {
            this.LogState = 'Logout'
        }
        else if (this.LogState === 'Logout'){
            this.LogState = 'Login'
        }
    }
}
