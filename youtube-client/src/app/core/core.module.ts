import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ErrorPageComponent } from './components/error-page/error-page.component';
import {
    ButtonSettingComponent
} from './components/header/components/button-setting/button-setting.component';
import { LoginComponent } from './components/header/components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { CoreRoutingModule } from './core-routing.module';
import { HttpReqInterceptor } from './interceptors/http.interceptor';

@NgModule({
    declarations: [
        ErrorPageComponent,
        ButtonSettingComponent,
        LoginComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        CoreRoutingModule,
        FormsModule
    ],
    exports: [
        HeaderComponent,
         ],
    providers: [
        HttpReqInterceptor
    ]
})
export class CoreModule { }
