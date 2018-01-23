import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../_shared';
import { RouterModule } from '../../_common';
import { HomeRoutes } from './routes';
import { HomeComponent } from './components/home/component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>HomeRoutes),
    TranslateModule.forChild()
];

export const HOME_COMPONENT_DECLARATIONS: Array<any> = [
    HomeComponent
];


export const HOME_COMPONENT_EXPORTS: Array<any> = [
    HomeComponent
];