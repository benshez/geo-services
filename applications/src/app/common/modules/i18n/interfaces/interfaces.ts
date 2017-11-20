export interface ILang {
    code: string;
    title: string;
}

export interface I18NActions {
    CHANGE: string;
    LANG_CHANGED: string;
    LANG_UNSUPPORTED: string;
}

export interface I18NState {
    lang: string;
}

export interface IAppState {
    i18n: I18NState;
}

