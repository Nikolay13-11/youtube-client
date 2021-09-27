import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { createCustomCard } from './redux/actions/customCards.actions';
import { selectCustomCards, selectCustomCardsCount } from './redux/selectors/customCards.selector';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    test$ = this.store$.select(selectCustomCards)

    constructor(
        private store$: Store
    ) { }

    updateUser() {
        console.log(this.test$)
    }

        ngOnInit() {
            console.log(this.test$)
        }
}

