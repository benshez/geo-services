Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../states/index");
var index_2 = require("../actions/index");
function reducer(state, 
    // could support multiple state actions via union type here
    // ie: NameList.Actions | Other.Actions
    // the seed's example just has one set of actions: NameList.Actions
    action) {
    if (state === void 0) { state = index_1.sampleInitialState; }
    switch (action.type) {
        case index_2.NameList.ActionTypes.INITIALIZED:
            return Object.assign({}, state, {
                names: action.payload
            });
        case index_2.NameList.ActionTypes.NAME_ADDED:
            return Object.assign({}, state, {
                names: state.names.concat([action.payload])
            });
        default:
            return state;
    }
}
exports.reducer = reducer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NhbXBsZS9yZWR1Y2Vycy9zYW1wbGUucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseUNBQW1FO0FBQ25FLDBDQUE0QztBQUU1QyxpQkFDRSxLQUF3QztJQUN4QywyREFBMkQ7SUFDM0QsdUNBQXVDO0lBQ3ZDLG1FQUFtRTtJQUNuRSxNQUF3QjtJQUp4QixzQkFBQSxFQUFBLFFBQXNCLDBCQUFrQjtJQU14QyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQixLQUFLLGdCQUFRLENBQUMsV0FBVyxDQUFDLFdBQVc7WUFDbkMsTUFBTSxDQUFPLE1BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDckMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPO2FBQ3RCLENBQUMsQ0FBQztRQUVMLEtBQUssZ0JBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUNsQyxNQUFNLENBQU8sTUFBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO2dCQUNyQyxLQUFLLEVBQU0sS0FBSyxDQUFDLEtBQUssU0FBRSxNQUFNLENBQUMsT0FBTyxFQUFDO2FBQ3hDLENBQUMsQ0FBQztRQUVMO1lBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0FBQ0gsQ0FBQztBQXJCRCwwQkFxQkMiLCJmaWxlIjoiYXBwL21vZHVsZXMvc2FtcGxlL3JlZHVjZXJzL3NhbXBsZS5yZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNhbXBsZVN0YXRlLCBzYW1wbGVJbml0aWFsU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvaW5kZXgnO1xuaW1wb3J0IHsgTmFtZUxpc3QgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlOiBJU2FtcGxlU3RhdGUgPSBzYW1wbGVJbml0aWFsU3RhdGUsXG4gIC8vIGNvdWxkIHN1cHBvcnQgbXVsdGlwbGUgc3RhdGUgYWN0aW9ucyB2aWEgdW5pb24gdHlwZSBoZXJlXG4gIC8vIGllOiBOYW1lTGlzdC5BY3Rpb25zIHwgT3RoZXIuQWN0aW9uc1xuICAvLyB0aGUgc2VlZCdzIGV4YW1wbGUganVzdCBoYXMgb25lIHNldCBvZiBhY3Rpb25zOiBOYW1lTGlzdC5BY3Rpb25zXG4gIGFjdGlvbjogTmFtZUxpc3QuQWN0aW9uc1xuKTogSVNhbXBsZVN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgTmFtZUxpc3QuQWN0aW9uVHlwZXMuSU5JVElBTElaRUQ6XG4gICAgICByZXR1cm4gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG5hbWVzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfSk7XG5cbiAgICBjYXNlIE5hbWVMaXN0LkFjdGlvblR5cGVzLk5BTUVfQURERUQ6XG4gICAgICByZXR1cm4gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG5hbWVzOiBbLi4uc3RhdGUubmFtZXMsIGFjdGlvbi5wYXlsb2FkXVxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=
