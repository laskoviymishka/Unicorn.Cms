import * as ng from '@angular/core';
import * as common from '@angular/common';
import { getMeta, IMetadata } from '../../domain';

export class BaseField {
  @ng.Input('control') public control: common.Control;
  @ng.Input('field') public field: IMetadata;
  @ng.Input('model') public model: Object;
}
