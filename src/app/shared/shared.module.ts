import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [
    CardComponent,
    IconComponent
  ],
  exports: [
    CardComponent,
    IconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
