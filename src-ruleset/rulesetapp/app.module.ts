import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from "@angular/core";
import {createCustomElement} from "@angular/elements";
import {FicoRulesetComponent} from "../../projects/fico-ruleset/src/lib/fico-ruleset.component";
import {RulesetAppComponent} from "./app.component";
import {FicoRulesetModule} from "../../projects/fico-ruleset/src/lib/fico-ruleset.module";

@NgModule({
  declarations:[RulesetAppComponent],
  entryComponents: [FicoRulesetComponent],
  imports: [
    BrowserModule,
    FicoRulesetModule
  ],
  providers: [],
})
export class RulesetAppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(FicoRulesetComponent, {injector});
    customElements.define('fico-ruleset', customElement);
  }

  ngDoBootstrap() {
  }
}
