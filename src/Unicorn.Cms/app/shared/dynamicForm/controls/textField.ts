import * as ng from '@angular/core';
import { BaseField } from './baseField';
import { getMeta, IMetadata } from '../../domain';

@ng.Component({
  selector: 'text-field',
  template: require('./textField.html'),
})
export class TextField extends BaseField {
  ngOnInit(): void {
  }
}
