import {
  WindowService,
  StorageService,
  ConsoleService,
  LogService,
  AppService,
  RouterExtensions
} from './services/index';

export const CORE_PROVIDERS: Array<any> = [
  WindowService,
  StorageService,
  ConsoleService,
  LogService,
  AppService,
  RouterExtensions
];

export const CORE_DIRECTIVES: Array<any> = [];
