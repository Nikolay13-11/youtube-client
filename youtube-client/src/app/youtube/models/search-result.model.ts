import { ISearchItem, IStatisticItem } from './search-item.model';

export interface ISearchResult {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: {
        totalResults: string;
        resultsPerPage: string;
    }
    items: ISearchItem[];
}

export interface IResultStatistic {
    kind: string;
    etag: string;
    items: IStatisticItem[];
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    }
}
