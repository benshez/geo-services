﻿// nativescript
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Http } from '@angular/http';

// angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

// libs
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// app
import { AppComponent } from './app/components';
import { AboutComponent, HomeComponent } from './app/components';

// feature modules
import { CoreModule } from './app/shared/core/core.module';
import { AnalyticsModule } from './app/shared/analytics/analytics.module';
import { MultilingualModule, translateLoaderFactory } from './app/shared/i18n/multilingual.module';
import { SharedAppModule } from './app/shared/app';
import { ConsoleService, ConsoleTarget, LogLevel } from "./app/shared/core/index";

// intermediate component module
// helps encapsulate custom native modules in with the components
// note: couple ways this could be done, just one option presented here...
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
        SharedAppModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        MultilingualModule,
        AppComponent,
        AnalyticsModule,
        CoreModule,
        SharedAppModule
    ]
})
export class ComponentsModule { }

// For AoT compilation to work:
export function cons() {
    return console;
}

export function consoleLogTarget(service: ConsoleService) {
    return new ConsoleTarget(service, { minLogLevel: LogLevel.Debug });
}
