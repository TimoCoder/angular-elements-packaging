import './polyfills.ts';
import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {environment} from "./environments/environment";
//import "zone.js/dist/zone";
import {RulesetAppModule} from "./rulesetapp/app.module";


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RulesetAppModule)
  .catch(err => console.log(err));
