import { Routes } from '@angular/router';

import { SupplierRoutes, UserRoutes } from './index';

export const FrontendRoutes: Routes = [
    ...SupplierRoutes,
    ...UserRoutes
];
