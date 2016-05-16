import * as ng from '@angular/core';
import { Http, HTTP_BINDINGS } from '@angular/http';
import { Category } from './category/category';
import { Routes } from '@ngrx/router';

export const routes: Routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/categories',
    component: Category
  }
]

@ng.Component({
  selector: 'app',
  template: require('./app.html'),
})
export class App {
}
