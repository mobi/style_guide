import { Component } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {

  installGoponents = `npm install @tangoe/goponents`;
  installGosheets = `npm install @tangoe/gosheets`;
  installGosheetsVersion = `npm install @tangoe/gosheets@1.0.0`;
  importGosheetsBase = `@import "~@tangoe/gosheets/gosheets"`;
  importGosheetsPartials = `@import "~@tangoe/gosheets/base/*"`;

  constructor() { }

}
