import { Pipe, PipeTransform } from '@angular/core';

export type SortOrder = 'asc' | 'desc';


@Pipe({
    name: 'sortByButton'
})
export class SortByButtonPipe implements PipeTransform {

    transform(value: any[], sortOrder?: SortOrder | string, sortKey?: string): any {

        if (!value || (sortOrder !== 'asc' && sortOrder !== 'desc')) {
            return value;
        }

        if (sortOrder === 'asc') {
            return value.sort( (a: any, b: any):any => {
                if (sortKey === 'date') {
                    let dateA: any = new Date(a.snippet.publishedAt);
                    let dateB: any = new Date(b.snippet.publishedAt);
                    return dateA - dateB
                }
                else if (sortKey === 'count') {
                    return a.statistics.viewCount - b.statistics.viewCount
                }
                else return value;
            })
        }

        if (sortOrder === 'desc') {
            return value.sort( (a: any, b: any):any => {
                if (sortKey === 'date') {
                    let dateA: any = new Date(a.snippet.publishedAt);
                    let dateB: any = new Date(b.snippet.publishedAt);
                    return dateB - dateA
                }
                else if (sortKey === 'count') {
                    return b.statistics.viewCount - a.statistics.viewCount
                }
                else return value;
            })
    }
}
}
