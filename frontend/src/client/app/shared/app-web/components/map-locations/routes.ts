import { WebMapLocationComponent } from './component';
import { Config } from '../../../core/index';

export const WEB_LOCATIONS_ROUTES: Array<any> = [
    {
        path: Config.ROUTE_ROUTES.MAP_PLACES,
        component: WebMapLocationComponent
    }
];
