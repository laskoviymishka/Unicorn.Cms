import * as ng from '@angular/core';
import { getMeta, IMetadata } from '../../domain';
import { BmdBootDirective } from '../../directives/BmdBootDirective';
import { BaseField } from './baseField';
import * as grid from '../../gridView';

@ng.Component({
  selector: 'dropdown-field',
  template: require('./dropdownField.html'),
  directives: [BmdBootDirective, grid.GridView],
  providers: [grid.MetadataProviderFactory]
})
export class DropdownField extends BaseField implements ng.OnInit {
  private options: grid.GridViewOptions;

  constructor(private _providerFactory: grid.MetadataProviderFactory) {
    super();
  }

  ngOnInit(): void {
    this.options = new grid.GridViewOptions();
    this.options.provider = this._providerFactory.create<any>(this.field.foreignKey);
    console.log(this.options);
  }
}
