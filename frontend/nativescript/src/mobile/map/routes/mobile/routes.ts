import { Config } from '../../../../app/modules/core/utils/config';

import { NSMapComponent } from '../../components/map/component';
export const NS_MAP_ROUTES: Array<any> = [
    {
        path: Config.ROUTE_ROUTES.MAP,
        component: NSMapComponent
    }
];

import { NSMapLocationsComponent } from '../../components/location/component';
export const NS_LOCATION_ROUTES: Array<any> = [
    {
        path: Config.ROUTE_ROUTES.MAP_PLACES,
        component: NSMapLocationsComponent
    }
];