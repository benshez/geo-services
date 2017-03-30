import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedRoutes } from './components/index';

import { Broadcaster } from './services/broadcaster/index';
import { ApiService } from './services/api/index';
import { DomService } from './services/dom/index';
import { SeoService } from './services/seo/index';
import { LogService } from './services/log/index';
import { Cache } from './services/cache/index';
import { LockerModule, Locker, LockerConfig } from './services/locker/index'
import { AuthenticatedUserGuard, AuthenticatedSupplierGuard, AuthenticatedAdminGuard } from './services/auth/index';
import { MessageEvent } from './services/message/index';

import { NavigationComponent, FooterComponent, LoginModule, ExpiredModule } from './components/index';

import { User, ApiServiceOptions, ApiServiceParametersOptions} from './models/index';
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(SharedRoutes), LockerModule, LoginModule, ExpiredModule],
    declarations: [NavigationComponent, FooterComponent],
    exports: [CommonModule, FormsModule, RouterModule, NavigationComponent, FooterComponent]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [Broadcaster, MessageEvent, Cache, AuthenticatedUserGuard, AuthenticatedSupplierGuard,
                AuthenticatedAdminGuard, ApiService, DomService, SeoService, User, LogService,
                ApiServiceOptions, ApiServiceParametersOptions]
        };
    }
}
