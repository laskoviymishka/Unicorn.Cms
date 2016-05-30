import * as aspnet from 'aspnet-prerendering';

export class DuctTape {
  constructor(private _params: aspnet.BootFuncParams) { }

  render(): string {
    return `
            <h1>Hello prerendered world!</h1>
            <div>Params: ${JSON.stringify(this._params)}</div>
          `;
  }
}