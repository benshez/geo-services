import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthenticatedSupplierGuard } from './index';

import { SupplierRoutes } from './routes';
import { SupplierMapModule } from './map/module';

@NgModule({
    imports: [RouterModule.forRoot(SupplierRoutes), FormsModule],
    exports: [SupplierMapModule],
    providers: [AuthenticatedSupplierGuard]
})
export class SupplierModule {

}
