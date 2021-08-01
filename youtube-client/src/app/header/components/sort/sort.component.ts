import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortComponent implements OnInit {
    title = ''

  constructor() { }

  ngOnInit(): void {
      this.title = 'Search'
  }

}
