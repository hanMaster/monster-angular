import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleFormComponent} from './components/createArticle/articleForm.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ArticleFormComponent],
  exports: [ArticleFormComponent]
})

export class ArticleFormModule {
}
