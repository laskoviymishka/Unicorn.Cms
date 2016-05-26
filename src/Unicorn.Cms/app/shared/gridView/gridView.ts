import * as ng from '@angular/core';
import * as common from '@angular/common';
import { DataProvider } from './dataProvider';
import { GridRow } from './gridRow';
import { Column, StringColumn } from './columns';
import {Category} from "../domain/contracts";

@ng.Component({
  selector: 'header-wrapper',
  template: `<div #container></div>`
})
class HeaderWrapper {
  @ng.ViewChild('container', { read: ng.ViewContainerRef }) container: ng.ViewContainerRef;
  @ng.Input('column') private column: Column;

  constructor(
    private cr: ng.ComponentResolver,
    private loader: ng.DynamicComponentLoader,
    private elementRef: ng.ElementRef,
    private injector: ng.Injector) {
  }

  ngAfterViewInit(): void {
    this.loader.loadNextToLocation(this.column.header, this.container)
      .then(ref => {
        ref.instance.column = this.column;
        console.log(ref.instance);
      });
  }
}
@ng.Component({
  selector: 'grid-view',
  template: require('./gridView.html'),
  directives: [GridRow, HeaderWrapper]
})
export class GridView implements ng.OnInit {
  data: Category[] = [Category.random(), Category.random(), Category.random()];
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
  public columns: (Column | string)[];
}
