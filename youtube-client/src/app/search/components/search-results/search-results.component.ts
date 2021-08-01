import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import Items from '../../models/items';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent implements OnInit {
    @Input() items?: Items;

    title = ''

  constructor() {
  }

  ngOnInit(): void {
      this.title = 'Search result'
  }

}
