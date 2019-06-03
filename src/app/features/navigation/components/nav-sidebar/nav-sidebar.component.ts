import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'nav-sidebar',
  styleUrls: ['./nav-sidebar.component.scss'],
  templateUrl: './nav-sidebar.component.html'
})
export class NavSidebarComponent {
  menuItems = [
    { route: 'standards', routeIcon: 'power_settings_new', routeTitle: 'Standards', subRoutes: [
      { route: 'standards/colors', routeTitle: 'Colors' },
      { route: 'standards/forms', routeTitle: 'Forms' },
      { route: 'standards/grid', routeTitle: 'Grid System' },
      { route: 'standards/typography', routeTitle: 'Typography' }
    ]},
    { route: 'ui-kit', routeIcon: 'widgets', routeTitle: 'Components', subRoutes: [
      { route: 'ui-kit/accordion', routeTitle: 'Accordion' },
      { route: 'ui-kit/accordion-panel', routeTitle: 'Accordion Panel' },
      { route: 'ui-kit/button', routeTitle: 'Button' },
      { route: 'ui-kit/card', routeTitle: 'Card' },
      { route: 'ui-kit/icon', routeTitle: 'Icon' },
      { route: 'ui-kit/modal', routeTitle: 'Modal' },
      { route: 'ui-kit/table', routeTitle: 'Table'},
      { route: 'ui-kit/toast', routeTitle: 'Toast' }
    ]},
    // { route: 'patterns', routeIcon: 'view_quilt', routeTitle: 'Patterns' },
    // { route: 'assets', routeIcon: 'photo_library', routeTitle: 'Assets' },
    // { route: 'themes', routeIcon: 'format_paint', routeTitle: 'Themes' },
    // { route: 'branding', routeIcon: 'domain', routeTitle: 'Branding' }
  ]
}
