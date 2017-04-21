﻿// angular
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

// feature modules
import { CoreModule } from './app/shared/core/core.module';
import { AppReducer } from './app/shared/ngrx/index';
import { AnalyticsModule } from './app/shared/analytics/analytics.module';
import { MultilingualModule, translateLoaderFactory } from './app/shared/i18n/multilingual.module';
import { MultilingualEffects } from './app/shared/i18n/index';

import { SharedAppModule } from './app/shared/app';
import { WebOnlyModule, WEB_ROUTES } from './app/shared/app-web/index';

// config
import { Config, WindowService, ConsoleService, createConsoleTarget, provideConsoleTarget, LogTarget, LogLevel, ConsoleTarget } from './app/shared/core/index';
Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;
if (String('<%= BUILD_TYPE %>') === 'dev') {
    // only output console logging in dev mode
    Config.DEBUG.LEVEL_4 = true;
}

// sample config (extra)
import { MultilingualService } from './app/shared/i18n/services/multilingual.service';
// custom i18n language support
MultilingualService.SUPPORTED_LANGUAGES = Config.SUPPORTED_LANGUAGES;

let routerModule = RouterModule.forRoot(WEB_ROUTES);

if (String('<%= TARGET_DESKTOP %>') === 'true') {
    Config.PLATFORM_TARGET = Config.PLATFORMS.DESKTOP;
    // desktop (electron) must use hash
    routerModule = RouterModule.forRoot(WEB_ROUTES, { useHash: true });
}

declare var window, console;

// For AoT compilation to work:
export function win() {
    return window;
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
            { provide: ConsoleService, useFactory: (cons) },
            { provide: LogTarget, useFactory: (consoleLogTarget), deps: [ConsoleService], multi: true }
        ]),
        routerModule,
        AnalyticsModule,
        SharedAppModule,
        WebOnlyModule,
        MultilingualModule.forRoot([{
            provide: TranslateLoader,
            deps: [Http],
            useFactory: (translateLoaderFactory)
        }]),
        StoreModule.provideStore(AppReducer),
        DEV_IMPORTS,
        EffectsModule.run(MultilingualEffects)
    ],
    declarations: [
        APP_COMPONENTS
    ],
    providers: [
        {
            provide: APP_BASE_HREF,
            useValue: '<%= APP_BASE %>'
        }
    ],
    bootstrap: [AppComponent]
})

export class WebModule { }
