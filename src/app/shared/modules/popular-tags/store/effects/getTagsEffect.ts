import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {PopularTagsService} from '../../services/popular-tags.service';
import {getTagsAction, getTagsFailureAction, getTagsSuccessAction} from '../actions/getTagsAction';
import {PopularTagType} from '../../../../types/popularTag.type';

@Injectable()
export class GetTagsEffect {

  constructor(
    private actions$: Actions,
    private tagsService: PopularTagsService
  ) {
  }

  getTags$ = createEffect(() => this.actions$.pipe(
    ofType(getTagsAction),
    switchMap(() => {
      return this.tagsService.getTags()
        .pipe(
          map((tags: PopularTagType[]) => {
            return getTagsSuccessAction({tags});
          }),
          catchError(() => {
            return of(getTagsFailureAction());
          })
        );
    })
  ));

}
