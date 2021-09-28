import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { selectCustomCards } from './redux/selectors/customCards.selector';
import { selectYoutubeVideos } from './redux/selectors/youtubeVideos.selector';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

}

