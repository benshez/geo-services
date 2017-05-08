// nativescript
import {
    NativeScriptRouterModule,
    RouterExtensions as TNSRouterExtensions
} from 'nativescript-angular';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { Http } from '@angular/http';
// angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

// libs
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// app
import {
    WindowService,
    ConsoleService,
    RouterExtensions,
    AppService
} from './app/shared/core/index';
import { AppComponent } from './app/components/index';

// feature modules
import { CoreModule } from './app/shared/core/core.module';
import { NSAppModule, NS_SHARED_ROUTES, NS_COMPONENTS } from './mobile/app-ns';
import { AppReducer } from './app/shared/ngrx/index';
import { MultilingualEffects } from './app/shared/i18n/index';
import { ComponentsModule, cons, consoleLogTarget } from './components.module';

// libs
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AnalyticsModule } from './app/shared/analytics/analytics.module';
import { MultilingualModule, translateLoaderFactory } from './app/shared/i18n/multilingual.module';
// {N} custom app specific
import { WindowNative, NSAppService } from './mobile/core/index';
import { NS_ANALYTICS_PROVIDERS } from './mobile/analytics/index';

/**
 * Config
 * Seed provided configuration options
 */
import { Config, LogTarget } from './app/shared/core/index';
import { Page } from 'ui/page';
Config.PageClass = Page;

// (required) platform target (allows component decorators to use the right view template)
Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_NATIVE;

// (optional) log level - defaults to no logging if not set
Config.DEBUG.LEVEL_4 = true;

// (optional) custom i18n language support
// example of how you can configure your own language sets
// you can use the AppConfig class or build something similar into your own framework
import { MultilingualService } from './app/shared/i18n/services/multilingual.service';
MultilingualService.SUPPORTED_LANGUAGES = Config.SUPPORTED_LANGUAGES;

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        AnalyticsModule,
        CoreModule,
        MultilingualModule.forRoot([{
            provide: TranslateLoader,
            deps: [Http],
            useFactory: (translateLoaderFactory)
        }]),
        CoreModule.forRoot([
            { provide: WindowService, useClass: WindowNative },
            { provide: ConsoleService, useFactory: (cons) },
            { provide: LogTarget, multi: true, deps: [ConsoleService], useFactory: (consoleLogTarget) }
        ]),
        ComponentsModule,
        NSAppModule,
        NativeScriptRouterModule.forRoot(<any>NS_SHARED_ROUTES),
        StoreModule.provideStore(AppReducer),
        EffectsModule.run(MultilingualEffects),
    ],
    providers: [
        NS_ANALYTICS_PROVIDERS,
        { provide: RouterExtensions, useClass: TNSRouterExtensions },
        { provide: AppService, useClass: NSAppService },
        NS_COMPONENTS
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: [AppComponent]
})
export class NativeModule { }
