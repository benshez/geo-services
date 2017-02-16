import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserRoutes } from './index';
import { MapModule } from './map/index';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(UserRoutes), FormsModule, MapModule.forRoot()],
    exports: [MapModule]
})
export class UserModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UserModule
        };
    }
}
