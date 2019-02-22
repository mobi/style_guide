import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-docs',
  templateUrl: './icon-docs.component.html'
})
export class IconDocsComponent {

  pageTitle: string = "Icon";

  componentBindings = `
  @Input() icon: string;
  `;

  defaultExample = `
  <go-icon icon="home"></go-icon>
  <go-icon icon="settings"></go-icon>
  <go-icon icon="landscape"></go-icon>
  `;

  constructor() { }

}
