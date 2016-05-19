import {Component, ComponentRef, Input, ViewContainerRef, ComponentResolver, ViewChild} from '@angular/core'
import * as common from '@angular/common';
import { getMeta, IMetadata } from '../domain';
import { DataProvider } from './dataProvider';
import { Column } from './columns';
import { GridCell } from './gridCell';

@Component({
  selector: 'dcl-wrapper',
  template: `<div #target></div>`
})
export class DclWrapper {
  @ViewChild('target', { read: ViewContainerRef }) target;
  @Input() type;
  cmpRef: ComponentRef<any>;
  private isViewInitialized: boolean = false;

  constructor(private resolver: ComponentResolver) { }

  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
    //    this.dcl.loadNextToLocation(this.type, this.target).then((cmpRef) => {
    this.resolver.resolveComponent(this.type).then((factory) => {
      this.cmpRef = this.target.createComponent(factory);
      console.log(this.cmpRef);
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
    console.log(this.target);
  }
}

@Component({
  selector: 'c3',
  template: `<h2>c3</h2>`
})
export class C3 {
}

@Component({
  selector: 'tr[grid-row]',
  template: require('./gridRow.html'),
  directives: [DclWrapper]
})
export class GridRow {
  constructor() {
    
  }
  private type = C3;
  @Input('columns') private columns: Column[];
  @Input('row') private row: any;
}

