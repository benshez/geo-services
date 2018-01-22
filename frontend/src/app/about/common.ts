import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared';
import { RouterModule } from '../common/index';
import { AboutRoutes } from './routes';
import { AboutComponent } from './components/about/component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>AboutRoutes),
    TranslateModule.forChild()
];

export const COMPONENT_DECLARATIONS: any[] = [AboutComponent];
