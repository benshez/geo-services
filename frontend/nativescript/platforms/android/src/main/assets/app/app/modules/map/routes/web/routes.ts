import { Config } from '../../../core/index';

import { WebMapComponent } from '../../components/map/component';
export const WEB_MAP_ROUTES: Array<any> = [
    {
        path: Config.ROUTE_ROUTES.MAP,
        component: WebMapComponent
    }
];

import { WebMapLocationComponent } from '../../components/location/component';
export const MAP_LOCATION_ROUTES: Array<any> = [
    {
        path: Config.ROUTE_ROUTES.MAP_PLACES,
        component: WebMapLocationComponent
    }
];