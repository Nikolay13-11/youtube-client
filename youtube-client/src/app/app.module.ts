import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
    ButtonSettingComponent
} from './header/components/button-setting/button-setting.component';
import { LoginComponent } from './header/components/login/login.component';
import { HeaderComponent } from './header/header.component';
import { SearchItemComponent } from './search/components/search-item/search-item.component';
import {
    SearchResultsComponent
} from './search/components/search-results/search-results.component';
import { SortComponent } from './search/components/sort/sort.component';
import { StatisticComponent } from './search/components/statistic/statistic.component';
import { ChangeBorderColorDirective } from './shared/directives/change-border-color.directive';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ButtonSettingComponent,
        LoginComponent,
        SearchResultsComponent,
        SearchItemComponent,
        StatisticComponent,
        SortComponent,
        ChangeBorderColorDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [
      ChangeBorderColorDirective
    ]
})
export class AppModule { }
