import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Module Components
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import { NavSidebarItemComponent } from './components/nav-sidebar-item/nav-sidebar-item.component';

@NgModule({
  declarations: [
    NavSidebarComponent,
    NavSidebarItemComponent
  ],
  exports: [
    NavSidebarComponent
  ],
  imports: [
    CoreModule,
    RouterModule,
    SharedModule
  ]
})

export class NavigationModule { }