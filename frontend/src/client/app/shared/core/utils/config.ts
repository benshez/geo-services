import { ILang, IMapMarkers } from '../index';

// Feel free to extend this interface
// depending on your app specific config.

export interface EnvConfig {
    API?: string;
    ENV?: string;
    MAP_BOX_API_KEY?: string;
}

export interface IPlatforms {
    WEB: string;
    MOBILE_NATIVE: string;
    MOBILE_HYBRID: string;
    DESKTOP: string;
}

export interface IRouteUrls {
    LOGIN_RETURN_URL: string;
}

export interface IRouteValues {
    LOGIN_VALUE: string;
    MAP_VALUE: string;
}

export interface ICacheKeys {
    USER_KEY: string;
}

export interface IApiEndPoints {
    USER_LOGIN: string;
}

export interface ILockerKeys {
    USER_DETAIL: string;
}



export class Config {

    public static PageClass: any;

    public static DEBUG = {
        LEVEL_1: false, // .info only
        LEVEL_2: false, // .warn only
        LEVEL_3: false, // .error only
        LEVEL_4: false  // .log + all the above
    };

    public static SUPPORTED_LANGUAGES: Array<ILang> = [
        { code: 'en', title: 'English' }
    ];

    // supported platforms
    public static PLATFORMS: IPlatforms = {
        WEB: 'web',
        MOBILE_NATIVE: 'mobile_native',
        MOBILE_HYBRID: 'mobile_hybrid',
        DESKTOP: 'desktop'
    };

    public static ROUTE_URLS: IRouteUrls = {
        LOGIN_RETURN_URL: 'loginReturnUrl'
    };

    public static ROUTE_VALUES: IRouteValues = {
        LOGIN_VALUE: 'login',
        MAP_VALUE: 'map'
    };

    public static CACHE_KEYS: ICacheKeys = {
        USER_KEY: 'user'
    };

    public static API_END_POINTS: IApiEndPoints = {
        USER_LOGIN: 'user/login'
    };

    public static LOCKER_KEYS: ILockerKeys = {
        USER_DETAIL: 'user_detail'
    };

    // current target (defaults to web)
    public static PLATFORM_TARGET: string = Config.PLATFORMS.WEB;

    // convenient platform checks
    public static IS_WEB(): boolean {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.WEB;
    }

    public static IS_MOBILE_NATIVE(): boolean {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.MOBILE_NATIVE;
    }

    public static IS_MOBILE_HYBRID(): boolean {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.MOBILE_HYBRID;
    }

    public static IS_DESKTOP(): boolean {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.DESKTOP;
    }

    public static ENVIRONMENT(): EnvConfig {
        try {
            return JSON.parse('<%= ENV_CONFIG %>');
        } catch (exp) {
            return {};
        }
    }

    public static IS_DEBUG_MODE(): boolean {
        for (let key in Config.DEBUG) {
            if (Config.DEBUG[key]) {
                // if any level is on, debug mode is on
                return true;
            }
        }
        return false;
    }

    public static LOCAL_STORAGE(): any {
        return (typeof (localStorage) !== undefined) ? localStorage : applicationCache;
    }

    public static SESSION_STORAGE(): any {
        return (typeof (sessionStorage) !== undefined) ? sessionStorage : applicationCache;
    }
    // reset debug defaults
    public static RESET() {
        for (let key in Config.DEBUG) {
            Config.DEBUG[key] = false;
        }
    }

}
