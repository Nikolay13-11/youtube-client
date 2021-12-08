import { createAction, props } from '@ngrx/store';
import { IStatisticItem } from 'src/app/youtube/models/search-item.model';

export const updateSearchResultsSuccessfully = createAction(
    '[MAIN PAGE] UPDATE YOUTUBE VIDEOS SUCCESSFULLY',
    props<{ searchResults: IStatisticItem[] }>(),
);

