import {
  Injectable,
  InjectionToken
} from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import {
  Analytics,
  AnalyticsService
} from '../../analytics/index';
import { ILang } from '../interfaces/index';
import { WindowService } from '../../core/services/window/window.service';
import { IAppState } from '../interfaces/index';
import { CATEGORY } from '../common/index';
import { I18NState } from '../interfaces/index';
import { initialState } from '../states/index';
import { ChangeAction } from '../actions/index';

export const Languages: InjectionToken<Array<ILang>> = new InjectionToken('Languages');
export const LanguageViewHelper: InjectionToken<Array<any>> = new InjectionToken('LanguageViewHelper');
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

    let userLang = this.win.navigator.language.split('-')[0];

    this.store
      .select(s => s.i18n)
      .subscribe((state: I18NState) => {
        this.translate.use(state.lang);
      });

    this.store.dispatch(new ChangeAction(userLang));
  }
}
