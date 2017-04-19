// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';

//Shared 
import { SharedRoutes } from '../shared/geo/components/shared.routes';

export const routes: Array<any> = [
    ...HomeRoutes,
    ...AboutRoutes,
    ...SharedRoutes
];
