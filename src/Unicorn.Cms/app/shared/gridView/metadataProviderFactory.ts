import * as ng from '@angular/core';
import * as http from '@angular/http';
import * as Rx from 'rxjs';
import { DataProvider } from './dataProvider';

@ng.Injectable()
export class MetadataProviderFactory {
  constructor(private _http: http.Http) {
    console.log('MetadataProviderFactory');
  }

  public create<T>(model: Function): DataProvider<T> {
    return new DataProvider<T>(model);
  }
}