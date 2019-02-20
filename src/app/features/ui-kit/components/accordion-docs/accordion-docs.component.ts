import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './accordion-docs.component.html'
})
export class AccordionDocsComponent implements OnInit {

  pageTitle: String;

  basicExample = `
  <go-accordion>
    <go-accordion-panel title="Test 1" expanded="true">
      This is some content for <b>Test 1</b>.
    </go-accordion-panel>
    <go-accordion-panel title="Test 2">
      This is a second thing. 
    </go-accordion-panel>
  </go-accordion>
  `

  ngOnInit() {
    this.pageTitle = "Accordion";
  }

}