import { WindowService } from '../../core/_services';
import { I18NService } from './I18N';

export const MULTILANG_PROVIDERS: Array<any> = [WindowService, I18NService];

export * from './I18N';
export * from './Analytics';
export * from './Log';
export * from './LogTarget';
