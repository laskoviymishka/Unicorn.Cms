import * as ng from '@angular/core';
import * as router from '@angular/router-deprecated';
import { Http, HTTP_BINDINGS } from '@angular/http';

@ng.Component({
  selector: 'app',
  template: require('./app.html'),
  directives: [router.ROUTER_DIRECTIVES]
})
export class App {
}
