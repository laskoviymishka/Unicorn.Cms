import * as ng from '@angular/core';
import * as common from '@angular/common';
import { getMeta, IMetadata } from '../domain';
import { DataProvider } from './dataProvider';
import { Column, TextCellComponent } from './columns';

@ng.Component({
  selector: 'td[grid-cell]',
  template: require('./gridCell.html')
})
export class GridCell implements ng.OnInit {
  @ng.ViewChild('target', { read: ng.ViewContainerRef }) target: ng.ViewContainerRef;
  @ng.Input('column') private column: Column;
  @ng.Input('row') private row: any;
  cmpRef: ng.ComponentRef<any>;
  private isViewInitialized: boolean = false;
  private counter: number = 0;

  constructor(private resolver: ng.ComponentResolver, private dcl: ng.DynamicComponentLoader) { }

  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }

    //this.dcl.loadNextToLocation(this.column.cellComponent, this.target).then((cmpRef) => {
    this.resolver.resolveComponent(this.column.cellComponent).then((factory: ng.ComponentFactory<any>) => {
    //  //this.cmpRef = this.target.createComponent(factory)
      console.log('cmpRef' + this.counter, factory);
      this.counter++;
    });
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.target);
  }
}
