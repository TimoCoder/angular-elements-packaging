import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import {FunctionAppModule} from '../src-function/functionapp/app.module';
import 'zone.js/dist/zone';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(FunctionAppModule)
  .catch(err => console.log(err));
