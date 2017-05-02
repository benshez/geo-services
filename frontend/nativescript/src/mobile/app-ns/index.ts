// providers 

export const NS_PROVIDERS: any[] = [
];

//components
import { NSMapComponent } from './components/map/component';

export const NS_COMPONENTS: any[] = [
    NSMapComponent
];

export * from './components/map/component';

//routes
import { APP_ROUTES } from '../../app/components/index';
import { SHARED_ROUTES } from '../../app/shared/app/index';
import { NS_MAP_ROUTES } from './components/map/routes';

export const NS_SHARED_ROUTES: Array<any> = [
    ...APP_ROUTES,
    ...SHARED_ROUTES,
    ...NS_MAP_ROUTES
];

//modules
export * from './module';
