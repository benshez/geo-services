import { AppComponent } from './app.component';
import { SHARED_COMPONENTS } from 'geoservice-shared';

export const APP_COMPONENTS: Array<any> = [
  AppComponent
];

export const WEB_COMPONENTS: Array<any> = [
  AppComponent,
  SHARED_COMPONENTS
];

import { APP_ROUTING } from './app.routes';

export const APP_ROUTES: Array<any> = [
  ...APP_ROUTING
];

export * from './app.component';
