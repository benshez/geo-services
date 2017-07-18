import { NavbarComponent } from './components/navbar/component';
import { ToolbarComponent } from './components/toolbar/component';
import { LoaderComponent } from './components/loader/component';
import { TypeAheadComponent } from '../type-ahead/components/component';
import { LoginComponent } from '../user/components/login/component';

export const SHARED_COMPONENTS: any[] = [
    NavbarComponent,
    ToolbarComponent,
    LoaderComponent,
    TypeAheadComponent, 
    LoginComponent
];

export * from './components/navbar/component';
export * from './components/toolbar/component';
export * from './components/loader/component';
export * from '../type-ahead/components/component';
export * from '../user/components/login/component';

import { LoaderService } from './components/loader/services/services';
import { ApiService } from '../core/services/api/services';
import { Locator } from '../map/services/service';

export const SHARED_PROVIDERS: any[] = [
    LoaderService,
    ApiService,
    Locator
];

export * from './module';
export * from './components/loader/interfaces/interfaces';
export * from './components/loader/services/services';