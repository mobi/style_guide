import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StandardsComponent } from '../components/standards/standards.component';

const routes: Routes = [
  { path: 'standards', component: StandardsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StandardsRoutesModule { }
