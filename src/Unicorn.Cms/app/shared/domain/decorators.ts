import * as common from '@angular/common';
import { ValidatorFn } from '@angular/common/src/forms/directives/validators';

export const META_KEY = '__meta__';

export function connected<TFunction extends Function>(target: TFunction): TFunction {
  console.log('connected', target);
  return target;
}

export function key(target: any, key: string) {
  console.log(target, key, 'key', target);
  addMeta(target, key, 'key', true);
};

export const foreignKey = (targetType: Function) => {
  return (target: Object, propertyKey: string | symbol): void => {
    console.log(target, propertyKey, 'foreignKey', targetType);
    addMeta(target, propertyKey, 'foreignKey', targetType);
  };
};

export const validators = (validators: ValidatorFn) => {
  return (target: Object, propertyKey: string | symbol): void => {
    console.log(target, propertyKey, 'validators', validators);
    addMeta(target, propertyKey, 'validators', validators);
  };
}

export const label = (label: string) => {
  return (target: Object, propertyKey: string | symbol): void => {
    console.log(target, propertyKey, 'label', label);
    addMeta(target, propertyKey, 'label', label);
  };
};

type EditorType = "Text" | "Number" | "Date" | "Markdown" | "Dropdown";
export const type = (editorType: EditorType) => {
  return (target: Object, propertyKey: string | symbol): void => {
    console.log(target, propertyKey, 'type', editorType);
    addMeta(target, propertyKey, 'type', editorType);
  };
};

export function addMeta(target: any, propertyKey: string | symbol, metaKey: string, metaValue: any): void {
  if (target) {
    if (!target[META_KEY]) {
      target[META_KEY] = [];
    }

    if (!target[META_KEY][propertyKey]) {
      target[META_KEY][propertyKey] = {};
    }

    target[META_KEY][propertyKey][metaKey] = metaValue;
  }
}

export interface IMetadata {
  key: boolean;
  label: string;
  type: EditorType;
  foreignKey: Function;
  validators: ValidatorFn;
}

export const getMeta = (target: Object): Map<string, IMetadata> => {
  let meta = new Map<string, IMetadata>();
  for (var key in target[META_KEY]) {
    meta.set(key, target[META_KEY][key]);
  }
  return meta;
};