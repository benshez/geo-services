import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { UserRoutes } from './routes';

@NgModule({
    imports: [RouterModule.forRoot(UserRoutes), FormsModule]
})
export class UserModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UserModule
        };
    }
}
