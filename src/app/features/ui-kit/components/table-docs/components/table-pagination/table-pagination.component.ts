import { Component } from '@angular/core';

import { TableDocsService } from '../../table-docs.service';
import { GoTableConfig, GoTablePageConfig } from '@tangoe/goponents';

@Component({
  templateUrl: './table-pagination.component.html'
})
export class TablePaginationComponent {

  pageConfig = `
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

  data = [
    {"id":1,"name":{"first":"Pamela","last":"Biaggiotti"},"email":"pbiaggiotti0@cmu.edu","gender":"Female","ip_address":"224.21.35.18"},
    {"id":2,"name":{"first":"Mollie","last":"Drees"},"email":"mdrees1@arstechnica.com","gender":"Female","ip_address":"137.99.232.26"},
    {"id":3,"name":{"first":"Donal","last":"Summersby"},"email":"dsummersby2@tripod.com","gender":"Male","ip_address":"137.149.50.178"},
    {"id":4,"name":{"first":"Gerard","last":"Endricci"},"email":"gendricci3@bloomberg.com","gender":"Male","ip_address":"27.9.139.169"},
    {"id":5,"name":{"first":"Thom","last":"Proby"},"email":"tproby4@unblog.fr","gender":"Male","ip_address":"70.181.197.242"},
    {"id":6,"name":{"first":"Gabie","last":"Lutzmann"},"email":"glutzmann5@altervista.org","gender":"Female","ip_address":"73.187.143.186"},
    {"id":7,"name":{"first":"Blondell","last":"Harle"},"email":"bharle6@ocn.ne.jp","gender":"Female","ip_address":"194.49.85.239"},
    {"id":8,"name":{"first":"Thorstein","last":"Thurner"},"email":"tthurner7@google.cn","gender":"Male","ip_address":"126.223.78.84"},
    {"id":9,"name":{"first":"Corabel","last":"Klimentyonok"},"email":"cklimentyonok8@seesaa.net","gender":"Female","ip_address":"202.96.68.1"},
    {"id":10,"name":{"first":"Jewell","last":"Chesnut"},"email":"jchesnut9@linkedin.com","gender":"Female","ip_address":"159.188.202.253"},
    {"id":11,"name":{"first":"Reagan","last":"Ferreira"},"email":"rferreiraa@ycombinator.com","gender":"Male","ip_address":"204.78.211.5"},
    {"id":12,"name":{"first":"Constantin","last":"Wadwell"},"email":"cwadwellb@shinystat.com","gender":"Male","ip_address":"77.199.128.167"},
    {"id":13,"name":{"first":"Udell","last":"Bygraves"},"email":"ubygravesc@goo.ne.jp","gender":"Male","ip_address":"127.36.74.78"},
    {"id":14,"name":{"first":"Tommie","last":"Cubbino"},"email":"tcubbinod@hexun.com","gender":"Female","ip_address":"180.252.110.112"},
    {"id":15,"name":{"first":"Dougie","last":"Le - Count"},"email":"dlecounte@homestead.com","gender":"Male","ip_address":"73.176.7.236"},
    {"id":16,"name":{"first":"Marcela","last":"Haken"},"email":"mhakenf@woothemes.com","gender":"Female","ip_address":"212.246.108.70"},
    {"id":17,"name":{"first":"Pattie","last":"Connochie"},"email":"pconnochieg@earthlink.net","gender":"Female","ip_address":"92.138.76.97"},
    {"id":18,"name":{"first":"Tirrell","last":"Fitzsymon"},"email":"tfitzsymonh@newyorker.com","gender":"Male","ip_address":"1.49.15.137"},
    {"id":19,"name":{"first":"Marylin","last":"Ireson"},"email":"miresoni@purevolume.com","gender":"Female","ip_address":"4.135.23.107"},
    {"id":20,"name":{"first":"Jacinda","last":"Danielsen"},"email":"jdanielsenj@blogger.com","gender":"Female","ip_address":"89.192.223.183"},
    {"id":21,"name":{"first":"Murray","last":"McIlriach"},"email":"mmcilriachk@liveinternet.ru","gender":"Male","ip_address":"170.195.87.3"},
    {"id":22,"name":{"first":"Vivian","last":"Benns"},"email":"vbennsl@berkeley.edu","gender":"Female","ip_address":"14.61.121.163"},
    {"id":23,"name":{"first":"Vasili","last":"Aronovitz"},"email":"varonovitzm@infoseek.co.jp","gender":"Male","ip_address":"31.180.100.63"},
    {"id":24,"name":{"first":"Leonardo","last":"Austen"},"email":"laustenn@washingtonpost.com","gender":"Male","ip_address":"214.253.91.74"},
    {"id":25,"name":{"first":"Erskine","last":"Halbert"},"email":"ehalberto@pagesperso-orange.fr","gender":"Male","ip_address":"169.56.172.212"}
  ];

  tableConfig_html = `
  <go-table [tableConfig]="tableConfig">
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email"></go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
  </go-table>
  `;

  tableConfig_ts = `
  tableConfig = new GoTableConfig({
    pageConfig: new GoTablePageConfig({
      pageSizes: [5, 10, 15],
      perPage: 5
    }),
    tableData: this.data
  });
  `;

  tableConfig = new GoTableConfig({
    pageConfig: new GoTablePageConfig({
      pageSizes: [5, 10, 15],
      perPage: 5
    }),
    tableData: this.data
  });

  constructor(private tableDocsService: TableDocsService) {
    this.tableDocsService.pageTitle = "Table Pagination";
  }

}
