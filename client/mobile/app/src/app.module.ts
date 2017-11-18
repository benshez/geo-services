import {
	NgModule,
	ApplicationRef,
	CUSTOM_ELEMENTS_SCHEMA,
	NO_ERRORS_SCHEMA
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { CoreModule } from 'geoservice-shared/modules/core/core.module';
import { AnalyticsModule } from 'geoservice-shared/modules/analytics/analytics.module';
import { Config } from 'geoservice-shared/modules/core/utilities/index';

import {
	WindowService,
	StorageService,
	ConsoleService,
	ConsoleTarget,
	LogLevel,
	LogTarget
} from 'geoservice-shared/modules/core/services/index';

import {
	APP_COMPONENTS,
	NATIVE_COMPONENTS,
	APP_ROUTES,
	APP_PROVIDERS
} from './index';

declare var window, console, localStorage;

export function win() {
	return window;
}
export function storage() {
	return localStorage;
}
export function cons() {
	return console;
}
export function consoleLogTarget(consoleService: ConsoleService) {
	return new ConsoleTarget(consoleService, { minLogLevel: LogLevel.Debug });
}

Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_NATIVE;
Config.DEBUG.LEVEL_4 = true;
@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(APP_ROUTES),
		HttpModule,
		FormsModule,
		CoreModule.forRoot([
			{ provide: WindowService, useFactory: (win) },
			{ provide: StorageService, useFactory: (storage) },
			{ provide: ConsoleService, useFactory: (cons) },
			{ provide: LogTarget, useFactory: (consoleLogTarget), deps: [ConsoleService], multi: true }
		]),
		AnalyticsModule,
		NativeScriptModule,
		NativeScriptFormsModule,
		NativeScriptHttpModule,
		NativeScriptRouterModule
	],
	declarations: [
		NATIVE_COMPONENTS
	],
	providers: [
		APP_PROVIDERS
	],
	bootstrap: [APP_COMPONENTS]
})
export class AppModule {
	constructor(public appRef: ApplicationRef) { }
}
