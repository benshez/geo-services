// angular
import { NgModule, ModuleWithProviders, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/index';
import { MultilingualModule } from '../i18n/multilingual.module';
import { WEB_MAP_PROVIDERS, WEB_MAP_COMPONENTS } from './index';

export const WEB_MAP_IMPORTS: any[] = [
	CommonModule,
	HttpModule,
	FormsModule,
	ReactiveFormsModule,
	RouterModule,
	MultilingualModule
];

@NgModule({
	imports: [
		...WEB_MAP_IMPORTS
	],
	declarations: [
		...WEB_MAP_COMPONENTS
	],
	schemas: [
		NO_ERRORS_SCHEMA,
		CUSTOM_ELEMENTS_SCHEMA
	],
	exports: [
		...WEB_MAP_IMPORTS,
		...WEB_MAP_COMPONENTS
	],
	providers: [
		...WEB_MAP_PROVIDERS
	]
})
export class WebMapModule { }
