// Feel free to extend this interface
// depending on your app specific config.
export interface EnvConfig {
	API?: string;
	ENV?: string;
	MAP_BOX_API?: string;
	MAP_BOX_API_KEY?: string;
}

export interface IPlatforms {
	WEB: string;
	MOBILE_NATIVE: string;
	MOBILE_HYBRID: string;
	DESKTOP: string;
}

export interface IRouteParameters {
	LOGIN_RETURN_URL: string;
	LONGITUDE: number;
	LATITUDE: number;
	INDUSTRY: number;
}

export interface IRouteRoutes {
	ADMIN: string;
	LOGIN: string;
	REGISTER: string;
	MAP_PLACES: string;
	MAP: string;
}

export interface ICacheKeys {
	USER_KEY: string;
	MAP_KEY: string;
	INDUSTRIES_KEY: string;
}

export interface IApiEndPoints {
	USER_LOGIN: string;
	MAP: string;
	INDUSTRIES: string;
}

export interface ILockerKeys {
	USER_DETAIL: string;
}

export interface IComponentItems {
	TEMPLATE: string;
	CSS: string;
	LABEL_PREFIX: string;
}

export interface ITranstion {
	DURATION: number;
	SLIDE_TOP: string;
}

export interface IEvents {
	ARROW_UP: string;
	ARROW_DOWN: string;
	FOCUS: string;
}

export interface IDictionaryKeys {
	KEY: string;
	VALUE: string;
}


export interface IPlatforms {
	WEB: string;
	MOBILE_NATIVE: string;
	MOBILE_HYBRID: string;
	DESKTOP: string;
}

export class Config {

	public static PageClass: any;
	public static ROUTE_PARAMETERS: IRouteParameters = {
		LOGIN_RETURN_URL: 'loginReturnUrl',
		LONGITUDE: 0,
		LATITUDE: 0,
		INDUSTRY: 0
	};

	public static ROUTE_ROUTES: IRouteRoutes = {
		ADMIN: 'admin',
		LOGIN: 'login',
		REGISTER: 'register',
		MAP_PLACES: 'map-places',
		MAP: 'map'
	};

	public static CACHE_KEYS: ICacheKeys = {
		USER_KEY: 'user_',
		MAP_KEY: 'mapper_',
		INDUSTRIES_KEY: 'industries_'
	};

	public static API_END_POINTS: IApiEndPoints = {
		USER_LOGIN: 'user/login',
		MAP: '',
		INDUSTRIES: 'industries/'
	};

	public static LOCKER_KEYS: ILockerKeys = {
		USER_DETAIL: 'user_detail'
	};

	public static COMPONENT_ITEMS: IComponentItems = {
		TEMPLATE: 'component.html',
		CSS: 'component.css',
		LABEL_PREFIX: 'lbl'
	};

	public static TRANSITION: ITranstion = {
		DURATION: 1000,
		SLIDE_TOP: 'slideTop'
	};

	public static EVENTS: IEvents = {
		ARROW_UP: 'up',
		ARROW_DOWN: 'down',
		FOCUS: 'focus'
	};

	public static DICTIONAR_KEYS: IDictionaryKeys = {
		KEY: 'key',
		VALUE: 'value'
	};

	public static DEBUG = {
		LEVEL_1: false, // .info only
		LEVEL_2: false, // .warn only
		LEVEL_3: false, // .error only
		LEVEL_4: false  // .log + all the above
	};

	// supported platforms
	public static PLATFORMS: IPlatforms = {
		WEB: 'web',
		MOBILE_NATIVE: 'mobile_native',
		MOBILE_HYBRID: 'mobile_hybrid',
		DESKTOP: 'desktop'
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

	// supported languages
	public static GET_SUPPORTED_LANGUAGES() {
		return [
			{ code: 'en', title: 'English' },
			{ code: 'es', title: 'Spanish' },
			{ code: 'fr', title: 'French' },
			{ code: 'ru', title: 'Russian' },
			{ code: 'bg', title: 'Bulgarian' }
		];
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

	// reset debug defaults
	public static RESET() {
		for (let key in Config.DEBUG) {
			Config.DEBUG[key] = false;
		}
	}

	public static LOCAL_STORAGE(): any {
		return (typeof (localStorage) !== undefined) ? localStorage : applicationCache;
	}

	public static SESSION_STORAGE(): any {
		return (typeof (sessionStorage) !== undefined) ? sessionStorage : applicationCache;
	}
}
