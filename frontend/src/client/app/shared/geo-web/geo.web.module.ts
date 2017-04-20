// angular
import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// app
import { SHARED_COMPONENTS } from './components/index';
import { MultilingualModule } from '../i18n/multilingual.module';
//import { MapBoxModule } from 'angular2-mapbox/core';


/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        MultilingualModule,
        //MapBoxModule.forRoot('pk.eyJ1IjoiYmVuc2hleiIsImEiOiJjajFmZ2ludHMwMGx0MzJ0NDJzbW14MWc5In0.3W8kUIEbiliNAEl85DqD-A')
    ],
    declarations: [
        SHARED_COMPONENTS
    ],
    providers: [
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
export class WebGeoModule {

    constructor( @Optional() @SkipSelf() parentModule: WebGeoModule) {
        if (parentModule) {
            throw new Error('SampleModule already loaded; Import in root module only.');
        }
    }
}
