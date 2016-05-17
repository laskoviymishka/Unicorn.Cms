import * as ng from '@angular/core';
import * as http from '@angular/http';
import { RestService } from '../../shared/services';
import * as domain from '../../shared/domain';

@ng.Component({
  selector: 'category',
  template: require('./category.html')
})
export class Category implements ng.OnInit {
  constructor(private _http: http.Http) {
  }

  ngOnInit(): void {
    this._http.get('/api/categories').subscribe(t => t.json());
  }
}
