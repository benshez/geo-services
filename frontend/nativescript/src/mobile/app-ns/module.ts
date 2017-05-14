// angular
import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// app
import { NS_MODULES, NS_COMPONENTS, NS_PROVIDERS, NS_DIRECTIVES } from './index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
    imports: [
        NS_MODULES
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
    ]
})
export class NSAppModule {

    constructor( @Optional() @SkipSelf() parentModule: NSAppModule) {
        if (parentModule) {
            throw new Error('SampleModule already loaded; Import in root module only.');
        }
    }
}
