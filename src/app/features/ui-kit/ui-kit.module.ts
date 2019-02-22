import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

// GoPonents
import { GoAccordionModule } from 'goponents';
import { GoCardModule } from 'goponents';
import { GoIconModule } from 'goponents';

// Module Routes
import { UiKitRoutesModule } from './routes/ui-kit-routing.module';

// Module Components
import { AccordionDocsComponent } from './components/accordion-docs/accordion-docs.component';
import { AccordionPanelDocsComponent } from './components/accordion-panel-docs/accordion-panel-docs.component';
import { TableDocsComponent } from './components/table-docs/table-docs.component';
import { UiKitComponent } from './components/ui-kit/ui-kit.component';
import { CardDocsComponent } from './components/card-docs/card-docs.component';
import { IconDocsComponent } from './components/icon-docs/icon-docs.component';

@NgModule({
  imports: [
    CommonModule,
    GoAccordionModule,
    GoCardModule,
    GoIconModule,
    HighlightModule,
    UiKitRoutesModule
  ],
  declarations: [
    AccordionDocsComponent,
    AccordionPanelDocsComponent,
    TableDocsComponent,
    UiKitComponent,
    CardDocsComponent,
    IconDocsComponent
  ]
})

export class UiKitModule { }