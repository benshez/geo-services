import { Config } from '../core/index';

import { WebMapLocationComponent } from './components/location/component';
import { WebMapComponent } from './components/map/component';
export const WEB_MAP_COMPONENTS: any[] = [
    WebMapLocationComponent,
    WebMapComponent
];

import { Locator } from './services/service';
import { ApiService } from '../core/services/api/services';
export const WEB_MAP_PROVIDERS: any[] = [
    Locator,
    ApiService
];

export * from './interfaces/interfaces';
export * from './components/map/component';
export * from './components/location/component';
export * from './services/service';
export * from './module';
