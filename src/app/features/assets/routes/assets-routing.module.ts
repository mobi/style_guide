import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import { AssetsComponent } from '../components/assets/assets.component';

 const routes: Routes = [
  { path: 'assets', component: AssetsComponent }
];

 @NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AssetsRoutesModule { }