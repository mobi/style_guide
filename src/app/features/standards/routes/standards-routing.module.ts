import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColorsComponent } from '../components/colors/colors.component';
import { StandardsComponent } from '../components/standards/standards.component';
import { TypographyComponent } from '../components/typography/typography.component';

const routes: Routes = [
  { path: 'standards', component: StandardsComponent },
  { path: 'standards/colors', component: ColorsComponent },
  { path: 'standards/typography', component: TypographyComponent }
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
