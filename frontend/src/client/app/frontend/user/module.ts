import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthenticatedUserGuard } from './index';

import { UserRoutes } from './routes';
import { MapModule } from './map/module';

@NgModule({
    imports: [RouterModule.forRoot(UserRoutes), FormsModule],
    exports: [MapModule],
    providers: [AuthenticatedUserGuard]
})
export class UserModule { }
