import * as ng from '@angular/core';
import * as common from '@angular/common';
import { getMeta, IMetadata } from '../../domain';
import { TextField } from './textField';
import { DropdownField } from './dropdownField';

@ng.Component({
  selector: 'field',
  template: require('./field.html'),
  directives: [TextField, DropdownField],
})
export class Field implements ng.OnInit {
  @ng.Input('control') public control: common.Control;
  @ng.Input('field') public field: IMetadata;
  @ng.Input('model') public model: Object;

  ngOnInit(): void {
    console.log(this.field);
    console.log(this.model);
  }
}
