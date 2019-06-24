import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

// Module Imports
import { GoCardModule } from '@tangoe/goponents';

// Module Routes
import { DashboardRoutesModule } from './routes/dashboard-routing.module';

// Module Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';

@NgModule({
  imports: [
    DashboardRoutesModule,
    GoCardModule,
    HighlightModule
  ],
  declarations: [
    DashboardComponent,
    GettingStartedComponent
  ]
})

export class DashboardModule { }