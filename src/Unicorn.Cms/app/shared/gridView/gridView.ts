import * as ng from '@angular/core';
import * as common from '@angular/common';
import { getMeta, IMetadata } from '../domain';
import { DataProvider } from './dataProvider';

@ng.Component({
  selector: 'grid-view',
  template: require('./gridView.html')
})
export class GridView implements ng.OnInit {
  @ng.Input('data-provider') private provider: DataProvider<any>;
  ngOnInit(): void {
    console.log(this.provider);
  }
}
