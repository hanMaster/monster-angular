import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../../appState.interface';
import {TagsStateInterface} from '../types/tagsState.interface';

export const tagsFeatureSelector = createFeatureSelector<AppStateInterface, TagsStateInterface>('tags');

export const isLoadingSelector = createSelector(
  tagsFeatureSelector, (tagsState: TagsStateInterface) => tagsState.isLoading);

export const tagsSelector = createSelector(
  tagsFeatureSelector, (tagsState: TagsStateInterface) => tagsState.data);

export const errorSelector = createSelector(
  tagsFeatureSelector, (tagsState: TagsStateInterface) => tagsState.error);
