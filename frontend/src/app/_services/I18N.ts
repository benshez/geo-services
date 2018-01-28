import { Injectable, InjectionToken } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ILang, IAppState, I18NState } from '../_interfaces';
import { Analytics, AnalyticsService } from '../_services/Analytics';

import { WindowService } from '../../core/_services';
import { CATEGORY } from '../_common';
import { initialState } from '../_states';
import { ChangeAction } from '../_actions';

export const Languages: InjectionToken<Array<ILang>> = new InjectionToken(
    'Languages'
);
export const LanguageViewHelper: InjectionToken<
    Array<any>
> = new InjectionToken('LanguageViewHelper');
export const LanguageProviders = [
    { provide: Languages, useValue: [] },
    { provide: LanguageViewHelper, useValue: null }
];

@Injectable()
export class I18NService extends Analytics {
    constructor(
        public analytics: AnalyticsService,
        private translate: TranslateService,
        private win: WindowService,
        private store: Store<IAppState>
    ) {
        super(analytics);

        this.category = CATEGORY;

        translate.setDefaultLang(initialState.lang);

        // navigator.languages
        // ? navigator.languages[0]
        //     : (navigator.language || navigator.userLanguage)

        const userLang = this.win.navigator.language
            ? this.win.navigator.language.split('-')[0]
            : 'en';

        this.store.select(s => s.i18n).subscribe((state: I18NState) => {
            this.translate.use(state.lang);
        });

        this.store.dispatch(new ChangeAction(userLang));
    }
}
