import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getFeedAction} from '../../store/actions/getFeed.action';
import {Observable} from 'rxjs';
import {GetFeedResponseInterface} from '../../types/getFeedResponse.interface';
import {dataSelector, errorSelector, isLoadingSelector} from '../../store/selectors';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('apiUrl') apiUrlProps: string;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feed$: Observable<GetFeedResponseInterface | null>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(dataSelector));
  }

  private fetchData(): void {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}));
  }
}
