import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {
  APP_COMPONENTS,
  WEB_COMPONENTS,
  APP_ROUTES,
  APP_MODULES,
  APP_PROVIDERS
} from './index';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpModule,
    FormsModule,
    APP_MODULES
  ],
  declarations: [
    WEB_COMPONENTS
  ],
  providers: [
    APP_PROVIDERS
  ],
  bootstrap: [APP_COMPONENTS]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) { }
}

