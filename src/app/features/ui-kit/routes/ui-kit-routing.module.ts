import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccordionDocsComponent } from '../components/accordion-docs/accordion-docs.component';
import { AccordionPanelDocsComponent } from '../components/accordion-panel-docs/accordion-panel-docs.component';
import { ButtonDocsComponent } from '../components/button-docs/button-docs.component';
import { CardDocsComponent } from '../components/card-docs/card-docs.component';
import { IconDocsComponent } from '../components/icon-docs/icon-docs.component';
import { ModalDocsComponent } from '../components/modal-docs/modal-docs.component';
import { TableDocsComponent } from '../components/table-docs/table-docs.component';
import { TableOverviewComponent } from '../components/table-docs/components/table-overview/table-overview.component';
import { TableSortingComponent } from '../components/table-docs/components/table-sorting/table-sorting.component';
import { UiKitComponent } from '../components/ui-kit/ui-kit.component';
import { TableTemplatesComponent } from '../components/table-docs/components/table-templates/table-templates.component';

const routes: Routes = [
  { path: 'ui-kit', component: UiKitComponent },
  { path: 'ui-kit/accordion', component: AccordionDocsComponent },
  { path: 'ui-kit/accordion-panel', component: AccordionPanelDocsComponent },
  { path: 'ui-kit/button', component: ButtonDocsComponent },
  { path: 'ui-kit/card', component: CardDocsComponent },
  { path: 'ui-kit/icon', component: IconDocsComponent },
  { path: 'ui-kit/modal', component: ModalDocsComponent },
  { path: 'ui-kit/table', component: TableDocsComponent, children: [
    { path: '', component: TableOverviewComponent },
    { path: 'sorting', component: TableSortingComponent },
    { path: 'templating', component: TableTemplatesComponent }
  ]}
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