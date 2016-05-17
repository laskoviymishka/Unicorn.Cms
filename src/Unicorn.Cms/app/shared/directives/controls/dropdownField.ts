import * as ng from '@angular/core';
import { getMeta, IMetadata } from '../../domain';

@ng.Component({
  selector: 'dropdown-field',
  template: require('./dropdownField.html'),
})
export class DropdownField implements ng.OnInit {
  ngOnInit(): void {
  }
}
