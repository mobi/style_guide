import { Component } from '@angular/core';
import { GoTableConfig } from '@tangoe/goponents';
import { TableDocsService } from '../../table-docs.service';

@Component({
  templateUrl: './table-templates.component.html',
  styleUrls: ['./table-templates.component.scss']
})
export class TableTemplatesComponent {

  columnTemplating: string = `
  <go-table [tableConfig]="tableConfig">
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email">
      <ng-template #goTableCell let-item>
        <a href="mailto:{{ item.email }}">{{ item.email }}</a>
      </ng-template>
    </go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
  </go-table>
  `;

  headerTemplating: string = `
  <go-table class="go-column go-column--100" [tableConfig]="tableConfig" tableTitle="Header Template Example">
    ${this.customHeader('id', 'ID')}
    ${this.customHeader('name.first', 'First Name')}
    ${this.customHeader('name.last', 'Last Name')}
    ${this.customHeader('email', 'Primary Email')}
    ${this.customHeader('gender', 'Gender')}
    ${this.customHeader('ip_address', 'IP Address')}
  </go-table>
  `;

  data: Array<{}> = [
    {"id":1,"name":{"first":"Pamela","last":"Biaggiotti"},"email":"pbiaggiotti0@cmu.edu","gender":"Female","ip_address":"224.21.35.18"},
    {"id":2,"name":{"first":"Mollie","last":"Drees"},"email":"mdrees1@arstechnica.com","gender":"Female","ip_address":"137.99.232.26"},
    {"id":3,"name":{"first":"Donal","last":"Summersby"},"email":"dsummersby2@tripod.com","gender":"Male","ip_address":"137.149.50.178"},
    {"id":4,"name":{"first":"Gerard","last":"Endricci"},"email":"gendricci3@bloomberg.com","gender":"Male","ip_address":"27.9.139.169"},
    {"id":5,"name":{"first":"Thom","last":"Proby"},"email":"tproby4@unblog.fr","gender":"Male","ip_address":"70.181.197.242"}
  ];

  tableConfig = new GoTableConfig({
    tableData: this.data
  });

  constructor(private tableDocsService: TableDocsService) {
    this.tableDocsService.pageTitle = "Table Templating";
  }

  private customHeader(column: string, field: string): string {
    return `
    <go-table-column field="${column}">
      <ng-template #goTableHead let-item>
        <div class="stacked-header">
          <span class="stacked-header__type">Person</span>
          ${field}
        </div>
      </ng-template>
    </go-table-column>
    `.trim();
  }
}
