// app
import { AboutRoutes } from './about/routes';
import { HomeRoutes } from './home/routes';
import { USER_ROUTES } from '../modules/user/routes';

export const APP_ROUTES: Array<any> = [
	...HomeRoutes,
	...AboutRoutes,
	...USER_ROUTES
];
