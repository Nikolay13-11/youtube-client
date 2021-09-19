import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ILogin } from 'src/app/shared/models/login.model';

import { addToStorage } from '../../shared/helpers/helper';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

    constructor(private router: Router, private authService: AuthService){ }

    form!: FormGroup;
    userName: string = '';
    password: string = '';
    formValues?: ILogin;

    ngOnInit() {
        this.form = new FormGroup({
            userName: new FormControl('', Validators.required),
            password: new FormControl(null, Validators.required)
        })
    }

    submitLoginForm() {
        this.formValues = { ...this.form.value }
        let nameToStorage = this.formValues?.userName
        addToStorage(nameToStorage!.replace(/\s/g, ''))
        this.router.navigate(['/main'])
        this.authService.nextLoginState(true)
        this.authService.nextButtonState('Logout')
        this.authService.nextCurrentName(nameToStorage)
        this.form.reset()
    }
}
