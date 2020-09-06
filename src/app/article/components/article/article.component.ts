import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';


import {articleSelector, errorSelector, isLoadingSelector} from '../../store/selectors';
import {ArticleInterface} from '../../../shared/types/article.interface';
import {getArticleAction} from '../../store/actions/getArticle.action';


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
    this.aSub = this.store.pipe(select(articleSelector)).subscribe(
      (article: ArticleInterface | null) => {
        this.article = article;
        console.log('article', article);
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

}
