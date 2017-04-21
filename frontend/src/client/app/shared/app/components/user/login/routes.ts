import { LoginComponent } from './component';
import { Config } from '../../../../core/index';

export const LOGIN_ROUTES: Array<any> = [
    {
        path: Config.ROUTE_VALUES.LOGIN_VALUE,
        component: LoginComponent
    }
];
