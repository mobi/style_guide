import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './table-docs.component.html'
})
export class TableDocsComponent implements OnInit {

  pageTitle: String;

  ngOnInit() {
    this.pageTitle = "Table";
  }

}