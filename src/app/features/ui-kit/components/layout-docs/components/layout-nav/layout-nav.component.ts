import { Component, OnInit } from '@angular/core';

import { SubNavService } from '../../../../../../shared/components/sub-nav/sub-nav.service';

@Component({
  selector: 'app-layout-nav',
  templateUrl: './layout-nav.component.html',
  styleUrls: ['./layout-nav.component.scss']
})
export class LayoutNavComponent implements OnInit {

  componentBindings = `
  @Input() menuItems: Array<NavGroup | NavItem>;
  `;

  bindings_menuItems = `
  export interface NavItem {
    description?: string;
    route: string;
    routeIcon?: string;
    routeTitle: string;
  }

  export interface NavGroup {
    description?: string;
    expanded?: boolean;
    routeIcon?: string;
    routeTitle: string;
    subRoutes: Array<NavGroup | NavItem>;
  }
  `;

  basicExample_module = `
  // Required imports for the layout & side nav:
  import {
    GoIconButtonModule,
    GoLayoutModule,
    GoSideNavModule
  } from '@tangoe/goponents';

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      GoIconButtonModule,
      GoLayoutModule,
      GoSideNavModule
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  `;

  basicExample_html = `
  <go-layout>
    <go-header go-layout-header>
      <!-- Content for the header is covered in the header docs -->
    </go-header>
    <go-side-nav go-layout-nav [menuItems]="menuItems">
    </go-side-nav>
  </go-layout>
  `;

  basicExample_ts = `
  import { NavGroup, NavItem } from '@tangoe/goponents';

  menuItems: Array<NavGroup | NavItem> = [
    { route: 'getting-started', routeIcon: 'power_settings_new', routeTitle: 'Getting Started' },
    { route: 'standards', routeIcon: 'gavel', routeTitle: 'Standards', subRoutes: [
      { route: 'standards/colors', routeTitle: 'Colors' },
      { route: 'standards/forms', routeTitle: 'Forms' }
    ]},
    { route: 'ui-kit', routeIcon: 'widgets', routeTitle: 'Components', subRoutes: [
      { route: 'ui-kit/accordion', routeTitle: 'Accordion' },
      { route: 'ui-kit/accordion-panel', routeTitle: 'Accordion Panel' },
      { route: 'ui-kit/button', routeTitle: 'Button' }
    ]}
  ];
  `;

  serviceExample_ts = `
  import { GoSideNavService } from '@tangoe/goponents';

  constructor(private sideNavService: GoSideNavService) {
    this.sideNavService.navOpen = true;
    // or, you can toggle navOpen with:
    this.sideNavService.toggleNav();
  }
  `;

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Side Navigation';
  }

  ngOnInit() {
  }

}
