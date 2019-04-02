import { Component } from '@angular/core';
import { TableDocsService } from '../../table-docs.service';
import { GoTableConfig, GoTableSortConfig, SortDirection } from '@tangoe/goponents';

@Component({
  templateUrl: './table-sorting.component.html'
})
export class TableSortingComponent {

  tableSortConfig = `
  class GoTableSortConfig {
    column: string;
    direction?: SortDirection = SortDirection.ascending;
  }
  `;

  tableSortDir = `
  enum SortDirection {
    ascending = 1,
    descending = 0
  }
  `;

  tableConfigEx = `
  // import these at the top of the file
  import { GoTableConfig, GoTableSortConfig, SortDirection } from '@tangoe/goponents';

  this.tableConfig = new GoTableConfig({
    sort: new GoTableSortConfig({
      column: 'name.first',
      direction: SortDirection.descending
    }),
    tableData: data
  });
  `;

  tableConfigEx_html = `
  <go-table [tableConfig]="tableConfig">
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email"></go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
  </go-table>
  `;

  tableConfigEx_nosort = `
  // import these at the top of the file
  import { GoTableConfig, GoTableSortConfig, SortDirection } from '@tangoe/goponents';

  this.tableConfig = new GoTableConfig({
    sortable: false,
    tableData: data
  });
  `;

  data = [
    {"id":1,"name":{"first":"Pamela","last":"Biaggiotti"},"email":"pbiaggiotti0@cmu.edu","gender":"Female","ip_address":"224.21.35.18"},
    {"id":2,"name":{"first":"Mollie","last":"Drees"},"email":"mdrees1@arstechnica.com","gender":"Female","ip_address":"137.99.232.26"},
    {"id":3,"name":{"first":"Donal","last":"Summersby"},"email":"dsummersby2@tripod.com","gender":"Male","ip_address":"137.149.50.178"},
    {"id":4,"name":{"first":"Gerard","last":"Endricci"},"email":"gendricci3@bloomberg.com","gender":"Male","ip_address":"27.9.139.169"},
    {"id":5,"name":{"first":"Thom","last":"Proby"},"email":"tproby4@unblog.fr","gender":"Male","ip_address":"70.181.197.242"}
  ];

  tableConfig = new GoTableConfig({
    sort: new GoTableSortConfig({
      column: 'name.first',
      direction: SortDirection.descending
    }),
    tableData: this.data
  });

  tableConfig_nosort = new GoTableConfig({
    sortable: false,
    tableData: this.data
  });

  constructor(private tableDocsService: TableDocsService) {
    this.tableDocsService.pageTitle = "Table Sorting";
  }
}
