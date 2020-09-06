import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {PopularTagType} from '../../../../types/popularTag.type';

export const getTagsAction = createAction(
  ActionTypes.GET_TAGS
);

export const getTagsSuccessAction = createAction(
  ActionTypes.GET_TAGS_SUCCESS,
  props<{ tags: PopularTagType[] }>()
);
export const getTagsFailureAction = createAction(
  ActionTypes.GET_TAGS_FAILURE
);
