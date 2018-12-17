import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './patterns.component.html'
})
export class PatternsComponent implements OnInit {

  pageTitle: String;

  ngOnInit() {
    this.pageTitle = "Patterns";
  }

}