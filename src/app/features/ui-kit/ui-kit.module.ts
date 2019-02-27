import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

// GoPonents
import { GoAccordionModule } from 'goponents';
import { GoButtonModule } from 'goponents';
import { GoCardModule } from 'goponents';
import { GoIconModule } from 'goponents';

// Module Routes
import { UiKitRoutesModule } from './routes/ui-kit-routing.module';

// Module Components
import { AccordionDocsComponent } from './components/accordion-docs/accordion-docs.component';
import { AccordionPanelDocsComponent } from './components/accordion-panel-docs/accordion-panel-docs.component';
import { ButtonDocsComponent } from './components/button-docs/button-docs.component';
import { CardDocsComponent } from './components/card-docs/card-docs.component';
import { IconDocsComponent } from './components/icon-docs/icon-docs.component';
import { TableDocsComponent } from './components/table-docs/table-docs.component';
import { UiKitComponent } from './components/ui-kit/ui-kit.component';

@NgModule({
  imports: [
    CommonModule,
    GoAccordionModule,
    GoButtonModule,
    GoCardModule,
    GoIconModule,
    HighlightModule,
    UiKitRoutesModule
  ],
  declarations: [
    AccordionDocsComponent,
    AccordionPanelDocsComponent,
    ButtonDocsComponent,
    CardDocsComponent,
    IconDocsComponent,
    TableDocsComponent,
    UiKitComponent
  ]
})

export class UiKitModule { }