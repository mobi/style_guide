import { Component, OnInit } from '@angular/core';

import { NavGroup } from '@tangoe/goponents/lib/components/go-side-nav/nav-group.model';

@Component({
  selector: 'app-layout-docs',
  templateUrl: './layout-docs.component.html'
})
export class LayoutDocsComponent implements OnInit {

  menuItems: Array<NavGroup> = [
    { routeTitle: 'Basics', subRoutes: [
      { route: './', routeTitle: 'Overview' },
      { route: './header', routeTitle: 'Header' },
      { route: './search', routeTitle: 'Search' },
      { route: './side-nav', routeTitle: 'Side Nav' },
      { route: './example', routeTitle: 'Full Example' }
    ]}
  ];

  constructor() { }

  ngOnInit() {
  }

}
