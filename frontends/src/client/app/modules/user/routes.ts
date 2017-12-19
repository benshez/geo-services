import { LoginRoutes } from './components/login/routes/routes';
import { RegistrationRoutes } from './components/register/routes/routes';

export const USER_ROUTES: Array<any> = [
	...LoginRoutes,
	...RegistrationRoutes
];
