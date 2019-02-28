import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { GoIconModule } from '@tangoe/goponents';

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
    GoIconModule,
    RouterModule
  ]
})

export class NavigationModule { }