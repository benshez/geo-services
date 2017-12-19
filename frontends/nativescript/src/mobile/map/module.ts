// angular
import { NgModule, ModuleWithProviders, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NS_MAP_PROVIDERS, NS_MAP_COMPONENTS } from './index';

export const NS_MAP_IMPORTS: any[] = [

];

@NgModule({
    imports: [
        ...NS_MAP_IMPORTS
    ],
    declarations: [
        ...NS_MAP_COMPONENTS
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [
    ],
    providers: [
        ...NS_MAP_PROVIDERS
    ]
})

export class NSWebMapModule { }
