import { LocationComponent } from './component';
import { Config } from '../../../core/index';

export const LOCATION_ROUTES: Array<any> = [
    {
        path: Config.ROUTE_ROUTES.MAP_PLACES,
        component: LocationComponent
    }
];
