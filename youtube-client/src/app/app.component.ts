import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { selectCustomCards } from './redux/selectors/customCards.selector';
import { selectYoutubeVideos } from './redux/selectors/youtubeVideos.selector';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    test$ = this.store$.pipe(select(selectCustomCards))
    test1$ = this.store$.pipe(select(selectYoutubeVideos))
    // test1$ = this.store$.select(selectYoutubeVideos)

    constructor(
        private store$: Store
    ) { }

    updateUser() {
        console.log(this.test$)
        console.log(this.test1$)
    }

        ngOnInit() {
            console.log(this.test$)
        }
}

