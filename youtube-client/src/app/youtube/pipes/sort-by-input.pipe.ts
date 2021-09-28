import { Pipe, PipeTransform } from '@angular/core';
import { IStatisticItem } from '../models/search-item.model';

@Pipe({
  name: 'sortByInput'
})
export class SortByInputPipe implements PipeTransform {

    transform(value: IStatisticItem[], filterValue:string) {

        if (!filterValue) {
            return value;
        }

        return value.filter(item => (item.snippet.title).toLowerCase().includes(filterValue.toLowerCase()))
    }
}
