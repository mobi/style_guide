import { NgModule } from '@angular/core';

// Module Routes
 import { BrandingRoutesModule } from './routes/branding-routing.module';

// Module Components
import { BrandingComponent } from './components/branding/branding.component';

@NgModule({
  imports: [
    BrandingRoutesModule
  ],
  declarations: [
    BrandingComponent
  ]
})

export class BrandingModule { }