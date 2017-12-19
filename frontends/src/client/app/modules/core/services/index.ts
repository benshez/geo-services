// app
import { ConsoleService } from './console.service';
import { LogService } from './logging/log.service';
import { RouterExtensions } from './router-extensions.service';
import { WindowService } from './window.service';
import { AppService } from './app.service';
import { StorageService } from './storage.service';
import { ApiService } from './api/services';
import { ApiServiceOptions, ApiServiceParametersOptions } from './api/models';

export const CORE_PROVIDERS: any[] = [
	WindowService,
	StorageService,
	ConsoleService,
	LogService,
	AppService,
	RouterExtensions,
	ApiServiceOptions,
	ApiServiceParametersOptions
];

export * from './console.service';
export * from './logging/index';
export * from './router-extensions.service';
export * from './window.service';
export * from './app.service';
export * from './storage.service';
export * from './api/models';
