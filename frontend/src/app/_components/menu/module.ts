import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// app
import {
    SHARED_MODULES,
    MENU_COMPONENT_DECLARATIONS,
    MENU_COMPONENT_EXPORTS
} from './common';

@NgModule({
    imports: [RouterModule, ...SHARED_MODULES],
    declarations: [...MENU_COMPONENT_DECLARATIONS],
    exports: [...MENU_COMPONENT_EXPORTS]
})
export class MenuModule { }
