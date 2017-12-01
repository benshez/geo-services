import {
	NgModule,
	NgModuleFactoryLoader,
	NO_ERRORS_SCHEMA,
	CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import {
	NSModuleFactoryLoader,
	NativeScriptRouterModule
} from 'nativescript-angular/router';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import {
	NATIVE_ROUTES,
	NATIVE_COMPONENTS
} from './index';

@NgModule({
	declarations: [
		NATIVE_COMPONENTS
	],
	bootstrap: [
		NATIVE_COMPONENTS
	],
	imports: [
		NativeScriptModule,
		NativeScriptFormsModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forRoot(NATIVE_ROUTES),
	],
	providers: [
		{
			provide: NgModuleFactoryLoader,
			useClass: NSModuleFactoryLoader
		}
	],
	schemas: [
		NO_ERRORS_SCHEMA,
		CUSTOM_ELEMENTS_SCHEMA
	],
})
export class AppModule { }