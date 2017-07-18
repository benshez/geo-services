// angular
import { NgModule, ModuleWithProviders, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/index';
import { MultilingualModule } from '../i18n/multilingual.module';
import { TYPE_AHEAD_PROVIDERS, TYPE_AHEAD_COMPONENTS } from './index';
import { WebMapModule } from '../map/module';

export const TYPE_AHEAD_IMPORTS: any[] = [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MultilingualModule,
    WebMapModule
];

@NgModule({
    imports: [
        ...TYPE_AHEAD_IMPORTS
    ],
    declarations: [
        ...TYPE_AHEAD_COMPONENTS
    ],
    exports: [
        ...TYPE_AHEAD_IMPORTS,
        ...TYPE_AHEAD_COMPONENTS
    ],
    providers: [
        ...TYPE_AHEAD_PROVIDERS
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class TypeAheadModule { }
