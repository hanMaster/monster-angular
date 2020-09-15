import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';


import {articleSelector, errorSelector, isLoadingSelector} from '../../store/selectors';
import {ArticleInterface} from '../../../shared/types/article.interface';
import {getArticleAction} from '../../store/actions/getArticle.action';
import {currentUserSelector} from '../../../auth/store/selectors';
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface';
import {deleteArticleAction} from '../../store/actions/deleteArticle.action';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {

  slug: string;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  article: ArticleInterface | null;
  aSub: Subscription;
  isAuthor$: Observable<boolean>;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isAuthor$ = combineLatest(this.store.pipe(select(articleSelector)), this.store.pipe(select(currentUserSelector)))
      .pipe(
        map(([article, currentUser]: [ArticleInterface | null, CurrentUserInterface | null]) => {
          if (!article || !currentUser) {
            return false;
          }
          return currentUser.username === article.author.username;
        })
      )
    ;


    this.aSub = this.store.pipe(select(articleSelector)).subscribe(
      (article: ArticleInterface | null) => {
        this.article = article;
      }
    );
  }

  private fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}));
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({slug: this.slug}));
  }
}
