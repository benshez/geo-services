// components
import { WebMapComponent } from './components/map/component';
import { WebMapLocationComponent } from './components/map-locations/component';
import { TypeAheadComponent } from './components/type-ahead/component';

export const WEB_COMPONENTS: any[] = [
    WebMapComponent,
    WebMapLocationComponent,
    TypeAheadComponent
];

export * from './components/map/component';
export * from './components/map-locations/component';
export * from './components/type-ahead/component';

//providers
export const WEB_PROVIDERS: any[] = [
    TypeAheadComponent
];

//routes
import { APP_ROUTES } from '../../components/index';
import { SHARED_ROUTES } from '../app/index';
import { WEB_MAP_ROUTES } from './components/map/routes';
import { WEB_LOCATIONS_ROUTES } from './components/map-locations/routes';

export const WEB_ROUTES: Array<any> = [
    ...APP_ROUTES,
    ...SHARED_ROUTES,
    ...WEB_MAP_ROUTES,
    ...WEB_LOCATIONS_ROUTES
];

//modules
export * from './module';
