import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'geoservice-shared/modules/shared/shared.module';
import { AnalyticsModule } from 'geoservice-shared/modules/analytics/analytics.module';
import { Config } from 'geoservice-shared/modules/core/utilities/index';
import {
  APP_COMPONENTS,
  WEB_COMPONENTS,
  APP_ROUTES,
  APP_PROVIDERS
} from './index';

Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;
Config.DEBUG.LEVEL_4 = true;

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpModule,
    FormsModule,
    SharedModule,
    AnalyticsModule
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
