import * as ng from '@angular/core';
import { getMeta, IMetadata } from '../domain';

export class Column {
  cellComponent: ng.Type = TextCellComponent;
}

@ng.Component({
  selector: 'select-cell',
  template: 'sadasdas'
})
export class SelectCellComponent {
  constructor() { }
}

@ng.Component({
  selector: 'text-cell',
  template: 'text'
})
export class TextCellComponent {
  constructor() { }
}

export class SelectColumn extends Column {
  constructor(
    public selectCallback: Function,
    public label: string = 'Select',
    public className: string = 'btn btn-primary') {
    super();
    this.cellComponent = SelectCellComponent;
  }
}

export class StringColumn extends Column {
  constructor(
    public meta: IMetadata,
    public label: string = meta.label,
    public className: string = 'btn btn-primary') {
    super();
    this.cellComponent = TextCellComponent;
  }
}