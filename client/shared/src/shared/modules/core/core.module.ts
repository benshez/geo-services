// angular
import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf
} from '@angular/core';

// module
import { SharedModule } from '../shared/shared.module';
import {
  CORE_DIRECTIVES,
  CORE_PROVIDERS
} from './index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...CORE_DIRECTIVES
  ],
  exports: [
    SharedModule,
    ...CORE_DIRECTIVES
  ],
  providers: [
    ...CORE_PROVIDERS,

  ]
})
export class CoreModule {
  // configuredProviders: *required to configure WindowService and ConsoleService per platform
  static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: configuredProviders
    };
  }
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule already loaded; Import in root module only.');
    }
  }
}
