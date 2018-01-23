import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular';
import {
    SHARED_MODULES,
    MENU_COMPONENT_DECLARATIONS,
    MENU_COMPONENT_EXPORTS
} from './common';

@NgModule({
    imports: [NativeScriptRouterModule, ...SHARED_MODULES],
    declarations: [...MENU_COMPONENT_DECLARATIONS],
    exports: [...MENU_COMPONENT_EXPORTS],
    schemas: [NO_ERRORS_SCHEMA]
})
export class MenuModule { }
