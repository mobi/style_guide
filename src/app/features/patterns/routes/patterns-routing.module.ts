import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import { PatternsComponent } from '../components/patterns/patterns.component';

 const routes: Routes = [
  { path: 'patterns', component: PatternsComponent }
];

 @NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PatternsRoutesModule { }