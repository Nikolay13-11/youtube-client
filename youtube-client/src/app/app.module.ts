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
import { StoreModule } from '@ngrx/store';
import { customCardsReducer } from './redux/reducers/customCards.reducer';
import { youtubeVideosReducer } from './redux/reducers/youtubeVideos.reducer';

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
        StoreModule.forRoot({
            customCards: customCardsReducer,
            youtubeVideos: youtubeVideosReducer,
        })
    ],
    providers: [
        LoginGuard,
        INTERCEPTOR_PROVIDER
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
