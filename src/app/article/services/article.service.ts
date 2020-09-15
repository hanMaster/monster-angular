import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {
  }

  deleteArticle(slug: string): Observable<{}> {
    return this.http.delete(`${environment.apiUrl}/articles/${slug}`);
  }
}
