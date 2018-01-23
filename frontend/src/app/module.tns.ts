import {
    NgModule,
    NO_ERRORS_SCHEMA,
    NgModuleFactoryLoader
} from '@angular/core';
import { Http } from '@angular/http';
// nativescript
import { NSModuleFactoryLoader } from 'nativescript-angular/router';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { Config } from './_common/index';
import { AppComponent } from './component';
import { SHARED_MODULES } from './common';

Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_NATIVE;

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        ...SHARED_MODULES
    ],
    declarations: [AppComponent],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
