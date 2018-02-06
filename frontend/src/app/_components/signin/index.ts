import { Routes } from '@angular/router';
import { SigninComponent } from './component';

export const SIGNIN_COMPONENT_DECLARATIONS: Array<any> = [
    SigninComponent
];

export const SIGNIN_COMPONENT_EXPORTS: Array<any> = [
    SigninComponent
];

export const SIGNIN_ROUTES: Routes = [
    {
        path: 'signin',
        component: SigninComponent
    }
];
