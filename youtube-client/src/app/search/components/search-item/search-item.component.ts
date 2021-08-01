import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchItemComponent implements OnInit {
    title = ''
  constructor() { }

  ngOnInit(): void {
      this.title = 'Search item'
  }

}
