import  ICustomCard  from "../youtube/models/custom-card.model";
import { ISearchItem } from "../youtube/models/search-item.model";

export interface AppState {
    customCards: CustomCardsState;
    youtubeVideos: YoutubeVideosState;
}

export interface CustomCardsState {
    customCards: ICustomCard[];
}


export interface YoutubeVideosState {
    youtubeVideos: ISearchItem [],
}

export const initialCustomCardsState: CustomCardsState = {
    customCards: [],
}

export const initialYoutubeVideosState: YoutubeVideosState = {
    youtubeVideos: []
}

export const initialAppState: AppState = {
    customCards: initialCustomCardsState,
    youtubeVideos: initialYoutubeVideosState,
}


// import { IResultStatistic } from '../youtube/models/search-result.model';
// interface InewCard {
//     title: string;
//     description: string;
//     image: string;
//     link: string
// }

// export interface State {
//     apiResult: IResultStatistic;
//     customCards: InewCard[];
// }

// export const initialState:State = {} as State;

