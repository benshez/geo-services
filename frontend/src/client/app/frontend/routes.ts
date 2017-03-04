import { Routes } from '@angular/router';

import { SupplierRoutes } from './supplier/index';
import { UserRoutes } from './user/index';

export const FrontendRoutes: Routes = [
    ...UserRoutes
];
