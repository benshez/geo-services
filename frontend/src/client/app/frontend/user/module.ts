import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { UserRoutes, MapModule } from './index';
    
@NgModule({
    imports: [RouterModule.forRoot(UserRoutes), FormsModule, MapModule.forRoot()],
    exports: [MapModule]
})
export class UserModule {
    static forRoot(): ModuleWithProviders {
        debugger
        return {
            ngModule: UserModule
        };
    }
}
