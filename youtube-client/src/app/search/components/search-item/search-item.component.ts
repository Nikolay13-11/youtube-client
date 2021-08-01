import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import Item from '../../models/item';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchItemComponent implements OnInit {
    @Input() item?: Item;
    title = ''
  constructor() { }

  ngOnInit(): void {
      this.title = 'Search item'
  }

}
