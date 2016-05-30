import * as aspnet from 'aspnet-prerendering';
import { DuctTape } from './DuctTape.component';

let boot: aspnet.BootFunc = function (params: aspnet.BootFuncParams) {
  return new Promise<{ html: string, globals?: any }>(function (resolve, reject) {
    resolve({
      html: new DuctTape(params).render(),
      globals: {}
    });
  });
}

export default boot;