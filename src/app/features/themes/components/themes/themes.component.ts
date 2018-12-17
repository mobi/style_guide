import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './themes.component.html'
})
export class ThemesComponent implements OnInit {

  pageTitle: String;

  ngOnInit() {
    this.pageTitle =  "Themes";
  }

}