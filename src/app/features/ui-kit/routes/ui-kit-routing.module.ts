import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccordionDocsComponent } from '../components/accordion-docs/accordion-docs.component';
import { AccordionPanelDocsComponent } from '../components/accordion-panel-docs/accordion-panel-docs.component';
import { TableDocsComponent } from '../components/table-docs/table-docs.component';
import { UiKitComponent } from '../components/ui-kit/ui-kit.component';

const routes: Routes = [
  { path: 'ui-kit', component: UiKitComponent },
  { path: 'ui-kit/accordion', component: AccordionDocsComponent },
  { path: 'ui-kit/accordion-panel', component: AccordionPanelDocsComponent },
  { path: 'ui-kit/table', component: TableDocsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UiKitRoutesModule { }