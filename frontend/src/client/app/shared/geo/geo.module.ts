// angular
import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// app

import { Config } from '../core/index';

import { SHARED_COMPONENTS } from './components/index';
import { MultilingualModule } from '../i18n/multilingual.module';

let SHARED_IMPORTS: any[] = [];
//declare function require(moduleName: string): any;

//import { MapBoxModule as Map } from 'angular2-mapbox/core';

if (Config.PLATFORMS.WEB) {

    //let MapBoxModule: typeof Map = require("angular2-mapbox/core");
    
    //let zzz = MapBoxModule.MapBoxModule;
    SHARED_IMPORTS = [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        MultilingualModule,
        //zzz.forRoot('pk.eyJ1IjoiYmVuc2hleiIsImEiOiJjajFmZ2ludHMwMGx0MzJ0NDJzbW14MWc5In0.3W8kUIEbiliNAEl85DqD-A')
    ];
    //var mapbox = require("nativescript-mapbox");
} else {
    SHARED_IMPORTS = [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        MultilingualModule
    ];
}
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
    imports: [
        SHARED_IMPORTS
    ],
    declarations: [
        SHARED_COMPONENTS
    ],
    providers: [
        //SAMPLE_PROVIDERS
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [
        SHARED_COMPONENTS,
        MultilingualModule
    ]
})
export class SharedGeoModule {

    constructor( @Optional() @SkipSelf() parentModule: SharedGeoModule) {
        if (parentModule) {
            throw new Error('SampleModule already loaded; Import in root module only.');
        }
    }
}
