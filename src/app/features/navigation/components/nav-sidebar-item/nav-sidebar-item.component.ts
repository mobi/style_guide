import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-sidebar-item',
  styleUrls: ['./nav-sidebar-item.component.scss'],
  templateUrl: './nav-sidebar-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NavSidebarItemComponent implements OnInit {

  @Input() menuItem: any;
  expanded = false;

  constructor (private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      this.expanded = this.router.url.includes(this.menuItem.route);
    });
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }

}
