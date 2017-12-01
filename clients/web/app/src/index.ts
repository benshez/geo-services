import { AppComponent } from './app.component';
import { SHARED_MODULES } from 'geoservice-shared/modules/shared/shared.module';
import {
  SHARED_ROUTES,
  SHARED_PROVIDERS
} from 'geoservice-shared/modules/shared/index';

export const APP_COMPONENTS: Array<any> = [
  AppComponent
];

export const WEB_COMPONENTS: Array<any> = [
  AppComponent
];

import { APP_ROUTING } from './app.routes';
import { Store } from '@ngrx/store';

export const APP_ROUTES: Array<any> = [
  ...SHARED_ROUTES,
  ...APP_ROUTING
];

export const APP_MODULES: Array<any> = [
  ...SHARED_MODULES,
];

export const APP_PROVIDERS: Array<any> = [
  ...SHARED_PROVIDERS,
  Store
];

export * from './app.component';
