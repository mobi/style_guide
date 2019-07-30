import { NgModule } from '@angular/core';

import { AssetsModule } from './assets/assets.module';
import { BrandingModule } from './branding/branding.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PatternsModule } from './patterns/patterns.module';
import { StandardsModule } from './standards/standards.module';
import { ThemesModule } from './themes/themes.module';
import { UiKitModule } from './ui-kit/ui-kit.module';

// ====================================================================================
// Features Module
// ---------------------------------------------------------------------------------
// The FeaturesModule is a location where we can include all of the feature modules
// that our application has. A feature would be defined as a group of functionality.
// For example, the Dashboard would be considered a feature. Activities would be
// considered another feature.
// ====================================================================================

@NgModule({
  imports: [
    AssetsModule,
    BrandingModule,
    DashboardModule,
    PatternsModule,
    StandardsModule,
    ThemesModule,
    UiKitModule
  ]
})
export class FeaturesModule { }
