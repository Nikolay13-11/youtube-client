import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LoginGuard } from './auth/guards/login.guard';
import { CoreModule } from './core/core.module';
import { HttpReqInterceptor } from './core/interceptors/http.interceptor';
import { YoutubeModule } from './youtube/youtube.module';

const INTERCEPTOR_PROVIDER: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpReqInterceptor,
    multi: true
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        YoutubeModule,
        CoreModule,
        NoopAnimationsModule,
        AuthModule,
        HttpClientModule,
    ],
    providers: [
        LoginGuard,
        INTERCEPTOR_PROVIDER
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
