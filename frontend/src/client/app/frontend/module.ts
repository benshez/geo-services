import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrontendRoutes } from './routes';
import { UserModule } from './user/module';

@NgModule({
    imports: [RouterModule.forRoot(FrontendRoutes)],
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
