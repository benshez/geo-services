Object.defineProperty(exports, "__esModule", { value: true });
// module
var multilingual_state_1 = require("../states/multilingual.state");
var multilingual_action_1 = require("../actions/multilingual.action");
function reducer(state, action) {
    if (state === void 0) { state = multilingual_state_1.initialState; }
    switch (action.type) {
        case multilingual_action_1.ActionTypes.LANG_CHANGED:
            if (state.lang !== action.payload)
                return Object.assign({}, state, {
                    lang: action.payload
                });
            return state;
        default:
            return state;
    }
}
exports.reducer = reducer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vcmVkdWNlcnMvbXVsdGlsaW5ndWFsLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVM7QUFDVCxtRUFBZ0Y7QUFDaEYsc0VBQXNFO0FBRXRFLGlCQUNJLEtBQXdDLEVBQ3hDLE1BQWU7SUFEZixzQkFBQSxFQUFBLFFBQTRCLGlDQUFZO0lBRzFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssaUNBQVcsQ0FBQyxZQUFZO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDaEMsTUFBTSxDQUFPLE1BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtvQkFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPO2lCQUNyQixDQUFDLENBQUM7WUFFUCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2Y7WUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDO0FBZkQsMEJBZUMiLCJmaWxlIjoiYXBwL21vZHVsZXMvaTE4bi9yZWR1Y2Vycy9tdWx0aWxpbmd1YWwucmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1vZHVsZVxuaW1wb3J0IHsgSU11bHRpbGluZ3VhbFN0YXRlLCBpbml0aWFsU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvbXVsdGlsaW5ndWFsLnN0YXRlJztcbmltcG9ydCB7IEFjdGlvbnMsIEFjdGlvblR5cGVzIH0gZnJvbSAnLi4vYWN0aW9ucy9tdWx0aWxpbmd1YWwuYWN0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gICAgc3RhdGU6IElNdWx0aWxpbmd1YWxTdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgICBhY3Rpb246IEFjdGlvbnNcbik6IElNdWx0aWxpbmd1YWxTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFjdGlvblR5cGVzLkxBTkdfQ0hBTkdFRDpcbiAgICAgIGlmIChzdGF0ZS5sYW5nICE9PSBhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgcmV0dXJuICg8YW55Pk9iamVjdCkuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgbGFuZzogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==
