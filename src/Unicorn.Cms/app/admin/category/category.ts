import * as ng from '@angular/core';
import * as http from '@angular/http';
import { RestService } from '../../shared/services';
import * as domain from '../../shared/domain';
import * as directives from '../../shared/directives';
import * as grid from '../../shared/gridView';

@ng.Component({
  selector: 'category',
  template: require('./category.html'),
  directives: [grid.GridView],
  providers: [grid.MetadataProviderFactory]
})
export class Category implements ng.OnInit {
  private options: grid.GridViewOptions;
  constructor(private _providerFactory: grid.MetadataProviderFactory) {
    this.options = new grid.GridViewOptions();
    this.options.provider = _providerFactory.create<domain.Category>(domain.Category);
    this.options.columns = ['name', 'parentId', new grid.SelectColumn(() => { console.log('sadasd'); })];
  }

  ngOnInit(): void {
    //this._http.get('/api/categories').subscribe(t => t.json());
  }
}
