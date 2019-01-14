import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './branding.component.html'
})
export class BrandingComponent implements OnInit {

  pageTitle: String;

  ngOnInit() {
    this.pageTitle = "Branding";
  }

}