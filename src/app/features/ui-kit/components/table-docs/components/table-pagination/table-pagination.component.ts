import { Component } from '@angular/core';

import { TableDocsService } from '../../table-docs.service';
import { GoTableConfig, GoTablePageConfig } from '@tangoe/goponents';

@Component({
  templateUrl: './table-pagination.component.html'
})
export class TablePaginationComponent {
  constructor(private tableDocsService: TableDocsService) {
    this.tableDocsService.pageTitle = "Table Pagination";
  }

  ////////////////////////////

  pageConfig: string = `
  class GoTablePageConfig {
    offset: number = 0;
    pageSizes: number[] = [10, 25, 50];
    perPage: number = 10;
  }
  
  /**
   * Default values are assigned in when the class is instantiated
   * so that there is consistency among the various tables throughout
   * the app.
   * 
   * We recommend not changing these.
   **/
  `;

  tableConfig_html: string = `
  <go-table [tableConfig]="tableConfig">
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email"></go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
  </go-table>
  `;

  tableConfig_ts: string = `
  tableConfig = new GoTableConfig({
    pageConfig: new GoTablePageConfig({
      pageSizes: [5, 10, 15],
      perPage: 5
    }),
    tableData: this.data
  });
  `;

  tableConfig: object = new GoTableConfig({
    pageConfig: new GoTablePageConfig({
      pageSizes: [5, 10, 15],
      perPage: 5
    }),
    tableData: this.tableDocsService.generateData(25)
  });
}
