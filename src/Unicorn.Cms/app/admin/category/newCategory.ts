import * as ng from '@angular/core';
import * as http from '@angular/http';
import { RestService } from '../../shared/services';
import * as domain from '../../shared/domain';
import * as directives from '../../shared/directives';

@ng.Component({
  selector: 'new-category',
  template: require('./newCategory.html'),
  directives: [directives.DynamicForm]
})
export class NewCategory {
  public category: domain.Category;

  constructor(private _http: http.Http) {
    this.category = new domain.Category();
  }
}
