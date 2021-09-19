import { createAction, props } from "@ngrx/store"
import  ICustomCard  from '../../youtube/models/custom-card.model'

export const createCustomCard = createAction(
    '[ADMIN PAGE] CREATE CUSTOM CARD',
    props<{ newCustomCard: ICustomCard }>(),
);
