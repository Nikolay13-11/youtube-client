import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByInput'
})
export class SortByInputPipe implements PipeTransform {

  transform(value: any[], filterValue?:string) {
    if (!filterValue) {
        return value
    }
    else {
       return value.filter(item => item = 'd')
    }
  }

}
