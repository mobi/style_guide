import { Component, ViewChild } from '@angular/core';

import { GoButtonComponent } from '@tangoe/goponents';

@Component({
  selector: 'app-button-docs',
  templateUrl: './button-docs.component.html'
})
export class ButtonDocsComponent {
  
  @ViewChild('defaultButton') defaultButton: GoButtonComponent;
  @ViewChild('negativeButton') negativeButton: GoButtonComponent;
  @ViewChild('neutralButton') neutralButton: GoButtonComponent;
  @ViewChild('positiveButton') positiveButton: GoButtonComponent;

  pageTitle: string = "Button";

  componentBindings: string = `
  @Input() buttonDisabled: boolean;
  @Input() buttonIcon: string;
  @Input() buttonType: string = 'button';
  @Input() buttonVariant: string;
  @Input() useLoader: boolean;

  @Output() handleClick = new EventEmitter<boolean>();
  `;

  defaultExample: string = `
  <go-button (handleClick)="testClick()">
    Default
  </go-button>

  <go-button (handleClick)="testClick()" buttonDisabled="true">
    Disabled
  </go-button>

  <go-button (handleClick)="testClick()" icon="work">
    With Icon
  </go-button>
  `;

  negativeExample: string = this.buttonTemplate('negative', 'delete');
  neutralExample: string = this.buttonTemplate('neutral', 'live_help');
  positiveExample: string = this.buttonTemplate('positive', 'check');

  loadingExampleTS = `
  import { GoButtonComponent } from 'goponents';

  @ViewChild('submitButton') submitButton: GoButtonComponent;

  testSubmit() {
    // Do something with click, then reset the button
    this.submitButton.reset();
  }
  `;

  handleClickLoader_html = `
  <go-button (handleClick)="testSubmit()" [useLoader]="true" #submitButton>Load Me</go-button>
  `;

  public testSubmit(): void {
    setTimeout(() => {
      this.defaultButton.reset();
      this.negativeButton.reset();
      this.neutralButton.reset();
      this.positiveButton.reset();
    }, 2000);
  }


  private buttonTemplate (variant: string, icon: string): string {
    return `
  <go-button (handleClick)="testClick()" buttonVariant="${variant}">
    Negative
  </go-button>

  <go-button (handleClick)="testClick()" buttonVariant="${variant}" buttonDisabled="true">
    Disabled
  </go-button>

  <go-button (handleClick)="testClick()" buttonVariant="${variant}" icon="${icon}">
    With Icon
  </go-button>
    `;
  }
}
