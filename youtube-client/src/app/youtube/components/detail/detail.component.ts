import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import { IStatisticItem } from '../../models/search-item.model';
import { InputSearchService } from '../../services/input-search.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy{
    router:ActivatedRoute;
    serchResultItems$?: Observable<any[]>;
    sub?: Subscription;

    constructor(router:ActivatedRoute, private resultSearch:InputSearchService,) {
        this.router = router
    }

    updateResult() {
        this.serchResultItems$ = this.resultSearch.sharedsearchResult
    }

    detailSearchItem!: IStatisticItem;

    ngOnInit() {
        this.updateResult();
        const  { id }  = this.router.snapshot.params;
        this.sub = this.serchResultItems$?.subscribe(i => {
        this.detailSearchItem = i.find(i => i.id === id)
        })
    }

    ngOnDestroy() {
        this.sub?.unsubscribe()
    }
}
