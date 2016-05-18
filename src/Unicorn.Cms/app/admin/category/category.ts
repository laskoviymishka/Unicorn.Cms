import * as ng from '@angular/core';
import * as http from '@angular/http';
import { RestService } from '../../shared/services';
import * as domain from '../../shared/domain';
import * as directives from '../../shared/directives';
import * as gridView from '../../shared/gridView';

@ng.Component({
  selector: 'category',
  template: require('./category.html'),
  directives: [gridView.GridView]
})
export class Category implements ng.OnInit {
  private provider: gridView.DataProvider<domain.Category>;
  constructor(private _http: http.Http) {
    this.provider = new gridView.DataProvider<domain.Category>(domain.Category);
  }

  ngOnInit(): void {
    this._http.get('/api/categories').subscribe(t => t.json());
  }
}
