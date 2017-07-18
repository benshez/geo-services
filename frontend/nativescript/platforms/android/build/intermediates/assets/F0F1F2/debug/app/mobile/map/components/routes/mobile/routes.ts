import { NSMapComponent } from '../../map/component';
import { Config } from '../../../../../app/modules/core/utils/config';

export const NS_MAP_ROUTES: Array<any> = [
    {
        path: Config.ROUTE_ROUTES.MAP,
        component: NSMapComponent
    }
];
