import {AuthStateInterface} from '../auth/types/authState.interface';
import {FeedStateInterface} from './modules/feed/types/feedState.interface';
import {TagsStateInterface} from './modules/popular-tags/types/tagsState.interface';

export interface AppStateInterface{
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  tags: TagsStateInterface;
}
