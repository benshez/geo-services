import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';

import { MdlNonRootModule } from 'angular2-mdl';

import { AppComponent } from './component';

import { FrontendModule } from './frontend/module';
import { BackendModule } from './backend/module';
import { SharedModule } from './shared/module';
import { Cache } from './shared/services/cache/index';
import { LockerModule, Locker, LockerConfig } from './shared/services/locker/index'

@NgModule({
    imports: [FormsModule, BrowserModule, HttpModule, MdlNonRootModule.forRoot(),
        SharedModule.forRoot(), FrontendModule.forRoot(),
        BackendModule.forRoot(), LockerModule, ReactiveFormsModule],
    declarations: [AppComponent],
    providers: [{
        provide: APP_BASE_HREF,
        useValue: '<%= APP_BASE %>'
    }],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA],
})

export class AppModule {
    constructor(public cache: Cache, public locker: Locker) { }

    // we need to use the arrow function here to bind the context as this is a gotcha in Universal for now until it's fixed
    //universalDoDehydrate = (universalCache: any) => {
    //    let self = this;
    //    universalCache['Cache'] = JSON.stringify(self.cache.dehydrate());
    //}
    //universalAfterDehydrate = () => {
    //    let self = this;
    //    self.cache.clear();
    //}
}
