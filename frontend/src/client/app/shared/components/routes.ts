import { Routes } from '@angular/router';

import { LoginRoutes } from './user/login/index';
import { ExpiredRoutes } from './user/expired/index';

export const SharedRoutes: Routes = [
    ...LoginRoutes,
    ...ExpiredRoutes
];
