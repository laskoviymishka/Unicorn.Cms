import * as decorators from './decorators';
import * as common from '@angular/common';

@decorators.connected
export class Category {
  private _name: string;
  private _parentId: number;
  private _id: number;

  @decorators.key
  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  @decorators.label("Category Name")
  @decorators.type("Text")
  @decorators.validators(common.Validators.compose([common.Validators.required]))
  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  @decorators.foreignKey(Category)
  @decorators.label("Parent Category")
  @decorators.type("Dropdown")
  public get parentId(): number {
    return this._parentId;
  }

  public set parentId(value: number) {
    this._parentId = value;
  }
}