import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared';
import { RouterModule } from '../common/index';
import { HomeRoutes } from './routes';
import { HomeComponent } from './components/home/component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>HomeRoutes),
    TranslateModule.forChild()
];

export const COMPONENT_DECLARATIONS: any[] = [HomeComponent];
