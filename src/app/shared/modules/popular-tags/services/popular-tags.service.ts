import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {TagsResponseInterface} from '../types/tagsResponse.interface';
import {PopularTagType} from '../../../types/popularTag.type';
import {map} from 'rxjs/operators';

@Injectable()

export class PopularTagsService {


  constructor(private http: HttpClient) {
  }

  getTags(): Observable<PopularTagType[]> {
    const fullUrl = `${environment.apiUrl}/tags`;
    return this.http.get<TagsResponseInterface>(fullUrl)
      .pipe(
        map((response: TagsResponseInterface) => {
          return response.tags;
        })
      );
  }
}
