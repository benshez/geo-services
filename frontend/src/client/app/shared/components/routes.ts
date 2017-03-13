import { Routes } from '@angular/router';

import { LoginRoutes } from './user/login/index';

export const SharedRoutes: Routes = [
    ...LoginRoutes
];
