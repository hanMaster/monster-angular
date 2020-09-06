import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationComponent} from './components/pagination/pagination.component';
import {UtilsService} from '../../services/utils.service';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
  imports: [CommonModule, RouterModule],
  providers: [UtilsService]
})
export class PaginationModule {
}
