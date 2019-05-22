import { Component } from '@angular/core';

import { GoTableConfig } from '@tangoe/goponents';
import { TableDocsService } from '../../table-docs.service';

@Component({
  templateUrl: './table-overview.component.html'
})
export class TableOverviewComponent {
  constructor(private tableDocsService: TableDocsService) {
    this.tableDocsService.pageTitle = "Table Overview";
  }

  ////////////////////////////

  componentBindings: string = `
  @Input() loadingData: boolean = false;
  @Input() tableConfig: GoTableConfig;
  @Input() tableTitle: string;
  `;

  tableConfigClass: string = `
  class GoTableConfig {
    dataMode: GoTableDataSource = GoTableDataSource.client;
    noDataText: string = 'No Data';
    pageable: boolean = true;
    pageConfig: GoTablePageConfig = new GoTablePageConfig();
    sortConfig?: GoTableSortConfig;
    sortable: boolean = true;
    tableData: any[]; // Only required property
    totalCount: number = null;
  }
  `;

  basicExample_html: string = `
  <go-table [tableConfig]="tableConfig" tableTitle="Default Usage">
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email"></go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
  </go-table>
  `;

  basicExample_ts: string = `
  tableConfig = new GoTableConfig({
    tableData: this.data
  });
  `;

  tableConfig: object = new GoTableConfig({
    tableData: this.tableDocsService.generateData(20)
  });
}
