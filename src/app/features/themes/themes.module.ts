import { NgModule } from '@angular/core';
 
// Module Routes
import { ThemesRoutesModule } from './routes/themes-routing.module';

// Module Components
import { ThemesComponent } from './components/themes/themes.component';

@NgModule({
  imports: [
    ThemesRoutesModule
  ],
  declarations: [
    ThemesComponent
  ],
})

export class ThemesModule { }