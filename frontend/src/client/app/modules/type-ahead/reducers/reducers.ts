import { ITypeAheadState, typeAheadInitialState } from '../states/index';
import { TypeAheadList } from '../actions/index';

export function reducer(
    state: ITypeAheadState = typeAheadInitialState,
    // could support multiple state actions via union type here
    // ie: NameList.Actions | Other.Actions
    // the seed's example just has one set of actions: NameList.Actions
    action: TypeAheadList.Actions
): ITypeAheadState {
    switch (action.type) {
        case TypeAheadList.ActionTypes.INITIALIZED:
            return (<any>Object).assign({}, state, {
                names: action.payload
            });

        case TypeAheadList.ActionTypes.ITEM_ADDED:
            return (<any>Object).assign({}, state, {
                names: [...state.names, action.payload]
            });

        default:
            return state;
    }
}
