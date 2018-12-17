import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './ui-kit.component.html'
})
export class UiKitComponent implements OnInit {

  pageTitle: String;

  ngOnInit() {
    this.pageTitle = "Components";
  }

}