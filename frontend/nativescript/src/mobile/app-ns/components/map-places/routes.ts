import { NSWebMapPlacesComponent } from './component';
import { Config } from '../../../../app/shared/core/index';

export const NS_MAP_PLACES_ROUTES: Array<any> = [
    {
        path: Config.ROUTE_ROUTES.MAP_PLACES,
        component: NSWebMapPlacesComponent
    }
];
