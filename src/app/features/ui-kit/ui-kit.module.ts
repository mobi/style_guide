import { NgModule } from '@angular/core';

// Module Routes
import { UiKitRoutesModule } from './routes/ui-kit-routing.module';

// Module Components
import { TableDocsComponent } from './components/table-docs/table-docs.component';
import { UiKitComponent } from './components/ui-kit/ui-kit.component'

@NgModule({
  imports: [
    UiKitRoutesModule
  ],
  declarations: [
    TableDocsComponent,
    UiKitComponent
  ]
})

export class UiKitModule { }