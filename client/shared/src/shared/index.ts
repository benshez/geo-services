import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const APP_COMPONENTS: Array<any> = [
  AppComponent
];

export const WEB_COMPONENTS: Array<any> = [
  AppComponent,
  HomeComponent,
  AboutComponent
];

import { routing } from './app.routing';

export const APP_ROUTES: Array<any> = [
  ...routing
];

export * from './app.component';
