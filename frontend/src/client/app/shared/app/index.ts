import { NavbarComponent } from './components/navbar/component';
import { ToolbarComponent } from './components/toolbar/component';
import { LoginComponent } from './components/user/login/component';
import { LoaderComponent } from './components/loader/component';
import { TypeAheadComponent } from './components/type-ahead/component';

//components
export const SHARED_COMPONENTS: any[] = [
    NavbarComponent,
    ToolbarComponent,
    LoginComponent,
    LoaderComponent,
    TypeAheadComponent
];

export * from './components/navbar/component';
export * from './components/toolbar/component';
export * from './components/user/login/component';
export * from './components/loader/component';
export * from './components/type-ahead/component';

//providers
export const SHARED_PROVIDERS: any[] = [
    LoaderComponent,
    TypeAheadComponent
];

//routes
import { LOGIN_ROUTES } from './components/user/login/routes';
export const SHARED_ROUTES: Array<any> = [
    ...LOGIN_ROUTES
];

//modules
export * from './module';
