import {
    IPlatforms,
    ISupportedLanguages,
    IEnvironments
} from '../interfaces/index';

const ProdConfig: IEnvironments = {
    ENV: 'PROD',
    API: 'http://localhost:8000/api/v1',
    MAP_BOX_API: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
    MAP_BOX_API_KEY: 'pk.eyJ1IjoiYmVuc2hleiIsImEiOiJjajFmZ2ludHMwMGx0MzJ0NDJzbW14MWc5In0.3W8kUIEbiliNAEl85DqD-A'
};
export class Config {
    public static PLATFORMS: IPlatforms = {
        WEB: 'web',
        MOBILE_NATIVE: 'mobile_native',
        MOBILE_HYBRID: 'mobile_hybrid',
        DESKTOP: 'desktop'
    };

    public static PLATFORM_TARGET: string = Config.PLATFORMS.WEB;

    public static get IS_WEB(): boolean {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.WEB;
    }

    public static get IS_MOBILE_NATIVE(): boolean {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.MOBILE_NATIVE;
    }

    public static get IS_MOBILE_HYBRID(): boolean {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.MOBILE_HYBRID;
    }

    public static get IS_DESKTOP(): boolean {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.DESKTOP;
    }

    public static get GET_SUPPORTED_LANGUAGES(): Array<ISupportedLanguages> {
        return [
            { code: 'en', title: 'English' },
            { code: 'fr', title: 'French' }
        ];
    }

    public static get ENVIRONMENT(): IEnvironments {
        try {
            return ProdConfig;
        } catch (exp) {
            return {};
        }
    }

    public static DEBUG = {
        LEVEL_1: false,
        LEVEL_2: false,
        LEVEL_3: false,
        LEVEL_4: false // .log + all the above
    }

    public static IS_DEBUG_MODE(): boolean {
        for (const key in this.DEBUG) {
            if (this.DEBUG[key]) {
                return true;
            }
        }
        return false;
    }

    public static RESET(): void {
        for (const key in this.DEBUG) {
            if (this.DEBUG[key]) {
                this.DEBUG[key] = false;
            }
        }
    }
}
