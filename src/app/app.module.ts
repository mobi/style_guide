import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './config/routes/app-routing.module';

import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';

// import { NavSidebarComponent } from './features/navigation/nav-sidebar/nav-sidebar.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    FeaturesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
