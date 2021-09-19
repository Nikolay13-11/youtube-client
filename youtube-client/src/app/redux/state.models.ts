import { IResultStatistic } from '../youtube/models/search-result.model';

interface InewCard {
    title: string;
    description: string;
    image: string;
    link: string
}

export interface State {
    apiResult: IResultStatistic;
    customCards: InewCard[];
}

export const initialState:State = {} as State;
