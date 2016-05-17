import * as ng from '@angular/core';
import { getMeta, IMetadata } from '../../domain';

@ng.Component({
  selector: 'text-field',
  template: require('./textField.html'),
})
export class TextField implements ng.OnInit {
  ngOnInit(): void {
  }
}
