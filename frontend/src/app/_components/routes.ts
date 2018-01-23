
import { AboutRoutes } from './about/routes';
import { HomeRoutes } from './home/routes';

export const COMPONENT_ROUTES: Array<any> = [
	...HomeRoutes,
	...AboutRoutes
];