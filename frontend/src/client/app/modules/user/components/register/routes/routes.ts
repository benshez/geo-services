import { Config } from '../../../../core/utils/config';
import { RegistrationComponent } from '../component/component';

export const RegistrationRoutes: Array<any> = [
	{
		path: Config.ROUTE_ROUTES.REGISTER,
		component: RegistrationComponent
	}
];
