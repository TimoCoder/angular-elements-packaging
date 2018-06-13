import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'lib-fico-function',
  template: `
    <p>
      fico-function works!
    </p>
  `,
  styles: [],
  encapsulation:ViewEncapsulation.Native
})
export class FicoFunctionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
