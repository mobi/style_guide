import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccordionDocsComponent } from '../components/accordion-docs/accordion-docs.component';
import { AccordionPanelDocsComponent } from '../components/accordion-panel-docs/accordion-panel-docs.component';
import { ButtonDocsComponent } from '../components/button-docs/button-docs.component';
import { CardDocsComponent } from '../components/card-docs/card-docs.component';
import { IconDocsComponent } from '../components/icon-docs/icon-docs.component';
import { ModalDocsComponent } from '../components/modal-docs/modal-docs.component';
import { ServerIntegrationComponent } from '../components/table-docs/components/server-integration/server-integration.component';
import { TableDocsComponent } from '../components/table-docs/table-docs.component';
import { TableOverviewComponent } from '../components/table-docs/components/table-overview/table-overview.component';
import { TablePaginationComponent } from '../components/table-docs/components/table-pagination/table-pagination.component';
import { TableSortingComponent } from '../components/table-docs/components/table-sorting/table-sorting.component';
import { TableTemplatesComponent } from '../components/table-docs/components/table-templates/table-templates.component';
import { ToastDocsComponent } from '../components/toast-docs/toast-docs.component';
import { UiKitComponent } from '../components/ui-kit/ui-kit.component';
import { OffCanvasDocsComponent } from '../components/off-canvas-docs/off-canvas-docs.component';
import { LoaderDocsComponent } from '../components/loader-docs/loader-docs.component';
import { LayoutDocsComponent } from '../components/layout-docs/layout-docs.component';
import { LayoutOverviewComponent } from '../components/layout-docs/components/layout-overview/layout-overview.component';
import { LayoutNavComponent } from '../components/layout-docs/components/layout-nav/layout-nav.component';
import { LayoutHeaderComponent } from '../components/layout-docs/components/layout-header/layout-header.component';
import { LayoutSearchComponent } from '../components/layout-docs/components/layout-search/layout-search.component';

const routes: Routes = [
  { path: 'ui-kit', component: UiKitComponent },
  { path: 'ui-kit/accordion', component: AccordionDocsComponent },
  { path: 'ui-kit/accordion-panel', component: AccordionPanelDocsComponent },
  { path: 'ui-kit/button', component: ButtonDocsComponent },
  { path: 'ui-kit/card', component: CardDocsComponent },
  { path: 'ui-kit/layout', component: LayoutDocsComponent, children: [
    { path: '', component: LayoutOverviewComponent },
    { path: 'header', component: LayoutHeaderComponent },
    { path: 'search', component: LayoutSearchComponent },
    { path: 'side-nav', component: LayoutNavComponent }
  ]},
  { path: 'ui-kit/loader', component: LoaderDocsComponent },
  { path: 'ui-kit/icon', component: IconDocsComponent },
  { path: 'ui-kit/modal', component: ModalDocsComponent },
  { path: 'ui-kit/off-canvas', component: OffCanvasDocsComponent },
  { path: 'ui-kit/table', component: TableDocsComponent, children: [
    { path: '', component: TableOverviewComponent },
    { path: 'pagination', component: TablePaginationComponent },
    { path: 'server-integration', component: ServerIntegrationComponent },
    { path: 'sorting', component: TableSortingComponent },
    { path: 'templating', component: TableTemplatesComponent }
  ]},
  { path: 'ui-kit/toast', component: ToastDocsComponent }
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
