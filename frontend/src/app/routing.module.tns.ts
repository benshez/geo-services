// angular
import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular';
// app
import { AppRoutes } from './routes';

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(<any>AppRoutes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
