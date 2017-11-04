import { AppComponent } from './app.component';
import { SHARED_COMPONENTS, SHARED_ROUTES } from 'geoservice-shared';

export const APP_COMPONENTS: Array<any> = [
  AppComponent
];

export const WEB_COMPONENTS: Array<any> = [
  AppComponent,
  SHARED_COMPONENTS
];

import { APP_ROUTING } from './app.routes';

export const APP_ROUTES: Array<any> = [
  ...SHARED_ROUTES,
  ...APP_ROUTING
];

export * from './app.component';
