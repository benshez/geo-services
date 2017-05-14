//modules
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module'; 

export const NS_MODULES: any[] = [
    NativeScriptModule,
    CommonModule
];

// providers
export const NS_PROVIDERS: any[] = [
];

//components
import { NSMapComponent } from './components/map/component';
import { NSWebMapPlacesComponent } from './components/map-places/component';

export const NS_COMPONENTS: any[] = [
    NSMapComponent,
    NSWebMapPlacesComponent
];

export * from './components/map/component';

// directives
export const NS_DIRECTIVES: any[] = [
];

//routes
import { APP_ROUTES } from '../../app/components/index';
import { SHARED_ROUTES } from '../../app/shared/app/index';
import { NS_MAP_ROUTES } from './components/map/routes';
import { NS_MAP_PLACES_ROUTES } from './components/map-places/routes';

export const NS_SHARED_ROUTES: Array<any> = [
    ...APP_ROUTES,
    ...SHARED_ROUTES,
    ...NS_MAP_ROUTES,
    ...NS_MAP_PLACES_ROUTES
];

//modules
export * from './module';
