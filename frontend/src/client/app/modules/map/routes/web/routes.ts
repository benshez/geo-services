import { Config } from '../../../core/index';
import { UserGuard } from '../../../guards/index';

import { WebMapComponent } from '../../components/map/component';
export const WEB_MAP_ROUTES: Array<any> = [
	{
		path: Config.ROUTE_ROUTES.MAP,
		component: WebMapComponent,
		canActivate: [UserGuard]
	}
];

import { WebMapLocationComponent } from '../../components/location/component';
export const MAP_LOCATION_ROUTES: Array<any> = [
	{
		path: Config.ROUTE_ROUTES.MAP_PLACES,
		component: WebMapLocationComponent,
		canActivate: [UserGuard]
	}
];
