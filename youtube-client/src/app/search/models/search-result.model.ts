import { ISearchItem } from './search-item.model';

export interface IsearchResult {
    kind: string;
    etag: string;
    pageInfo: {
        totalResults: string;
        resultsPerPage: string;
    }
    items: ISearchItem[];
}
