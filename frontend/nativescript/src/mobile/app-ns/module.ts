// angular
import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Http } from '@angular/http';
// libs
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MultilingualModule, translateLoaderFactory } from '../../app/shared/i18n/multilingual.module';

// app
import { NS_MODULES, NS_COMPONENTS, NS_PROVIDERS, NS_DIRECTIVES } from './index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
    imports: [
        NS_MODULES,
        MultilingualModule.forRoot([{
            provide: TranslateLoader,
            deps: [Http],
            useFactory: (translateLoaderFactory)
        }]),
    ],
    declarations: [
        NS_COMPONENTS,
        NS_DIRECTIVES
    ],
    providers: [
        NS_PROVIDERS
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [
        MultilingualModule
    ]
})
export class NSAppModule {

    constructor( @Optional() @SkipSelf() parentModule: NSAppModule) {
        if (parentModule) {
            throw new Error('SampleModule already loaded; Import in root module only.');
        }
    }
}
