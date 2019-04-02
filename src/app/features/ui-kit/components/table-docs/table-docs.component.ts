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

  constructor (public tableDocsService: TableDocsService) {
    this.tableDocsService.pageTitle = "Table";
  }

  getRouteAnimation(outlet){
		return outlet.isActivated ? outlet.activatedRoute : '';
	}

}
