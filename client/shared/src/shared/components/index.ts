import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


export const SHARED_COMPONENTS: Array<any> = [
  HomeComponent,
  AboutComponent
];

import { SHARED_ROUTING } from './shared.routes';

export const SHARED_ROUTES: Array<any> = [
  ...SHARED_ROUTING
];
