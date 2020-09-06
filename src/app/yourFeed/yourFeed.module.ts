import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YourFeedComponent} from './components/yourFeed/yourFeed.component';
import {RouterModule} from '@angular/router';
import {FeedModule} from '../shared/modules/feed/feed.module';
import {BannerModule} from '../shared/modules/banner/banner.module';
import {PopularTagsModule} from '../shared/modules/popular-tags/popular-tags.module';
import {FeedTogglerModule} from '../shared/modules/feedToggler/feedToggler.module';

const routes = [
  {path: 'feed', component: YourFeedComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FeedModule, BannerModule, PopularTagsModule, FeedTogglerModule],
  declarations: [YourFeedComponent]
})

export class YourFeedModule {
}
