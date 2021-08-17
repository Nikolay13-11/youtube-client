import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import {
    ButtonSettingComponent
} from './core/components/header/components/button-setting/button-setting.component';
import { LoginComponent } from './core/components/header/components/login/login.component';
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';

@NgModule({
    declarations: [
        AppComponent,
        ButtonSettingComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        YoutubeModule,
        CoreModule,
        NoopAnimationsModule,
        AuthModule
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
