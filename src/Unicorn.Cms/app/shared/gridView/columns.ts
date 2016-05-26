import * as ng from '@angular/core';
import {IMetadata as Metadata} from "../domain/decorators";

export abstract class Column {
  cell: ng.Type = TextCellComponent;
  header: ng.Type = TextHeaderComponent;
  meta: any;
}

export abstract class Cell {
  public column: Column;
  public row: any;
}

export abstract class Header {
  public column: Column;
}

@ng.Component({
  selector: 'cell',
  template: '<button [ngClass]="column.className" (click)="column.select(row, column)">{{column.label}}</button>'
})
export class SelectCellComponent extends Cell { }

@ng.Component({
  selector: 'cell',
  template: '{{text()}}'
})
export class TextCellComponent extends Cell {
  text(): string {
    if (this.row[this.column.meta.objectKey]) {
      return this.row[this.column.meta.objectKey];
    }

    return "";
  }
}

@ng.Component({
  selector: 'column-header',
  template: '{{column.label}}'
})
export class TextHeaderComponent extends Header {
}

export class SelectColumn extends Column {
  constructor(
    public select: Function,
    public label: string = 'Select',
    public className: string = 'btn btn-primary') {
    super();
    this.cell = SelectCellComponent;
  }
}

export class StringColumn extends Column {
  constructor(
    public meta: Metadata,
    public label: string = meta.label,
    public className: string = 'btn btn-primary') {
    super();
    this.cell = TextCellComponent;
  }
}