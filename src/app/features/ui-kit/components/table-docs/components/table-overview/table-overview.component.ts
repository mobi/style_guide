import { Component } from '@angular/core';

import { GoTableConfig } from '@tangoe/goponents';
import { TableDocsService } from '../../table-docs.service';

@Component({
  templateUrl: './table-overview.component.html'
})
export class TableOverviewComponent {

  componentBindings = `
  @Input() tableConfig: GoTableConfig;
  `;

  tableConfigClass = `
  class GoTableConfig {
    sort?: GoTableSortConfig;
    sortable?: boolean = true;
    tableData: any[];
  }
  `;

  basicExample_html = `
  <go-table [tableConfig]="tableConfig">

    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email"></go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>

  </go-table>
  `;

  basicExample_ts = `
  let data = [
    {"id":1,"name":{"first":"Pamela","last":"Biaggiotti"},"email":"pbiaggiotti0@cmu.edu","gender":"Female","ip_address":"224.21.35.18"},
    {"id":2,"name":{"first":"Mollie","last":"Drees"},"email":"mdrees1@arstechnica.com","gender":"Female","ip_address":"137.99.232.26"},
    {"id":3,"name":{"first":"Donal","last":"Summersby"},"email":"dsummersby2@tripod.com","gender":"Male","ip_address":"137.149.50.178"},
    {"id":4,"name":{"first":"Gerard","last":"Endricci"},"email":"gendricci3@bloomberg.com","gender":"Male","ip_address":"27.9.139.169"},
    {"id":5,"name":{"first":"Thom","last":"Proby"},"email":"tproby4@unblog.fr","gender":"Male","ip_address":"70.181.197.242"}
  ];

  tableConfig = new GoTableConfig({
    tableData: data
  });
  `;

  data = [
    {"id":1,"name":{"first":"Pamela","last":"Biaggiotti"},"email":"pbiaggiotti0@cmu.edu","gender":"Female","ip_address":"224.21.35.18"},
    {"id":2,"name":{"first":"Mollie","last":"Drees"},"email":"mdrees1@arstechnica.com","gender":"Female","ip_address":"137.99.232.26"},
    {"id":3,"name":{"first":"Donal","last":"Summersby"},"email":"dsummersby2@tripod.com","gender":"Male","ip_address":"137.149.50.178"},
    {"id":4,"name":{"first":"Gerard","last":"Endricci"},"email":"gendricci3@bloomberg.com","gender":"Male","ip_address":"27.9.139.169"},
    {"id":5,"name":{"first":"Thom","last":"Proby"},"email":"tproby4@unblog.fr","gender":"Male","ip_address":"70.181.197.242"}
  ]

  tableConfig = new GoTableConfig({ tableData: this.data });

  constructor(private tableDocsService: TableDocsService) {
    this.tableDocsService.pageTitle = "Table Overview";
  }
}
