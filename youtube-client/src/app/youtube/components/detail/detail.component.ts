import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { selectYoutubeVideos } from 'src/app/redux/selectors/youtubeVideos.selector';

import { IStatisticItem } from '../../models/search-item.model';
import { InputSearchService } from '../../services/input-search.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy{
    router:ActivatedRoute;
    sub?: Subscription;
    searchResult$:Observable<any> = this.store$.select(selectYoutubeVideos)

    constructor(
        router:ActivatedRoute,
        private store$: Store
        ) {
        this.router = router
    }

    detailSearchItem!: IStatisticItem;

    ngOnInit() {
        const  { id }  = this.router.snapshot.params;
        this.sub = this.searchResult$?.subscribe(i => {
        this.detailSearchItem = i.find((i:any) => i.id === id)
        })
    }

    ngOnDestroy() {
        this.sub?.unsubscribe()
    }
}
