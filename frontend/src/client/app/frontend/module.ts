import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrontendRoutes, UserModule } from './index';

@NgModule({
    imports: [RouterModule.forRoot(FrontendRoutes), UserModule.forRoot()],
    exports: [UserModule]
})
export class FrontendModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: FrontendModule,
            providers: []
        };
    }
}
