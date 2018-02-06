import { Routes } from '@angular/router';
import { COMPONENT_ROUTES } from './_components';
/**
 * Define app module routes here, e.g., to lazily load a module
 * (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
 */
export const AppRoutes: Routes = [
    ...COMPONENT_ROUTES,
    { path: '', pathMatch: 'full', redirectTo: '/signin' },
    {
        path: 'profile',
        loadChildren: '~/app/profile/profile.module#ProfileModule'
    },
    {
        path: 'issues',
        loadChildren: '~/app/issues/issues.module#IssuesModule'
    },
    {
        path: 'dashboard',
        loadChildren: '~/app/dashboard/dashboard.module#DashboardModule'
    },
];
