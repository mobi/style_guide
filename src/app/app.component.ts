import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerAnimation } from './app.animations';

import { NavGroup, NavItem } from '@tangoe/goponents';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [routerAnimation]
})
export class AppComponent {

  menuItems: Array<NavGroup | NavItem> = [
    { route: 'getting-started', routeIcon: 'power_settings_new', routeTitle: 'Getting Started' },
    { route: 'standards', routeIcon: 'gavel', routeTitle: 'Standards', subRoutes: [
      { route: 'standards/colors', routeTitle: 'Colors' },
      { route: 'standards/forms', routeTitle: 'Forms' },
      { route: 'standards/grid', routeTitle: 'Grid System' },
      { route: 'standards/typography', routeTitle: 'Typography' }
    ]},
    { route: 'ui-kit', routeIcon: 'widgets', routeTitle: 'Components', subRoutes: [
      { route: 'ui-kit/accordion', routeTitle: 'Accordion' },
      { route: 'ui-kit/accordion-panel', routeTitle: 'Accordion Panel' },
      { route: 'ui-kit/badge', routeTitle: 'Badge' },
      { route: 'ui-kit/button', routeTitle: 'Button' },
      { route: 'ui-kit/card', routeTitle: 'Card' },
      { route: 'ui-kit/copy', routeTitle: 'Copy' },
      { route: 'ui-kit/forms', routeTitle: 'Forms' },
      { route: 'ui-kit/layout', routeTitle: 'Layout' },
      { route: 'ui-kit/loader', routeTitle: 'Loader' },
      { route: 'ui-kit/icon', routeTitle: 'Icon' },
      { route: 'ui-kit/modal', routeTitle: 'Modal' },
      { route: 'ui-kit/off-canvas', routeTitle: 'Off Canvas' },
      { route: 'ui-kit/table', routeTitle: 'Table'},
      { route: 'ui-kit/toast', routeTitle: 'Toast' }
    ]}
  ];

  constructor (router: Router) { }

  getRouteAnimation(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
