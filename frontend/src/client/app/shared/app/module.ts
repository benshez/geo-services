// angular
import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


// app
import { Config } from '../core/index';

import { SHARED_COMPONENTS, SHARED_PROVIDERS } from './index';
import { MultilingualModule } from '../i18n/multilingual.module';

let SHARED_IMPORTS: any[] = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    MultilingualModule
];

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
    imports: [
        SHARED_IMPORTS
    ],
    declarations: [
        SHARED_COMPONENTS
    ],
    providers: [
        SHARED_PROVIDERS
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
export class SharedAppModule {

    constructor( @Optional() @SkipSelf() parentModule: SharedAppModule) {
        if (parentModule) {
            throw new Error('SampleModule already loaded; Import in root module only.');
        }
    }
}
