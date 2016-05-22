import * as ng from '@angular/core';
import * as common from '@angular/common';
import { getMeta, IMetadata } from '../domain';
import { DataProvider } from './dataProvider';
import { Column, TextCellComponent } from './columns';

@ng.Component({
  selector: 'td[grid-cell]',
  template: require('./gridCell.html')
})
export class GridCell {
  @ng.ViewChild('cell', { read: ng.ViewContainerRef }) cell: ng.ViewContainerRef;
  @ng.Input('column') private column: Column;
  @ng.Input('row') private row: any;
  cmpRef: ng.ComponentRef<any>;
  private isViewInitialized: boolean = false;
  private counter: number = 0;

  constructor(
    private cr: ng.ComponentResolver,
    private dcl: ng.DynamicComponentLoader,
    private injector: ng.Injector,
    private vcr: ng.ViewContainerRef) { }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

  ngAfterViewInit(): void {
    //console.log(this.counter++, this.cell);
    //this.cr.resolveComponent(this.column.cellComponent).then(factory => {
    //  //factory.selector = '#cell';
    //  //factory.create(this.injector);
    //  //console.log(factory);
    //});
    //this.dcl.loadNextToLocation(this.column.cellComponent, this.cell)
    //  .then(ref => {
    //    this.cmpRef = ref;
    //    ref.instance.column = this.column;
    //    ref.instance.row = this.row;
    //    console.log(ref.instance);
    //  });
  }
}
