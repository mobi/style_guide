import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { routerAnimation } from '../../../app.animations';

import { NavGroup } from '@tangoe/goponents/lib/components/go-side-nav/nav-group.model';
import { SubNavService } from './sub-nav.service';

@Component({
  animations: [routerAnimation],
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubNavComponent implements OnInit {

  @Input() menuItems: Array<NavGroup>;

  mobileSubmenuShown: boolean;

  constructor(public subNavService: SubNavService) { }

  ngOnInit() {
  }

  getRouteAnimation(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  toggleSubmenu(): void {
    this.mobileSubmenuShown = this.mobileSubmenuShown ? false : true;
  }

  submenuIcon(): string {
    return this.mobileSubmenuShown ? 'chevron_right' : 'chevron_left';
  }

  closeMobileMenu(): void {
    this.mobileSubmenuShown = false;
  }

}
