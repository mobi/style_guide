import { Component, ViewChild } from "@angular/core";
import * as faker from 'faker';
import { GoButtonComponent, GoOffCanvasService } from "@tangoe/goponents";

@Component({
  selector: 'basic-test',
  templateUrl: './basic-test.component.html',
  styleUrls: ['./basic-test.component.scss']
})
export class BasicTestComponent {
  @ViewChild('submitButton', { static: false }) submitButton: GoButtonComponent;

  fakeTitle: string = faker.company.companyName();
  fakeCompanyBs: string = faker.company.bs();
  fakePhrase: string = faker.company.catchPhrase();

  constructor(
    private goOffCanvasService: GoOffCanvasService
  ) { }

  public fakeSubmit(): void {
    setTimeout(() => {
      this.submitButton.reset();
      this.goOffCanvasService.closeOffCanvas();
    }, 2000);
  }
}
