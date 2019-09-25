import { Component, OnInit } from '@angular/core';
import { GoTableConfig } from '@tangoe/goponents';
import { SubNavService } from 'src/app/shared/components/sub-nav/sub-nav.service';
import { TableDocsService } from '../../table-docs.service';

@Component({
  selector: 'app-table-actions-docs',
  templateUrl: './table-actions-docs.component.html'
})
export class TableActionsDocsComponent implements OnInit {

  tableActions_html = `
  <go-table tableTitle="Example of Table Actions"
            [tableConfig]="tableConfig"
            [showTableActions]="true">
    <ng-container go-table-actions>
      <go-icon-button buttonIcon="filter"></go-icon-button>
      <go-icon-button buttonIcon="settings"></go-icon-button>
    </ng-container>
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email"></go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
  </go-table>
  `;

  tableConfig = new GoTableConfig({
    selectBy: 'id',
    selectable: true,
    tableData: this.tableDocsService.generateData(20)
  });

  constructor(
    private tableDocsService: TableDocsService,
    private subNavService: SubNavService
  ) {
    this.subNavService.pageTitle = 'Table Actions';
  }

  ngOnInit() {
  }

}
