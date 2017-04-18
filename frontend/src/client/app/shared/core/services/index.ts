// app
import { ConsoleService } from './console.service';
import { LogService } from './logging/index';
import { RouterExtensions } from './router-extensions.service';
import { WindowService } from './window.service';
import { AppService } from './app.service';
import { ApiService } from './api/api.service';
import { LockerModule } from './locker/index';
import { MessageEvent } from './message/index';
import { Broadcaster } from './broadcaster/index';
import { ApiServiceParametersOptions, ApiServiceOptions } from '../models/index';

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
    ApiServiceParametersOptions
];

export const CORE_IMPORTS: any[] = [
    LockerModule,
];

export * from './app.service';
export * from './api/api.service';
export * from './console.service';
export * from './logging/index';
export * from './router-extensions.service';
export * from './window.service';
export * from './locker/index';
export * from './message/index';
export * from './broadcaster/index';
export * from '../models/index';
