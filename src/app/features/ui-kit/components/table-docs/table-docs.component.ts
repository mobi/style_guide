import { Component } from '@angular/core';

import { NavGroup } from '@tangoe/goponents/lib/components/go-side-nav/nav-group.model';

@Component({
  templateUrl: './table-docs.component.html'
})
export class TableDocsComponent {

  menuItems: Array<NavGroup> = [
    { routeTitle: 'Basics', subRoutes: [
      { route: './', routeTitle: 'Overview' },
      { route: './pagination', routeTitle: 'Pagination' },
      { route: './sorting', routeTitle: 'Sorting' },
      { route: './templating', routeTitle: 'Templating' }
    ]},
    { routeTitle: 'Advanced', subRoutes: [
      { route: './server-integration', routeTitle: 'Server-Side Integration' }
    ]}
  ];
}
