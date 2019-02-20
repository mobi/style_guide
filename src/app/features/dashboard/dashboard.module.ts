import { NgModule } from '@angular/core';

// Module Routes
import { DashboardRoutesModule } from './routes/dashboard-routing.module';

// Module Components
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    DashboardRoutesModule
  ],
  declarations: [
    DashboardComponent
  ]
})

export class DashboardModule { }