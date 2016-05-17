import * as ng from '@angular/core';
import * as common from '@angular/common';
import { getMeta, IMetadata } from '../domain';
import * as controls from './controls';

@ng.Component({
  selector: 'dynamic-form',
  template: require('./dynamicForm.html'),
  directives: [controls.Field, controls.Field]
})
export class DynamicForm implements ng.OnInit {
  private form: common.ControlGroup;
  private formConfig: Object = {};
  public metaKeys: string[] = [];
  public meta: Map<string, IMetadata>;
  @ng.Input('model') public model: Object;

  constructor(private _fb: common.FormBuilder) { }

  ngOnInit(): void {
    let modelMeta = getMeta(this.model);
    modelMeta.forEach((value, key) => {
      this.formConfig[key] = new common.Control(undefined, value.validators);
      this.metaKeys.push(key);
    });

    this.form = this._fb.group(this.formConfig);
    this.meta = modelMeta;
  }
}
