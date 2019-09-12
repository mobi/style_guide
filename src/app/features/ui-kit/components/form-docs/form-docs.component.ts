import { Component } from '@angular/core';

import { NavGroup } from '@tangoe/goponents/lib/components/go-side-nav/nav-group.model';

@Component({
  templateUrl: './form-docs.component.html'
})
export class FormDocsComponent {
  menuItems: Array<NavGroup> = [
    {
      routeTitle: 'Basics', subRoutes: [
        { route: './', routeTitle: 'Overview' },
        { route: './datepicker', routeTitle: 'Datepicker' },
        { route: './input', routeTitle: 'Input' },
        { route: './textarea', routeTitle: 'Text Area' }
      ]
    }
  ];
}
