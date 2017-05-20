import { WebMapComponent } from './components/map/component';
import { WebMapPlacesComponent } from './components/map-places/component';
import { WebTypeAheadComponent } from './components/type-ahead/component';

// components
export const SHARED_COMPONENTS: any[] = [
    WebMapComponent,
    WebMapPlacesComponent,
    WebTypeAheadComponent
];

export * from './components/map/component';
export * from './components/map-places/component';
export * from './components/type-ahead/component';

//routes
import { APP_ROUTES } from '../../components/index';
import { SHARED_ROUTES } from '../app/index';
import { MAP_ROUTES } from './components/map/routes';
import { MAP_PLACES_ROUTES } from './components/map-places/routes';
export const WEB_ROUTES: Array<any> = [
    ...APP_ROUTES,
    ...SHARED_ROUTES,
    ...MAP_ROUTES,
    ...MAP_PLACES_ROUTES
];

//modules
export * from './module';
