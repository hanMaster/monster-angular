import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {errorSelector, isLoadingSelector, tagsSelector} from '../../store/selectors';
import {PopularTagType} from '../../../../types/popularTag.type';
import {getTagsAction} from '../../store/actions/getTagsAction';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  tags$: Observable<PopularTagType[] | null>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.tags$ = this.store.pipe(select(tagsSelector));
    this.error$ = this.store.pipe(select(errorSelector));

  }

  fetchData(): void {
    this.store.dispatch(getTagsAction());
  }
}
