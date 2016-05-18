import * as ng from '@angular/core';
import { getMeta, IMetadata } from '../../domain';
import { BmdBootDirective } from '../../directives/BmdBootDirective';
import { BaseField } from './baseField';

@ng.Component({
  selector: 'dropdown-field',
  template: require('./dropdownField.html'),
  directives: [BmdBootDirective]
})
export class DropdownField extends BaseField implements ng.OnInit {
  ngOnInit(): void {
  }
}
