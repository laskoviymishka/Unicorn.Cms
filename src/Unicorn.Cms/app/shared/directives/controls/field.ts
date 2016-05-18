import * as ng from '@angular/core';
import * as common from '@angular/common';
import { BaseField } from './baseField';
import { getMeta, IMetadata } from '../../domain';
import { TextField } from './textField';
import { DropdownField } from './dropdownField';

@ng.Component({
  selector: 'field',
  template: require('./field.html'),
  directives: [TextField, DropdownField],
})
export class Field extends BaseField implements ng.OnInit {
  ngOnInit(): void {
    console.log(this.field);
    console.log(this.model);
    console.log(this.control);
  }
}
