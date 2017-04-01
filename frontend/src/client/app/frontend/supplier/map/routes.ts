import { Route } from '@angular/router';
import { SupplierMapComponent } from './component';
import { AuthenticatedSupplierGuard } from '../index';

export const SupplierMapRoutes: Route[] = [
    { path: 'supplierMap', component: SupplierMapComponent, canActivate: [AuthenticatedSupplierGuard] }
];
