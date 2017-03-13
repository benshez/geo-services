import { Route } from '@angular/router';
import { SupplierMapComponent } from './component';
import { AuthGuard } from '../../../shared/index';

export const SupplierMapRoutes: Route[] = [
    { path: 'supplierMap', component: SupplierMapComponent, canActivate: [AuthGuard] }
];
