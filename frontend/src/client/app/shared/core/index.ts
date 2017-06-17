// directives
import { PlatformDirective } from './directives/index';
import { Location } from './collections/index';

export const CORE_COMPONENTS: any[] = [
];

export const CORE_DIRECTIVES: any[] = [
    PlatformDirective
];

import {
    RouterExtensions,
    WindowService,
    AppService,
    ApiService,
    LockerModule,
    MessageEvent,
    Broadcaster,
    ApiServiceParametersOptions,
    ApiServiceOptions,
    ConsoleService,
    LogService,
    LoaderService

} from './services/index';

// providers
export const CORE_PROVIDERS: any[] = [
    AppService,
    ApiService,
    ConsoleService,
    LogService,
    RouterExtensions,
    WindowService,
    MessageEvent,
    Broadcaster,
    ApiServiceOptions,
    ApiServiceParametersOptions,
    Location,
    LoaderService
];

// imports
export const CORE_IMPORTS: any[] = [
    LockerModule
];


//pipes
import { ValuesPipe } from './pipes/values/pipe';
export const CORE_PIPES: any[] = [
    ValuesPipe
];

export * from './utils/index';
export * from './interfaces/index';
export * from './services/index';
export * from './directives/index';
