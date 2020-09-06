import {PopularTagType} from '../../../types/popularTag.type';

export interface TagsStateInterface {
  isLoading: boolean;
  error: string | null;
  data: PopularTagType[] | null;
}
