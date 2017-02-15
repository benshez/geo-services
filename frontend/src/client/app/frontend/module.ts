import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrontendRoutes } from './routes';

@NgModule({
    imports: [RouterModule.forRoot(FrontendRoutes)],
    exports: []
})
export class FrontendModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: FrontendModule,
            providers: []
        };
    }
}
