import { NavbarComponent } from './components/navbar/component';
import { ToolbarComponent } from './components/toolbar/component';
import { LoginComponent } from './components/user/login/component';
import { LocationComponent } from './components/location-finder/component';
import { TypeAheadComponent } from './components/type-ahead/component';

//components
export const SHARED_COMPONENTS: any[] = [
    NavbarComponent,
    ToolbarComponent,
    LoginComponent,
    LocationComponent,
    TypeAheadComponent
];

export * from './components/navbar/component';
export * from './components/toolbar/component';
export * from './components/user/login/component';
export * from './components/location-finder/component';
export * from './components/type-ahead/component';

//providers
export const SHARED_PROVIDERS: any[] = [
];

//routes
import { LOGIN_ROUTES } from './components/user/login/routes';
import { LOCATION_ROUTES } from './components/location-finder/routes';
export const SHARED_ROUTES: Array<any> = [
    ...LOGIN_ROUTES,
    ...LOCATION_ROUTES
];

//modules
export * from './module';
