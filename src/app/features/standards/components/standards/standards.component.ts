import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './standards.component.html'
})
export class StandardsComponent implements OnInit {

  pageTitle: String;

  ngOnInit() {
    this.pageTitle = "Standards";
  }

}