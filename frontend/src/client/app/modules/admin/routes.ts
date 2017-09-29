// app
import { LoginRoutes } from '../modules/user/components/login/routes/routes';
import { AboutRoutes } from './about/routes';
import { HomeRoutes } from './home/routes';

export const APP_ROUTES: Array<any> = [
	...HomeRoutes,
	...AboutRoutes,
	...LoginRoutes
];
