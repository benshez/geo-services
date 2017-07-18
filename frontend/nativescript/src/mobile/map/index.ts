import { Config } from '../../app/modules/core/index';

import { NSMapLocationsComponent } from './components/location/component';
import { NSMapComponent } from './components/map/component';
export const NS_MAP_COMPONENTS: any[] = [
    NSMapLocationsComponent,
    NSMapComponent
];

import { Locator } from '../../app/modules/map/services/service';
import { ApiService } from '../../app/modules/core/services/api/services';
export const NS_MAP_PROVIDERS: any[] = [
    Locator,
    ApiService
];

export * from '../../app/modules/map/interfaces/interfaces';
export * from './components/map/component';
export * from './components/location/component';
export * from '../../app/modules/map/services/service';
export * from './module';
