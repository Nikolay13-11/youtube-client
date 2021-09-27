import { createAction, props } from '@ngrx/store';

// export const fetchSearchResults = createAction(
//     '[MAIN PAGE] FETCH YOUTUBE VIDEOS',
// );

export const updateSearchResultsSuccessfully = createAction(
    '[MAIN PAGE] UPDATE YOUTUBE VIDEOS SUCCESSFULLY',
    props<{ searchResults: any}>(),
);

