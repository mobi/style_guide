import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HighlightModule } from 'ngx-highlightjs';

// Module Routes
import { UiKitRoutesModule } from './routes/ui-kit-routing.module';

// Module Components
import { AccordionDocsComponent } from './components/accordion-docs/accordion-docs.component';
import { TableDocsComponent } from './components/table-docs/table-docs.component';
import { UiKitComponent } from './components/ui-kit/ui-kit.component'

@NgModule({
  imports: [
    HighlightModule,
    SharedModule,
    UiKitRoutesModule
  ],
  declarations: [
    AccordionDocsComponent,
    TableDocsComponent,
    UiKitComponent
  ]
})

export class UiKitModule { }