import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './assets.component.html'
})
export class AssetsComponent implements OnInit {

  pageTitle: String;

  ngOnInit() {
    this.pageTitle = "Assets";
  }

}