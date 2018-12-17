import { NgModule } from '@angular/core';

// Module Routes
import { StandardsRoutesModule } from './routes/standards-routing.module';

// Module Components
import { StandardsComponent } from './components/standards/standards.component';

@NgModule({
  imports: [
    StandardsRoutesModule
  ],
  declarations: [
    StandardsComponent
  ]
})

export class StandardsModule { }