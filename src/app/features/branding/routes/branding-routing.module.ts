import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import { BrandingComponent } from '../components/branding/branding.component';

 const routes: Routes = [
  { path: 'branding', component: BrandingComponent }
];

 @NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BrandingRoutesModule { }