interface IthumbnailsSearchItem {
    url: string;
    width: string;
    height: string;
}

interface IStatisticSearchItem {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
}

interface ISearchItemStatisticSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
        default: IthumbnailsSearchItem;
        medium: IthumbnailsSearchItem;
        high: IthumbnailsSearchItem;
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
        title: string;
        description: string;
    };
}

interface ISearchItemSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
        default: IthumbnailsSearchItem;
        medium: IthumbnailsSearchItem;
        high: IthumbnailsSearchItem;
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
}



export interface ISearchItem {
    kind: string;
    etag: string;
    id: {
        kind: string;
        videoId: string;
    };
    snippet: ISearchItemSnippet;
    statistics: IStatisticSearchItem;
}

export interface IStatisticItem {
    kind: string;
    etag: string;
    id: string;
    snippet: ISearchItemStatisticSnippet;
    statistics: IStatisticSearchItem;
}
