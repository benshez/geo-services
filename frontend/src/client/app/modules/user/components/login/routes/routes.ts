import { Config } from '../../../../core/index';
import { LoginComponent } from '../component';

export const LoginRoutes: Array<any> = [
	{
		path: Config.ROUTE_ROUTES.LOGIN,
		component: LoginComponent
	}
];
