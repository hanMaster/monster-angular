import {AuthStateInterface} from '../auth/types/authState.interface';
import {FeedStateInterface} from './modules/feed/types/feedState.interface';
import {TagsStateInterface} from './modules/popular-tags/types/tagsState.interface';
import {ArticleStateInterface} from '../article/types/articleState.interface';

export interface AppStateInterface{
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  tags: TagsStateInterface;
  article: ArticleStateInterface;
}
