import ICustomCard from '../youtube/models/custom-card.model';
import { IStatisticItem } from '../youtube/models/search-item.model';

export interface AppState {
    customCards: CustomCardsState;
    youtubeVideos: YoutubeVideosState;
}

export interface CustomCardsState {
    customCards: ICustomCard[];
}


export interface YoutubeVideosState {
    youtubeVideos: IStatisticItem []
}

export const initialCustomCardsState: CustomCardsState = {
    customCards: [],
}

export const initialYoutubeVideosState: YoutubeVideosState = {
    youtubeVideos: [],
}

export const initialAppState: AppState = {
    customCards: initialCustomCardsState,
    youtubeVideos: initialYoutubeVideosState,
}


