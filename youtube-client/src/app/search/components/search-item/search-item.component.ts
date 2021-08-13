import { ChangeDetectionStrategy, Component, Output } from '@angular/core';
import { response } from 'src/app/response';


@Component({
    selector: 'app-search-item',
    templateUrl: './search-item.component.html',
    styleUrls: ['./search-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchItemComponent {

    form = response.items;
    cont!: number;
    dirrection = 'asc';
    sortKey = '';
    @Output() publicDate?: string;

    getDate(date: string): void {
        this.publicDate = date;
    }

}
