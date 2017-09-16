import { Observable } from 'rxjs/Observable';
import { KeyValueDictionary, KeyValueArray } from '../../core/collections/index';

// selects specific slice from sample state
export function getTypeAheadListState(state$: Observable<KeyValueDictionary>) {
    return state$.select(state => state.toArray());
}

export * from '../../core/collections/index';
