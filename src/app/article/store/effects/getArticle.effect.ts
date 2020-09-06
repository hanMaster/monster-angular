import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ArticleService} from '../../../shared/services/article.service';
import {getArticleAction, getArticleFailureAction, getArticleSuccessAction} from '../actions/getArticle.action';
import {ArticleInterface} from '../../../shared/types/article.interface';

@Injectable()
export class GetArticleEffect {

  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {
  }

  getArticle$ = createEffect(() => this.actions$.pipe(
    ofType(getArticleAction),
    switchMap(({slug}) => {
      return this.articleService.getArticle(slug)
        .pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({article});
          }),
          catchError(() => {
            return of(getArticleFailureAction());
          })
        );
    })
  ));

}
