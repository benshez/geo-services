// angular
import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/index';
import { MultilingualModule } from '../i18n/multilingual.module';
import { USER_PROVIDERS, USER_COMPONENTS } from './index';

export const USER_IMPORTS: any[] = [
    CommonModule,
    MultilingualModule
];

@NgModule({
    imports: [
        ...USER_IMPORTS
    ],
    declarations: [
        ...USER_COMPONENTS
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [
        ...USER_COMPONENTS
    ],
    providers: [
        ...USER_PROVIDERS
    ]
})
export class UserModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UserModule,
            providers: [...USER_PROVIDERS]
        };
    }
}
