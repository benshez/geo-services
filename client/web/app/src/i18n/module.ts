import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  TranslateModule,
  TranslateLoader
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { I18NComponent } from './component';
import { MULTILANG_PROVIDERS } from 'geoservice-shared/modules/i18n/services/index';

export function translateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `assets/i18n/`, '.json');
}

const loader = {
  provide: TranslateLoader,
  useFactory: translateLoaderFactory,
  deps: [HttpClient]
};

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader
    })
  ],
  declarations: [
    I18NComponent
  ],
  providers: [
    ...MULTILANG_PROVIDERS,
  ],
  exports: [
    I18NComponent,
    TranslateModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class I18nModule {

  static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
    return {
      ngModule: I18nModule,
      providers: configuredProviders
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: I18nModule) {
    if (parentModule) {
      throw new Error('MultilingualModule already loaded; Import in root module only.');
    }
  }
}