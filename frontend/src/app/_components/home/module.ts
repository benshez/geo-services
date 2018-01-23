import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';
import { SHARED_MODULES, HOME_COMPONENT_DECLARATIONS } from './common';

@NgModule({
    imports: [...SHARED_MODULES],
    declarations: [...HOME_COMPONENT_DECLARATIONS]
})
export class HomeModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: HomeModule
    ) {
        if (parentModule) {
            throw new Error(
                'HomeModule already loaded; Import in root module only.'
            );
        }
    }
}
