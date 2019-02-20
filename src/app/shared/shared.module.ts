import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { IconComponent } from './components/icon/icon.component';
import { GoAccordionComponent } from './components/go-accordion/go-accordion.component';
import { GoAccordionPanelComponent } from './components/go-accordion/go-accordion-panel.component';

@NgModule({
  declarations: [
    CardComponent,
    IconComponent,
    GoAccordionComponent,
    GoAccordionPanelComponent
  ],
  exports: [
    CardComponent,
    IconComponent,
    GoAccordionComponent,
    GoAccordionPanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
