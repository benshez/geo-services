import { WebMapComponent } from './components/map/component';
import { APP_ROUTES } from '../../components';
import { SHARED_ROUTES } from '../app';
import { MAP_ROUTES } from './components/map/routes';

// components
export const SHARED_COMPONENTS: any[] = [
    WebMapComponent
];

export * from './components/map/component';

//routes
export const WEB_ROUTES: Array<any> = [
    ...APP_ROUTES,
    ...SHARED_ROUTES,
    ...MAP_ROUTES
];

//modules
export * from './module';
