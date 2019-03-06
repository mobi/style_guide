import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

// Module Routes
import { StandardsRoutesModule } from './routes/standards-routing.module';

import { GoCardModule } from '@tangoe/goponents';

// Module Components
import { ColorsComponent } from './components/colors/colors.component';
import { StandardsComponent } from './components/standards/standards.component';
import { TypographyComponent } from './components/typography/typography.component';

@NgModule({
  imports: [
    HighlightModule,
    StandardsRoutesModule,
    GoCardModule
  ],
  declarations: [
    ColorsComponent,
    StandardsComponent,
    TypographyComponent
  ]
})

export class StandardsModule { }