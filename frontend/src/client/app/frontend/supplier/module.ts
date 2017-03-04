import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { SupplierRoutes } from './routes';

@NgModule({
    imports: [RouterModule.forRoot(SupplierRoutes), FormsModule]
})
export class SupplierModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SupplierModule
        };
    }
}
