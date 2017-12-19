export interface ISampleState {
	names: Array<string>;
}

export const sampleInitialState: ISampleState = {
	names: <Array<string>>[]
};

import { Observable } from 'rxjs/Observable';
// selects specific slice from sample state
export function getNames(state$: Observable<ISampleState>) {
	return state$.select(state => state.names);
}
