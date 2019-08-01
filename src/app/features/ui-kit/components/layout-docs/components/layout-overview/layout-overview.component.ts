import { Component, OnInit } from '@angular/core';
import { SubNavService } from 'src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  selector: 'app-layout-overview',
  templateUrl: './layout-overview.component.html'
})
export class LayoutOverviewComponent implements OnInit {

  componentBindings = `
  @Input()
  `;

  basicExample_module = `
  // Required imports for the layout:
  import {
    GoIconButtonModule,
    GoLayoutModule
  } from '@tangoe/goponents';

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      GoIconButtonModule,
      GoLayoutModule
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  `;

  basicExample_html = `
  <go-layout>
    <go-header go-layout-header>
      <!-- Content for the header is covered in the header docs -->
    </go-header>
    <go-side-nav go-layout-nav>
      <!-- Content for the nav is covered in the nav docs -->
    </go-side-nav>
  </go-layout>
  `;

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Layout Overview';
  }

  ngOnInit() {
  }

}
