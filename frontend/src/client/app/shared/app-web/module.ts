// angular
import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// app
import { SHARED_COMPONENTS } from './index';
import { MultilingualModule } from '../i18n/multilingual.module';
import { Config } from '../core/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        MultilingualModule
    ],
    declarations: [
        SHARED_COMPONENTS
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [
        SHARED_COMPONENTS,
        MultilingualModule
    ]
})
export class WebOnlyModule {

    constructor( @Optional() @SkipSelf() parentModule: WebOnlyModule) {
        if (parentModule) {
            throw new Error('SampleModule already loaded; Import in root module only.');
        }
    }
}
