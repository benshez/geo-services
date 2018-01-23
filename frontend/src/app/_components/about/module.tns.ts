import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SHARED_MODULES, ABOUT_COMPONENT_DECLARATIONS } from './common';

@NgModule({
    imports: [...SHARED_MODULES],
    declarations: [...ABOUT_COMPONENT_DECLARATIONS],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AboutModule { }
