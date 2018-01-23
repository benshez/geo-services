import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../_shared';
import { RouterModule } from '../../_common';
import { AboutRoutes } from './routes';
import { AboutComponent } from './components/about/component';

export const SHARED_MODULES: Array<any> = [
    SharedModule,
    RouterModule.forChild(<any>AboutRoutes),
    TranslateModule.forChild()
];

export const ABOUT_COMPONENT_DECLARATIONS: Array<any> = [
    AboutComponent
];


export const ABOUT_COMPONENT_EXPORTS: Array<any> = [
    AboutComponent
];