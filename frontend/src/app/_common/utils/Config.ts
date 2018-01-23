export interface IPlatforms {
    WEB: string;
    MOBILE_NATIVE: string;
}

export class Config {
    // supported platforms
    public static PLATFORMS: IPlatforms = {
        WEB: 'web',
        MOBILE_NATIVE: 'mobile_native'
    };

    // current target (defaults to web)
    public static PLATFORM_TARGET: string = Config.PLATFORMS.WEB;

    public static get IS_WEB(): boolean {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.WEB;
    }

    public static get IS_MOBILE_NATIVE(): boolean {
        return Config.PLATFORM_TARGET === Config.PLATFORMS.MOBILE_NATIVE;
    }

    public static DEBUG = {
        LEVEL_1: false, // .info only
        LEVEL_2: false, // .warn only
        LEVEL_3: false, // .error only
        LEVEL_4: false // .log + all the above
    };

    public static GET_SUPPORTED_LANGUAGES() {
        return [
            { code: 'en', title: 'English' },
            { code: 'fr', title: 'French' }
        ];
    }
}
