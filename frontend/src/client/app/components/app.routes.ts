// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';

//Shared 
import { SharedRoutes } from '../shared/geo/components/shared.routes';
//mport { WebSharedRoutes } from '../shared/geo-web/components/geo.web.shared.routes';
//import { TnsSharedRoutes } from '../shared/geo-tns/components/geo.tns.shared.routes';

export const routes: Array<any> = [
    ...HomeRoutes,
    ...AboutRoutes,
    ...SharedRoutes,
    //...WebSharedRoutes,
    //...TnsSharedRoutes
];
