import {Action, createReducer, on} from '@ngrx/store';
import {TagsStateInterface} from '../types/tagsState.interface';
import {getTagsAction, getTagsFailureAction, getTagsSuccessAction} from './actions/getTagsAction';

const initialState: TagsStateInterface = {
  isLoading: false,
  error: null,
  data: null
};

const tagsReducer = createReducer(
  initialState,
  on(getTagsAction, (state): TagsStateInterface => ({
    ...state,
    isLoading: true
  })),
  on(getTagsSuccessAction, (state, action): TagsStateInterface => ({
    ...state,
    isLoading: false,
    data: action.tags
  })),
  on(getTagsFailureAction, (state): TagsStateInterface => ({
    ...state,
    isLoading: false,
  }))
);

export function reducers(state: TagsStateInterface, action: Action): any {
  return tagsReducer(state, action);
}
