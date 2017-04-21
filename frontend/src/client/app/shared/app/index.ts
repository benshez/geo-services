import { NavbarComponent } from './components/navbar/component';
import { ToolbarComponent } from './components/toolbar/component';
import { LoginComponent } from './components/user/login/component';

//components
export const SHARED_COMPONENTS: any[] = [
    NavbarComponent,
    ToolbarComponent,
    LoginComponent,
];

export * from './components/navbar/component';
export * from './components/toolbar/component';
export * from './components/user/login/component';

//routes
import { LOGIN_ROUTES } from './components/user/login/routes';
export const SHARED_ROUTES: Array<any> = [
    ...LOGIN_ROUTES,
];

//modules
export * from './module';
