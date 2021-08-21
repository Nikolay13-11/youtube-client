import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { response } from 'src/app/response';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit{
    router:ActivatedRoute;

    constructor(router:ActivatedRoute) {
        this.router = router
    }

    items = response.items;
    item: any;

    ngOnInit() {
        const  { id }  = this.router.snapshot.params;
        this.item = this.items.find(i => i.id === id);
    }
}
