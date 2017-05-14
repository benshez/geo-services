import { NSMapComponent } from './component';
import { Config } from '../../../../app/shared/core/index';

export const NS_MAP_ROUTES: Array<any> = [
    {
        path: Config.ROUTE_ROUTES.MAP,
        component: NSMapComponent
    }
];
