import { MapComponent } from './map.component';
import { Config } from '../../../core/index';

export const MapRoutes: Array<any> = [
    {
        path: Config.ROUTE_VALUES.MAP_VALUE,
        component: MapComponent
    }
];
