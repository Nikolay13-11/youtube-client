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

interface ISearchItemSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
        default: IthumbnailsSearchItem;
        medium: IthumbnailsSearchItem;
        high: IthumbnailsSearchItem;
        standard: IthumbnailsSearchItem;
        maxres: IthumbnailsSearchItem;
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
        title: string;
        description: string;
    };
    defaultAudioLanguage: string;
}



export interface ISearchItem {
    kind: string;
    etag: string;
    id: string;
    snippet: ISearchItemSnippet;
    statistics: IStatisticSearchItem;
}
