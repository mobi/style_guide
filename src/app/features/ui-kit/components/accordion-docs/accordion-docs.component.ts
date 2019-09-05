import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './accordion-docs.component.html'
})
export class AccordionDocsComponent implements OnInit {

  pageTitle: String;

  defaultExample = `
  <go-accordion>
    <go-accordion-panel title="Test 1" [expanded]="true">
      This is some content for Test 1.
    </go-accordion-panel>
    <go-accordion-panel title="Test 2">
      This is a second thing. 
    </go-accordion-panel>
    <go-accordion-panel title="Test 3">
      This is a third thing. 
    </go-accordion-panel>
  </go-accordion>
  `;

  expandAllExample = `
  <go-accordion [expandAll]="true">
    <go-accordion-panel title="Test 1">
      This is some content for Test 1.
    </go-accordion-panel>
    <go-accordion-panel title="Test 2">
      This is a second thing. 
    </go-accordion-panel>
    <go-accordion-panel title="Test 3">
      This is a third thing. 
    </go-accordion-panel>
  </go-accordion>
  `;

  multiExpandExample = `
  <go-accordion [multiExpand]="true">
    <go-accordion-panel title="Test 1" [expanded]="true">
      This is some content for Test 1.
    </go-accordion-panel>
    <go-accordion-panel title="Test 2" [expanded]="true">
      This is a second thing. 
    </go-accordion-panel>
    <go-accordion-panel title="Test 3">
      This is a third thing. 
    </go-accordion-panel>
  </go-accordion>
  `;

  showIconsExample = `
  <go-accordion [showIcons]="true">
    <go-accordion-panel title="Test 1" icon="home" [expanded]="true">
      This is some content for Test 1.
    </go-accordion-panel>
    <go-accordion-panel title="Test 2" icon="settings">
      This is a second thing. 
    </go-accordion-panel>
    <go-accordion-panel title="Test 3" icon="landscape">
      This is a third thing. 
    </go-accordion-panel>
  </go-accordion>
  `;

  componentBindings = `
  @Input() expandAll:   boolean = false;
  @Input() multiExpand: boolean = false;
  @Input() showIcons:   boolean = false;
  @Input() theme:       string  = 'light';
  `;

  themeOptions = `
  // valid options
  - 'light'
  - 'dark'
  `;

  ngOnInit() {
    this.pageTitle = "Accordion";
  }

}
