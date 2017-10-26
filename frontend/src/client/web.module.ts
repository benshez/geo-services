// angular
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';

// libs
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader } from '@ngx-translate/core';

// app
import { APP_COMPONENTS, AppComponent } from './app/components/index';
import { WEB_MAP_COMPONENTS } from './app/modules/map/index';
import { SHARED_ROUTES } from './app/modules/shared/routes';
import { WEB_MAP_ROUTES, MAP_LOCATION_ROUTES } from './app/modules/map/routes/web/routes';

export const WEB_ROUTES: Array<any> = [
	...SHARED_ROUTES,
	...WEB_MAP_ROUTES,
	...MAP_LOCATION_ROUTES
];

// feature modules
import {
	WindowService,
	StorageService,
	ConsoleService,
	createConsoleTarget,
	provideConsoleTarget,
	LogTarget,
	LogLevel,
	ConsoleTarget,
	ApiServiceOptions,
	ApiServiceParametersOptions
} from './app/modules/core/services/index';
import { CoreModule, Config } from './app/modules/core/index';
import { AnalyticsModule } from './app/modules/analytics/index';
import { MultilingualModule, Languages, translateLoaderFactory, MultilingualEffects } from './app/modules/i18n/index';
import { SampleModule, SampleEffects } from './app/modules/sample/index';

import { WebMapModule } from './app/modules/map/module';
import { AppReducer } from './app/modules/ngrx/index';

// config
Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;
if (String('<%= BUILD_TYPE %>') === 'dev') {
	// only output console logging in dev mode
	Config.DEBUG.LEVEL_4 = true;
}

let routerModule = RouterModule.forRoot(WEB_ROUTES);

if (String('<%= TARGET_DESKTOP %>') === 'true') {
	Config.PLATFORM_TARGET = Config.PLATFORMS.DESKTOP;
	// desktop (electron) must use hash
	routerModule = RouterModule.forRoot(WEB_ROUTES, { useHash: true });
}

declare var window, console, localStorage;

// For AoT compilation to work:
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

let DEV_IMPORTS: any[] = [];

if (String('<%= BUILD_TYPE %>') === 'dev') {
	DEV_IMPORTS = [
		...DEV_IMPORTS,
		StoreDevtoolsModule.instrumentOnlyWithExtension()
	];
}

@NgModule({
	imports: [
		BrowserModule,
		CoreModule.forRoot([
			{ provide: WindowService, useFactory: (win) },
			{ provide: StorageService, useFactory: (storage) },
			{ provide: ConsoleService, useFactory: (cons) },
			{ provide: LogTarget, useFactory: (consoleLogTarget), deps: [ConsoleService], multi: true },
			{ provide: ApiServiceOptions },
			{ provide: ApiServiceParametersOptions }
		]),
		routerModule,
		AnalyticsModule,
		MultilingualModule.forRoot([{
			provide: TranslateLoader,
			deps: [Http],
			useFactory: (translateLoaderFactory)
		}]),
		SampleModule,
		// configure app state
		StoreModule.provideStore(AppReducer),
		EffectsModule.run(MultilingualEffects),
		EffectsModule.run(SampleEffects),
		// dev environment only imports
		DEV_IMPORTS,
	],
	declarations: [
		APP_COMPONENTS,
		WEB_MAP_COMPONENTS
	],
	providers: [
		{
			provide: APP_BASE_HREF,
			useValue: '<%= APP_BASE %>'
		},
		// override with supported languages
		{
			provide: Languages,
			useValue: Config.GET_SUPPORTED_LANGUAGES()
		}
	],
	bootstrap: [AppComponent]
})

export class WebModule { }
