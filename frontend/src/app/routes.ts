import { Routes } from '@angular/router';
import { COMPONENT_ROUTES } from './_components/routes';

export const AppRoutes: Routes = [
    ...COMPONENT_ROUTES,
    { path: '', pathMatch: 'full', redirectTo: '/home' }
];
