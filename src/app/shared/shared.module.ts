import { NgModule } from '@angular/core';

import { IconComponent } from './components/icon/icon.component';

// ====================================================================================
// Features Module
// ---------------------------------------------------------------------------------
// The FeaturesModule is a location where we can include all of the feature modules
// that our application has. A feature would be defined as a group of functionality.
// For example, the Dashboard would be considered a feature. Activities would be
// considered another feature.
// ====================================================================================

@NgModule({
  declarations: [
    IconComponent
  ]
})
export class FeaturesModule { }