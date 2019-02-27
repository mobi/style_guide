import { Component, ViewChild } from '@angular/core';

import { GoButtonComponent } from 'goponents';

@Component({
  selector: 'app-button-docs',
  templateUrl: './button-docs.component.html'
})
export class ButtonDocsComponent {
  
  @ViewChild('submitButton') submitButton: GoButtonComponent;

  pageTitle: string = "Button";

  componentBindings = `
  @Input()  buttonDisabled: boolean;
  @Input()  buttonIcon:     string;
  @Input()  buttonType:     string;
  @Input()  useLoader:      boolean;

  @Output() handleClick = new EventEmitter<boolean>();
  `;

  defaultExample_html = `
  <go-button (handleClick)="testClick()">Click Me</go-button>
  `;

  defaultExample_ts = `
  testClick() {
    alert("I've been clicked!");
  }
  `;

  iconExample = `
  <go-button buttonIcon="settings">Settings</go-button>
  `;

  alertExample_html = `
  <go-button buttonType="alert">Delete Me</go-button>
  `;

  alertExample_ts = `
  alertClick() {
    confirm("You sure?");
  }
  `;

  disabledExample = `
  <go-button [buttonDisabled]="true">Can't Touch This</go-button>
  `;
  
  handleClickLoader_html = `
  <go-button (handleClick)="testSubmit()" [useLoader]="true" #submitButton>Load Me</go-button>
  `;

  handleClickLoader_ts = `
  import { GoButtonComponent } from 'goponents';

  @ViewChild('submitButton') submitButton: GoButtonComponent;

  testSubmit() {
    // Do something with click, if need be reset it
    this.submitButton.reset();
  }
  `;


  constructor() { }

  testClick() {
    alert("I've been clicked!");
  }

  alertClick() {
    confirm("You sure?");
  }

  testSubmit() {
    setTimeout(() => {
      this.submitButton.reset();
    }, 2000);
  }

}
