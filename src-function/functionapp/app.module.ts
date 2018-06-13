import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from "@angular/core";

import {createCustomElement} from "@angular/elements";

import {FunctionAppComponent} from "./app.component";
import {FicoFunctionModule} from "../../projects/fico-function/src/lib/fico-function.module";
import {FicoFunctionComponent} from "../../projects/fico-function/src/lib/fico-function.component";

@NgModule({
  declarations: [
    FunctionAppComponent
  ],
  entryComponents: [FicoFunctionComponent],
  imports: [
    BrowserModule,
    FicoFunctionModule
  ],
  providers: [],
})
export class FunctionAppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(FicoFunctionComponent, {injector});
    customElements.define('fico-function', customElement);
  }

  ngDoBootstrap() {
  }
}
