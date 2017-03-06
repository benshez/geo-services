import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrontendRoutes } from './routes';
import { UserModule } from './user/module';
import { SupplierModule } from './supplier/module';
import { MarkerCluster } from '../shared/index';

@NgModule({
    declarations: [MarkerCluster],
    imports: [RouterModule.forRoot(FrontendRoutes)],
    exports: [MarkerCluster, UserModule, SupplierModule]
})
export class FrontendModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: FrontendModule,
            providers: []
        };
    }
}
