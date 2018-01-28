import { WindowService } from '../../core/_services';
import { I18NService } from './I18N';
import { LogTarget } from './LogTarget';

export const MULTILANG_PROVIDERS: Array<any> = [
    WindowService,
    I18NService,
    LogTarget
];

export * from './I18N';
export * from './Analytics';
export * from './Log';
export * from './LogTarget';
