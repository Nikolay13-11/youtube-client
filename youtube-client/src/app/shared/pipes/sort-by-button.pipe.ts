import { Pipe, PipeTransform } from '@angular/core';

export type SortOrder = 'asc' | 'desc';


@Pipe({
  name: 'sortByButton'
})
export class SortByButtonPipe implements PipeTransform {

  transform(value: any[], sortOrder: SortOrder | string, sortKey?: string): any {

    if(!value || (sortOrder !== 'asc' && sortOrder !== 'desc' ))
    return value;

    let numberArray = [];
    let stringArray = [];


  }

}
