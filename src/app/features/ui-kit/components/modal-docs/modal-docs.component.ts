import { Component } from '@angular/core';

import { GoModalService } from '@tangoe/goponents';

import { ModalTestComponent } from '../modal-test/modal-test.component';

@Component({
  selector: 'app-modal-docs',
  templateUrl: './modal-docs.component.html'
})
export class ModalDocsComponent {

  pageTitle: string = "Modal";

  appModuleImport = `
  import { GoModalModule } from '@tangoe/goponents';

  @NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
      GoModalModule
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  `;

  ex_UiKitModule = `
  import { GoModalModule, GoModalService } from '@tangoe/goponents';

  import { ModalDocsComponent } from './components/modal-docs/modal-docs.component';
  import { ModalTestComponent } from './components/modal-test/modal-test.component';

  @NgModule({
    imports: [
      GoModalModule
    ],
    declarations: [
      ModalDocsComponent,
      ModalTestComponent
    ],
    entryComponents: [
      ModalTestComponent
    ],
    providers: [
      GoModalService
    ]
  })

  export class UiKitModule { }
  `;

  ex_ModalDocsImports = `
  import { GoModalService } from '@tangoe/goponents';
  import { ModalTestComponent } from '../modal-test/modal-test.component';

  constructor(private goModalService: GoModalService) { }
  `;

  ex_ModalDocsOpenModal = `
  openModal() {
    this.goModalService.openModal(ModalTestComponent, { title: 'This is a modal!' });
  }
  `;

  ex_ModalDocsHtml = `<go-button (handleClick)="openModal()">Click Me</go-button>`;

  constructor(private goModalService: GoModalService) { }

  openModal() {
    this.goModalService.openModal(ModalTestComponent, { title: 'This is a modal!' });
  }

}
