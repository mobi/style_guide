import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';

// Module Components
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import { NavSidebarItemComponent } from './components/nav-sidebar-item/nav-sidebar-item.component';

import { IconComponent } from 'src/app/shared/components/icon/icon.component';

@NgModule({
  declarations: [
    IconComponent,
    NavSidebarComponent,
    NavSidebarItemComponent
  ],
  exports: [
    NavSidebarComponent
  ],
  imports: [
    CoreModule,
    RouterModule
  ]
})

export class NavigationModule { }