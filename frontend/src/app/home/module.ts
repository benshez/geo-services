import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeComponent } from './components/home/component';
import { SHARED_MODULES } from './common';

@NgModule({
    imports: [...SHARED_MODULES],
    declarations: [HomeComponent]
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
