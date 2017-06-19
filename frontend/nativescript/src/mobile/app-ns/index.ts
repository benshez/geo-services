//modules
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module'; 
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { TypeAheadModule } from '../../app/shared/app/components/type-ahead/module';

export const NS_MODULES: any[] = [
    NativeScriptModule,
    CommonModule,
    NativeScriptFormsModule,
    FormsModule,
    ReactiveFormsModule,
    TypeAheadModule.forRoot()
];

// providers
export const NS_PROVIDERS: any[] = [

];

//components
import { NSMapComponent } from './components/map/component';
import { NSMapLocationsComponent } from './components/map-locations/component';

export const NS_COMPONENTS: any[] = [
    NSMapComponent,
    NSMapLocationsComponent
];

export * from './components/map/component';
export * from './components/map-locations/component';

// directives
export const NS_DIRECTIVES: any[] = [
];

//routes
import { APP_ROUTES } from '../../app/components/index';
import { SHARED_ROUTES } from '../../app/shared/app/index';
import { NS_MAP_ROUTES } from './components/map/routes';
import { NS_LOCATIONS_ROUTES } from './components/map-locations/routes';

export const NS_SHARED_ROUTES: Array<any> = [
    ...APP_ROUTES,
    ...SHARED_ROUTES,
    ...NS_MAP_ROUTES,
    ...NS_LOCATIONS_ROUTES
];

//modules
export * from './module';
