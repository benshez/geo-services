import {
    NgModule,
    ModuleWithProviders,
    Optional,
    SkipSelf,
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { I18NComponent } from './components/component';
import { Languages, MULTILANG_PROVIDERS } from '../../_services';
import { reducers, metaReducers } from '../ngrx';
import { Config } from '../../_common';
import { I18NEffects } from './';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, `assets/i18n/`, '.json');
}

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([]),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        EffectsModule.forFeature([I18NEffects])
    ],
    declarations: [I18NComponent],
    providers: [
        ...MULTILANG_PROVIDERS,
        {
            provide: Languages,
            useValue: Config.GET_SUPPORTED_LANGUAGES()
        }
    ],
    exports: [I18NComponent, TranslateModule],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class I18nModule {
    static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
        return {
            ngModule: I18nModule,
            providers: configuredProviders
        };
    }

    constructor(
        @Optional()
        @SkipSelf()
        parentModule: I18nModule
    ) {
        if (parentModule) {
            throw new Error(
                'MultilingualModule already loaded; Import in root module only.'
            );
        }
    }
}
