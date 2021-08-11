import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByInput'
})
export class SortByInputPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
