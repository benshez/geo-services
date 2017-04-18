import { LoginComponent } from './login.component';
import { Config } from '../../../../core/index';

export const LoginRoutes: Array<any> = [
    {
        path: Config.ROUTE_VALUES.LOGIN_VALUE,
        component: LoginComponent
    }
];
