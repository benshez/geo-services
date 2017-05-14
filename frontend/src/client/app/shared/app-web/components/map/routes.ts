import { WebMapComponent } from './component';
import { Config } from '../../../core/index';

export const MAP_ROUTES: Array<any> = [
    {
        path: Config.ROUTE_ROUTES.MAP,
        component: WebMapComponent
    }
];
