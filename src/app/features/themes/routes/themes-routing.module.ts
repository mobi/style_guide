import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import { ThemesComponent } from '../components/themes/themes.component';

 const routes: Routes = [
  { path: 'themes', component: ThemesComponent }
];

 @NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ThemesRoutesModule { }