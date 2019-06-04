import { Component } from "@angular/core";
import { GoOffCanvasService } from "@tangoe/goponents";

import { BasicTestComponent } from "../basic-test/basic-test.component";

@Component({
  selector: 'off-canvas-docs',
  templateUrl: './off-canvas-docs.component.html'
})
export class OffCanvasDocsComponent {
  noteMessage: string = 'For this example, the component we want to render in the modal is "BasicTestComponent", but we can follow the same pattern to render any component inside of the off canvas.';

  appModuleImport: string = `
  import { GoOffCanvasModule } from 'goponents';

  @NgModule({
    declarations: [AppComponent],
    imports: [
      GoOffCanvasModule
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  `;

  uiKitExample: string = `
  import { GoOffCanvasModule, GoOffCanvasService } from 'goponents';
  import { BasicTestComponent } from './components/basic-test/basic-test.component';

  @NgModule({
    imports: [
      GoOffCanvasModule
    ],
    declarations: [
      BasicTestComponent
    ],
    entryComponents: [
      BasicTestComponent
    ],
    providers: [
      GoOffCanvasService
    ]
  })
  export class UiKitModule { }
  `;

  implementationExample: string = `
  import { GoOffCanvasService } from 'goponents';
  import { BasicTestComponent } from '../basic-test/basic-test.component';

  constructor(private goOffCanvasService: GoOffCanvasService) { }
  `;

  functionExample: string = `
  openOffCanvas() : void {
    this.goOffCanvasService.openOffCanvas({
      component: BasicTestComponent,
      bindings: {
        someBinding: 'monkey'
      }
    });
  }
  `;

  htmlExample: string = `
  <go-button
    (handleClick)="openOffCanvas()"
    buttonIcon="subdirectory_arrow_right"
    buttonVariant="positive"
  >
    Open Off Canvas
  </go-button>
  `;

  constructor(
    private goOffCanvasService: GoOffCanvasService
  ) { }

  public openOffCanvas(): void {
    this.goOffCanvasService.openOffCanvas({
      component: BasicTestComponent, 
      bindings: {
        someBinding: 'Basic Off Canvas Component'
      }
    });
  }
}
