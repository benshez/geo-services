import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';
import { AboutComponent } from './components/about/component';
import { SHARED_MODULES, ABOUT_COMPONENT_DECLARATIONS } from './common';

@NgModule({
    imports: [...SHARED_MODULES],
    declarations: [...ABOUT_COMPONENT_DECLARATIONS]
})
export class AboutModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: AboutModule
    ) {
        if (parentModule) {
            throw new Error(
                'AboutModule already loaded; Import in root module only.'
            );
        }
    }
}
