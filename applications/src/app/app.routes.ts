import { Routes } from '@angular/router';

export const APP_ROUTING: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    }
];
