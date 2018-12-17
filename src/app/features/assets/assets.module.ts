import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';

// Module Routes
 import { AssetsRoutesModule } from './routes/assets-routing.module';

// Module Components
import { AssetsComponent } from './components/assets/assets.component';

@NgModule({
  imports: [
    AssetsRoutesModule,
    CoreModule
  ],
  declarations: [
    AssetsComponent
  ]
})

export class AssetsModule { }