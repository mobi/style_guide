import { Component, ViewEncapsulation } from '@angular/core';
import { routerAnimation } from '../../../../app.animations';
import { TableDocsService } from './table-docs.service';

@Component({
  animations: [routerAnimation],
  styleUrls: ['./table-docs.component.scss'],
  templateUrl: './table-docs.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TableDocsComponent {

  mobileSubmenuShown: boolean = false;

  constructor (public tableDocsService: TableDocsService) {
    this.tableDocsService.pageTitle = "Table";
  }

  getRouteAnimation(outlet){
		return outlet.isActivated ? outlet.activatedRoute : '';
  }

  toggleSubmenu() : void {
    this.mobileSubmenuShown = this.mobileSubmenuShown ? false : true;
  }
  
  submenuIcon() : string {
    return this.mobileSubmenuShown ? "chevron_right" : "chevron_left";
  }
  
  closeMobileMenu() : void {
    this.mobileSubmenuShown = false;
  }

}
