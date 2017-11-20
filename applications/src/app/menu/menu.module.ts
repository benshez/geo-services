import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  SHARED_MODULES,
  COMPONENT_DECLARATIONS,
  COMPONENT_EXPORTS
} from './index';

@NgModule({
    imports: [
        RouterModule,
        ...SHARED_MODULES
    ],
    declarations: [
        ...COMPONENT_DECLARATIONS
    ],
    exports: [
        ...COMPONENT_EXPORTS
    ]
})
export class MenuModule { }
