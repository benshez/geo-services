import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FrontendRoutes } from './index';
import { UserModule } from './user/index';

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(FrontendRoutes), UserModule.forRoot()],
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
