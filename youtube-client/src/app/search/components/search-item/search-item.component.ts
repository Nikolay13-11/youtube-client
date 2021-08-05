import { ChangeDetectionStrategy, Component } from '@angular/core';
import { response } from 'src/app/response';

@Component({
    selector: 'app-search-item',
    templateUrl: './search-item.component.html',
    styleUrls: ['./search-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchItemComponent {
    form = response.items;
    date = new Date;

}
