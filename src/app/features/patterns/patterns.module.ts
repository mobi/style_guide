import { NgModule } from '@angular/core';

// Module Routes
 import { PatternsRoutesModule } from './routes/patterns-routing.module';

// Module Components
import { PatternsComponent } from './components/patterns/patterns.component';

@NgModule({
  imports: [
    PatternsRoutesModule
  ],
  declarations: [
    PatternsComponent
  ]
})

export class PatternsModule { }