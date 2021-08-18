import { Component, OnInit } from '@angular/core';

import { response } from 'src/app/response';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit{

    items = response.items;
    id = 'YN8zNnV0sK8';
    item: any;

    ngOnInit() {
        this.item = this.items.find(i => i.id === this.id)
    }




}
