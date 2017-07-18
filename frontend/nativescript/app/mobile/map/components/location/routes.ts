import { NSMapLocationsComponent } from './component';
import { Config } from '../../../../app/shared/core/index';

export const NS_LOCATIONS_ROUTES: Array<any> = [
    {
        path: Config.ROUTE_ROUTES.MAP_PLACES,
        component: NSMapLocationsComponent
    }
];
