import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-sidebar-item',
  styleUrls: ['./nav-sidebar-item.component.scss'],
  templateUrl: './nav-sidebar-item.component.html'
})
export class NavSidebarItemComponent implements OnInit {

  @Input() menuItem: any;
  expanded = false;

  constructor (private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (this.router.url.includes(this.menuItem.route)) {
        this.expanded = true;
      } else {
        this.expanded = false;
      }
    });
  }

  toggleExpand() {
    this.expanded = this.expanded ? false : true;
  }

}