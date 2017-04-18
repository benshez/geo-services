import { PollyfillDriver } from './PolyfillDriver';
import { Driver } from './driver';
import { MemoryStorage } from './memorystorage';
import { CookieStorage } from './cookiestorage';

import { Config } from '../../utils/config';

export const LOCAL = new PollyfillDriver(Config.LOCAL_STORAGE());
export const SESSION = new PollyfillDriver(Config.SESSION_STORAGE());
export const MEMORY = new PollyfillDriver(new MemoryStorage());
export const COOKIE = new Driver(new CookieStorage());

export const DRIVERS = {
    LOCAL,
    SESSION,
    MEMORY,
    COOKIE
};
