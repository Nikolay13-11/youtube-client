import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import { InputSearchService } from '../../services/input-search.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy{
    router:ActivatedRoute;
    items$?: Observable<any[]>;
    sub?: Subscription;

    constructor(router:ActivatedRoute, private resultSearch:InputSearchService,) {
        this.router = router
    }

    updateResult() {
        this.items$ = this.resultSearch.sharedsearchResult
    }

    item: any;

    ngOnInit() {
        this.updateResult();
        const  { id }  = this.router.snapshot.params;
        this.items$?.subscribe(i => {
        this.sub = this.item = i.find(i => i.id === id)
        })
    }

    ngOnDestroy() {
        this.sub?.unsubscribe()
    }
}
