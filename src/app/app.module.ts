import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './config/routes/app-routing.module';

import {
  GoModalModule,
  GoOffCanvasModule,
  GoToasterModule
} from '@tangoe/goponents';

import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';

import { HighlightModule } from 'ngx-highlightjs';
import bash from 'highlight.js/lib/languages/bash';
import typescript from 'highlight.js/lib/languages/typescript';
import scss from 'highlight.js/lib/languages/scss';
import xml from 'highlight.js/lib/languages/xml';

export function hljsLanguages () {
  return [
    { name: 'bash', func: bash },
    { name: 'scss', func: scss },
    { name: 'typescript', func: typescript },
    { name: 'xml', func: xml }
  ]
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    FeaturesModule,
    GoModalModule,
    GoOffCanvasModule,
    GoToasterModule,
    HighlightModule.forRoot({ languages: hljsLanguages })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
