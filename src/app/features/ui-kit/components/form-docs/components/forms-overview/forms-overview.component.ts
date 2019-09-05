import { Component } from "@angular/core";
import { SubNavService } from "src/app/shared/components/sub-nav/sub-nav.service";

@Component({
  templateUrl: './forms-overview.component.html'
})
export class FormsOverviewComponent {

  constructor(
    private subNavService: SubNavService
  ) {
    this.subNavService.pageTitle = 'Forms Overview';
  }
}
