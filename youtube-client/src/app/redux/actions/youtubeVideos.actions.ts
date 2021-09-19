import { createAction, props } from "@ngrx/store"
import { ISearchItem } from "src/app/youtube/models/search-item.model";
import { ISearchResult } from "src/app/youtube/models/search-result.model"



// export const fetchSearchResults = createAction(
//     '[MAIN PAGE] FETCH YOUTUBE VIDEOS',
// );

export const updateSearchResultsSuccessfully = createAction(
    '[MAIN PAGE] UPDATE YOUTUBE VIDEOS SUCCESSFULLY',
    props<{ searchResults: ISearchItem[] }>(),
);

