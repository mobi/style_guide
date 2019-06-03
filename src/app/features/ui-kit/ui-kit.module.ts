import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

// GoPonents
import {
  GoAccordionModule,
  GoButtonModule,
  GoCardModule,
  GoIconModule,
  GoModalModule,
  GoModalService,
  GoTableModule,
  GoToastModule,
  GoToasterService
} from '@tangoe/goponents';

// Module Routes
import { UiKitRoutesModule } from './routes/ui-kit-routing.module';

// Module Components
import { AccordionDocsComponent } from './components/accordion-docs/accordion-docs.component';
import { AccordionPanelDocsComponent } from './components/accordion-panel-docs/accordion-panel-docs.component';
import { ButtonDocsComponent } from './components/button-docs/button-docs.component';
import { CardDocsComponent } from './components/card-docs/card-docs.component';
import { IconDocsComponent } from './components/icon-docs/icon-docs.component';
import { ModalDocsComponent } from './components/modal-docs/modal-docs.component';
import { ModalTestComponent } from './components/modal-test/modal-test.component';
import { ServerIntegrationComponent } from './components/table-docs/components/server-integration/server-integration.component';
import { TableDocsComponent } from './components/table-docs/table-docs.component';
import { TableOverviewComponent } from './components/table-docs/components/table-overview/table-overview.component';
import { TablePaginationComponent } from './components/table-docs/components/table-pagination/table-pagination.component';
import { TableSortingComponent } from './components/table-docs/components/table-sorting/table-sorting.component';
import { TableTemplatesComponent } from './components/table-docs/components/table-templates/table-templates.component';
import { ToastDocsComponent } from './components/toast-docs/toast-docs.component';
import { UiKitComponent } from './components/ui-kit/ui-kit.component';

@NgModule({
  imports: [
    CommonModule,
    GoAccordionModule,
    GoButtonModule,
    GoCardModule,
    GoIconModule,
    GoModalModule,
    GoTableModule,
    GoToastModule,
    HighlightModule,
    UiKitRoutesModule
  ],
  declarations: [
    AccordionDocsComponent,
    AccordionPanelDocsComponent,
    ButtonDocsComponent,
    CardDocsComponent,
    IconDocsComponent,
    ModalDocsComponent,
    ModalTestComponent,
    ServerIntegrationComponent,
    TableDocsComponent,
    TableOverviewComponent,
    TablePaginationComponent,
    TableSortingComponent,
    TableTemplatesComponent,
    ToastDocsComponent,
    UiKitComponent,
  ],
  entryComponents: [
    ModalTestComponent
  ],
  providers: [
    GoModalService,
    GoToasterService
  ]
})

export class UiKitModule { }
