import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

// GoPonents
import { GoAccordionModule } from '@tangoe/goponents';
import { GoButtonModule } from '@tangoe/goponents';
import { GoCardModule } from '@tangoe/goponents';
import { GoIconModule } from '@tangoe/goponents';
import { GoModalModule, GoModalService } from '@tangoe/goponents';
import { GoTableModule } from '@tangoe/goponents';

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
import { TableDocsComponent } from './components/table-docs/table-docs.component';
import { TableOverviewComponent } from './components/table-docs/components/table-overview/table-overview.component';
import { TableSortingComponent } from './components/table-docs/components/table-sorting/table-sorting.component';
import { TableTemplatesComponent } from './components/table-docs/components/table-templates/table-templates.component';
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
    TableDocsComponent,
    TableOverviewComponent,
    TableSortingComponent,
    TableTemplatesComponent,
    UiKitComponent
  ],
  entryComponents: [
    ModalTestComponent
  ],
  providers: [
    GoModalService
  ]
})

export class UiKitModule { }
