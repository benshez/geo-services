import { WebMapComponent } from './map.component';
import { Config } from '../../../core/index';

export const WebMapRoutes: Array<any> = [
    {
        path: Config.ROUTE_VALUES.MAP_VALUE,
        component: WebMapComponent
    }
];
