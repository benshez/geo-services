import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Broadcaster } from './broadcaster/index';

import { ApiService } from './services/api/index';
import { DomService } from './services/dom/index';
import { SeoService } from './services/seo/index';
import { LogService } from './services/log/index';
import { Cache } from './services/cache/index';
import { LockerModule, Locker, LockerConfig } from './services/locker/index'
import { AuthGuard } from './services/auth/index';
import { MessageEvent } from './services/message/index';

import { IUser, IApiServiceOptions, IApiServiceParametersOptions} from './models/index';
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
    imports: [CommonModule, RouterModule, LockerModule],
    declarations: [],
    exports: [CommonModule, FormsModule, RouterModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [Broadcaster, MessageEvent, Cache, AuthGuard, ApiService, DomService, SeoService, IUser, LogService, IApiServiceOptions, IApiServiceParametersOptions]
        };
    }
}