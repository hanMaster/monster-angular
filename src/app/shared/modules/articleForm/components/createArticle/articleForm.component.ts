import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {ArticleInputInterface} from '../../../../types/articleInput.interface';
import {BackendErrorsInterface} from '../../../../types/backendErrors.interface';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-article-form',
  templateUrl: './articleForm.component.html',
  styleUrls: ['./articleForm.component.scss']
})

export class ArticleFormComponent implements OnInit{

  // tslint:disable-next-line:no-input-rename
  @Input('initialValues') initialValuesProps: ArticleInputInterface;
  // tslint:disable-next-line:no-input-rename
  @Input('isSubmitting') isSubmittingProps: boolean;
  // tslint:disable-next-line:no-input-rename
  @Input('errors') errorsProps: BackendErrorsInterface | null;

  // tslint:disable-next-line:no-output-rename
  @Output('articleSubmit') articleSubmitEvent = new EventEmitter<ArticleInputInterface>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      title: '',
      description: '',
      body: '',
      tagList: ''
    });
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }
}
