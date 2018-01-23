import { NgModule } from '@angular/core';
import { RouterModule } from './_common';
import { AppRoutes } from './routes';

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
