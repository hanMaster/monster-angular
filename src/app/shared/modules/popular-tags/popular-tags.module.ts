import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopularTagsComponent} from './components/popular-tags/popular-tags.component';
import {PopularTagsService} from './services/popular-tags.service';
import {ErrorMessageModule} from '../errorMessage/errorMessage.module';
import {LoadingModule} from '../loading/loading.module';
import {EffectsModule} from '@ngrx/effects';
import {GetTagsEffect} from './store/effects/getTagsEffect';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    ErrorMessageModule,
    LoadingModule,
    EffectsModule.forFeature([GetTagsEffect]),
    StoreModule.forFeature('tags', reducers),
    RouterModule
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService]
})
export class PopularTagsModule {
}
