import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { APP_ROUTING } from './app.routes';

@NgModule({
    imports: [
        NativeScriptRouterModule.forRoot(<any>APP_ROUTING),
    ],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

