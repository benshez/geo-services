// app
import { HomeRoutes } from './home/routes';
import { AboutRoutes } from './about/routes';
import { LoginRoutes } from '../modules/user/components/login/routes/routes';

export const APP_ROUTES: Array<any> = [
    ...HomeRoutes,
    ...AboutRoutes,
    ...LoginRoutes
];
