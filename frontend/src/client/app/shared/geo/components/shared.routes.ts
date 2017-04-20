import { LoginRoutes } from './user/login/login.routes';
//import { MapRoutes } from './map/map.routes';

export const SharedRoutes: Array<any> = [
    ...LoginRoutes,
    //...MapRoutes
];
