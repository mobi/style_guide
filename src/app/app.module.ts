import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './config/routes/app-routing.module';

import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';

import { HighlightModule } from 'ngx-highlightjs';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';

export function hljsLanguages () {
  return [
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
    HighlightModule.forRoot({ languages: hljsLanguages })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
