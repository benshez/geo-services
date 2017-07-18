import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// modules
import { MultilingualModule } from '../i18n/index';
import { SHARED_COMPONENTS, SHARED_PROVIDERS } from './index';

const SHARED_MODULES: any[] = [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MultilingualModule
];

/**
 * SharedModule
 * Only for shared components, directives and pipes
 * Do not specify providers here
 * https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#what-kinds-of-modules-should-i-have-and-how-should-i-use-them-
 */

@NgModule({
    imports: [
        ...SHARED_MODULES
    ],
    declarations: [
        ...SHARED_COMPONENTS
    ],
    exports: [
        ...SHARED_COMPONENTS,
        ...SHARED_MODULES
    ],
    providers: [
        ...SHARED_PROVIDERS
    ]
})
export class SharedModule { }