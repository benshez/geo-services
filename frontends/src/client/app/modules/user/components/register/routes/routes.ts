import { RegistrationComponent } from '../component';
import { Config } from '../../../../core/utils/config';

export const RegistrationRoutes: Array<any> = [
	{
		path: Config.ROUTE_ROUTES.REGISTER,
		component: RegistrationComponent
	}
];
