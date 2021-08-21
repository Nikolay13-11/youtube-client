import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { addToStorage } from '../../shared/helpers/helper';
import { ILogin } from '../models/login.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit{

    constructor (private router:Router, private log: AuthService) {}

    form!: FormGroup;
    userName:string = '';
    password:string = '';
    formValues?:ILogin;

    ngOnInit() {
        this.form = new FormGroup({
            userName: new FormControl('', Validators.required),
            password: new FormControl(null, Validators.required)
        })
    }

    submit() {
        this.formValues = {...this.form.value}
        let name = this.formValues?.userName
        addToStorage(name!.replace(/\s/g, ''))
        this.router.navigate(['/main'])
        this.log.nextLoginState(true)
        this.log.nextButtonState('Logout')
        this.log.nextName(name!)
        this.form.reset()
    }
}
