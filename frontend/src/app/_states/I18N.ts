import { Observable } from 'rxjs/Observable';
import { I18NState } from '../_interfaces';

export const initialState: I18NState = {
    lang: 'en'
};

export function getLang(state$: Observable<I18NState>) {
    return state$.lift(state => state.lang);
}
