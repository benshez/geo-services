import {
    NgModule,
    ModuleWithProviders,
    Optional,
    SkipSelf
} from '@angular/core';
import {
    CORE_DIRECTIVES,
    CORE_PROVIDERS
} from './index';

@NgModule({
    imports: [
    ],
    declarations: [
        ...CORE_DIRECTIVES
    ],
    exports: [
        ...CORE_DIRECTIVES
    ],
    providers: [
        ...CORE_PROVIDERS
    ]
})
export class CoreModule {
    static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: configuredProviders
        };
    }
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule already loaded; Import in root module only.');
        }
    }
}
