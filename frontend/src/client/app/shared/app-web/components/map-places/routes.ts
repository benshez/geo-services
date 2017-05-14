import { WebMapPlacesComponent } from './component';
import { Config } from '../../../core/index';

export const MAP_PLACES_ROUTES: Array<any> = [
    {
        path: Config.ROUTE_ROUTES.MAP_PLACES,
        component: WebMapPlacesComponent
    }
];
