import * as ng from '@angular/core';
import * as common from '@angular/common';
import { getMeta, IMetadata } from '../domain';
import { DataProvider } from './dataProvider';
import { GridRow } from './gridRow';
import { Column, StringColumn } from './columns';

@ng.Component({
  selector: 'grid-view',
  template: require('./gridView.html'),
  directives: [GridRow]
})
export class GridView implements ng.OnInit {
  @ng.Input('options') private options: GridViewOptions;
  ngOnInit(): void {
    console.log(this.options);
    if (!this.options.columns) {
      this._populateDefaultColumns();
    } else {
      this._normalizeColumns();
    }
  }

  private _populateDefaultColumns(): void {
    let columns = [];
    this.options.provider.meta.forEach((v, k) => {
      if (v.label) {
        columns.push(new StringColumn(v));
      }
    });

    this.options.columns = columns;
  }

  private _normalizeColumns(): void {
    let columns = [];
    for (let column of this.options.columns) {
      if (typeof column === 'string' || column instanceof String) {
        columns.push(new StringColumn(this.options.provider.meta.find(t => t.objectKey == column)));
      } else {
        columns.push(column);
      }
    }

    this.options.columns = columns;
  }
}

export class GridViewOptions {
  public provider: DataProvider<any>;
  public columns: (Column| string)[];
}
