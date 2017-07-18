import { Config } from '../../core/index';
import { WebMapLocationComponent } from '../components/location/component';

export const MAP_LOCATION_ROUTES: Array<any> = [
    {
        path: Config.ROUTE_ROUTES.MAP_PLACES,
        component: WebMapLocationComponent
    }
];