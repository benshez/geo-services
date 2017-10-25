import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MultilingualModule } from '../i18n/multilingual.module';
import { ADMIN_COMPONENTS, ADMIN_PROVIDERS } from './index';

// angular
export const ADMIN_IMPORTS: any[] = [
	CommonModule,
	MultilingualModule
];

@NgModule({
	imports: [
		...ADMIN_IMPORTS
	],
	declarations: [
		...ADMIN_COMPONENTS
	],
	schemas: [
		NO_ERRORS_SCHEMA,
		CUSTOM_ELEMENTS_SCHEMA
	],
	exports: [
		...ADMIN_COMPONENTS
	],
	providers: [
		...ADMIN_PROVIDERS
	]
})
export class AdminModule {

	static forRoot(): ModuleWithProviders {
		return {
			ngModule: AdminModule,
			providers: [...ADMIN_PROVIDERS]
		};
	}
}
