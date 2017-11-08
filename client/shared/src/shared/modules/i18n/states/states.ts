import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { I18NState, IAppState } from '../interfaces/index';

export const initialState: I18NState = {
  lang: 'en'
};

export function getLang(state$: Observable<IAppState>) {
  return new LanguageComponent(state$);
}

class LanguageComponent {
  store$: Observable<I18NState>;

  constructor(private store: Store<I18NState>) {
    this.store$ = this.store.select(state => state.lang);
  }
}
