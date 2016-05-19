import * as common from '@angular/common';
import { ValidatorFn } from '@angular/common/src/forms/directives/validators';

export const METADATA = '__FORMS_METADATA__';
export const CONNECTED_INFO = '__CONNECTED_INFO__';

export interface ConnectedOption {
  apiUrl: string;
}

export const connected = (options: ConnectedOption) => {
  return <TFunction extends Function>(target: TFunction): TFunction => {
    addMeta(target.prototype, CONNECTED_INFO, 'options', options);
    return target;
  }
}

export function key(target: any, key: string) {
  addMeta(target, key, 'key', true);
};

export const foreignKey = (targetType: Function) => {
  return (target: Object, propertyKey: string | symbol): void => {
    addMeta(target, propertyKey, 'foreignKey', targetType);
  };
};

export const validators = (validators: ValidatorFn) => {
  return (target: Object, propertyKey: string | symbol): void => {
    addMeta(target, propertyKey, 'validators', validators);
  };
}

export const label = (label: string) => {
  return (target: Object, propertyKey: string | symbol): void => {
    addMeta(target, propertyKey, 'label', label);
  };
};

type EditorType = "Text" | "Number" | "Date" | "Markdown" | "Dropdown";
export const type = (editorType: EditorType) => {
  return (target: Object, propertyKey: string | symbol): void => {
    addMeta(target, propertyKey, 'type', editorType);
  };
};

export function addMeta(target: any, propertyKey: string | symbol, metaKey: string, metaValue: any): void {
  if (target) {
    if (!target[METADATA]) {
      target[METADATA] = [];
    }

    if (!target[METADATA][propertyKey]) {
      target[METADATA][propertyKey] = {
        objectKey: propertyKey
      };
    }

    target[METADATA][propertyKey][metaKey] = metaValue;
  }
}

export interface IMetadata {
  objectKey: string;
  isKey: boolean;
  label: string;
  type: EditorType;
  foreignKey: Function;
  validators: ValidatorFn;
}

export const getMeta = (target: Object): Map<string, IMetadata> => {
  console.log(target);
  let meta = new Map<string, IMetadata>();
  for (var key in target[METADATA]) {
    meta.set(key, target[METADATA][key]);
  }
  return meta;
};