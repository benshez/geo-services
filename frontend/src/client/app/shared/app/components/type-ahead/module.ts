// angular
import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TypeAheadComponent } from './component';

@NgModule({
    declarations: [
        TypeAheadComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [
        TypeAheadComponent
    ]
})
export class TypeAheadModule {

    constructor( @Optional() @SkipSelf() parentModule: TypeAheadModule) {
        if (parentModule) {
            throw new Error('TypeAheadModule already loaded; Import in root module only.');
        }
    }
}
