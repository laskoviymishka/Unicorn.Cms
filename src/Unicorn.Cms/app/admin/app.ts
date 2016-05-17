import * as ng from '@angular/core';
import { Http, HTTP_BINDINGS } from '@angular/http';
import { Category } from './category';
import { NewCategory } from './category/newCategory';
import { Post } from './post/post';
import { User } from './user/user';
import { Routes } from '@ngrx/router';

export const routes: Routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/categories',
    component: Category,
    children: [
      {
        path: 'new',
        component: NewCategory
      }
    ]
  },
  {
    path: '/users',
    component: User
  },
  {
    path: '/posts',
    component: Post
  }
]

@ng.Component({
  selector: 'app',
  template: require('./app.html'),
})
export class App {
}
