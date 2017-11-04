import { AppComponent } from './app.component';
import {
  SHARED_COMPONENTS,
  SHARED_ROUTES,
  SHARED_MODULES,
  SHARED_PROVIDERS
} from 'geoservice-shared';

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

export const APP_MODULES: Array<any> = [
  ...SHARED_MODULES,
];

export const APP_PROVIDERS: Array<any> = [
  ...SHARED_PROVIDERS,
];

export * from './app.component';
