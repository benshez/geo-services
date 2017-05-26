import { AppComponent } from './component';
import { AboutComponent } from './about/component';
import { HomeComponent } from './home/component';

// components
export const APP_COMPONENTS: any[] = [
    AppComponent,
    AboutComponent,
    HomeComponent
];

export * from './component';
export * from './about/component';
export * from './home/component';

//routes
import { HOME_ROUTES } from './home/routes';
import { ABOUT_ROUTES } from './about/routes';
export const APP_ROUTES: Array<any> = [
    ...HOME_ROUTES,
    ...ABOUT_ROUTES
];
