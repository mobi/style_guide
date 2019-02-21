import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'nav-sidebar',
  styleUrls: ['./nav-sidebar.component.scss'],
  templateUrl: './nav-sidebar.component.html'
})
export class NavSidebarComponent implements OnInit {

  menuItems = [
    { route: '', routeIcon: 'home', routeTitle: 'Home' },
    { route: 'standards', routeIcon: 'power_settings_new', routeTitle: 'Standards' },
    { route: 'ui-kit', routeIcon: 'widgets', routeTitle: 'Components', subRoutes: [
      { route: 'ui-kit/accordion', routeTitle: 'Accordion' },
      { route: 'ui-kit/accordion-panel', routeTitle: 'Accordion Panel' },
      // { route: 'ui-kit/table', routeTitle: 'Table'}
    ] },
    // { route: 'patterns', routeIcon: 'view_quilt', routeTitle: 'Patterns' },
    // { route: 'assets', routeIcon: 'photo_library', routeTitle: 'Assets' },
    // { route: 'themes', routeIcon: 'format_paint', routeTitle: 'Themes' },
    // { route: 'branding', routeIcon: 'domain', routeTitle: 'Branding' }
  ]

  ngOnInit() { }

}