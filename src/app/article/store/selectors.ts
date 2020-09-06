import {createFeatureSelector, createSelector} from '@ngrx/store';

import {ArticleStateInterface} from '../types/articleState.interface';
import {AppStateInterface} from '../../shared/appState.interface';

export const articleFeatureSelector = createFeatureSelector<AppStateInterface, ArticleStateInterface>('article');

export const isLoadingSelector = createSelector(
  articleFeatureSelector, (articleState: ArticleStateInterface) => articleState.isLoading);

export const articleSelector = createSelector(
  articleFeatureSelector, (articleState: ArticleStateInterface) => articleState.data);

export const errorSelector = createSelector(
  articleFeatureSelector, (articleState: ArticleStateInterface) => articleState.error);
