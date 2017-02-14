import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { BackendRoutes } from './routes';

@NgModule({
    imports: [RouterModule.forRoot(BackendRoutes), FormsModule]
})
export class BackendModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: BackendModule
        };
    }
}
