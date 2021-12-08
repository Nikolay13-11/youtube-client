import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { AdminComponent } from './components/admin/admin.component';
import { DetailComponent } from './components/detail/detail.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SortComponent } from './components/sort/sort.component';
import { ChangeBorderColorDirective } from './directives/change-border-color.directive';
import { MainComponent } from './pages/main/main.component';
import { SortByButtonPipe } from './pipes/sort-by-button.pipe';
import { SortByInputPipe } from './pipes/sort-by-input.pipe';
import { FilterParamsSortService } from './services/filter-params-sort.service';
import { HttpYoutubeService } from './services/http-youtube.service';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
    declarations: [
        MainComponent,
        DetailComponent,
        SearchItemComponent,
        SearchResultsComponent,
        SortComponent,
        SortByButtonPipe,
        SortByInputPipe,
        ChangeBorderColorDirective,
        AdminComponent

    ],
    imports: [
        CommonModule,
        YoutubeRoutingModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        MainComponent
    ],
    providers: [
        FilterParamsSortService,
        HttpYoutubeService,
    ]
})
export class YoutubeModule { }
