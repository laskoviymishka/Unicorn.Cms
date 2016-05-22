import * as ng from '@angular/core';
import { getMeta, IMetadata } from '../domain';

export class Column {
  cell: ng.Type = TextCellComponent;
  header: ng.Type = TextHeaderComponent;
}

@ng.Component({
  selector: 'cell',
  template: 'select'
})
export class SelectCellComponent {
  constructor() { }
}

@ng.Component({
  selector: 'cell',
  template: 'text'
})
export class TextCellComponent {
  constructor() { }
}

@ng.Component({
  selector: 'column-header',
  template: '{{column.label}}'
})
export class TextHeaderComponent {
  public column: Column;
  constructor() { }
}

export class SelectColumn extends Column {
  constructor(
    public selectCallback: Function,
    public label: string = 'Select',
    public className: string = 'btn btn-primary') {
    super();
    this.cell = SelectCellComponent;
  }
}

export class StringColumn extends Column {
  constructor(
    public meta: IMetadata,
    public label: string = meta.label,
    public className: string = 'btn btn-primary') {
    super();
    this.cell = TextCellComponent;
  }
}