import { Route } from '@angular/router';
import { MapComponent } from './component';
import { AuthenticatedUserGuard } from '../index';

export const MapRoutes: Route[] = [
    { path: 'map', component: MapComponent, canActivate: [AuthenticatedUserGuard] }
];
