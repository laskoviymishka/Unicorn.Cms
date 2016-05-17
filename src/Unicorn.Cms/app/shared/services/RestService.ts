import * as http from '@angular/http';
import * as Rx from 'rxjs';

export class RestService<TModel> {
  constructor(private _http: http.Http) {
    console.log();
  };

  get(): Rx.Observable<TModel[]> {
    return null;
  }

  getOne(id: any): Rx.Observable<TModel> {
    return null;
  }

  post(value: TModel): Rx.Observable<any> {
    return null;
  }

  put(value: TModel): Rx.Observable<any> {
    return null;
  }

  delete(id: any): Rx.Observable<any> {
    return null;
  }
}