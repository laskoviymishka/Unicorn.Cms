import * as ng from '@angular/core';
import * as common from '@angular/common';
import { getMeta, IMetadata } from '../domain';
import { DataProvider } from './dataProvider';
import { Column } from './columns';

@ng.Component({
  selector: 'cell-wrapper',
  template: `<div #container></div>`
})
export class CellWrapperComponent {
  @ng.ViewChild('container', { read: ng.ViewContainerRef }) container: ng.ViewContainerRef;
  @ng.Input('column') private column: Column;
  @ng.Input('row') private row: any;

  constructor(
    private cr: ng.ComponentResolver,
    private loader: ng.DynamicComponentLoader,
    private elementRef: ng.ElementRef,
    private injector: ng.Injector) {
  }

  ngAfterViewInit(): void {
    console.log(this.column, this.container);
    this.loader.loadNextToLocation(this.column.cell, this.container)
      .then(ref => {
        ref.instance.column = this.column;
        ref.instance.row = this.row;
      });
  }
}

@ng.Component({
  selector: 'tr[grid-row]',
  template: require('./gridRow.html'),
  directives: [CellWrapperComponent]
})
export class GridRow {
  @ng.Input('columns') private columns: Column[];
  @ng.Input('row') private row: any;
}

