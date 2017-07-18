Object.defineProperty(exports, "__esModule", { value: true });
require("@ngrx/core/add/operator/select");
/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
var compose_1 = require("@ngrx/core/compose");
/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
var ngrx_store_freeze_1 = require("ngrx-store-freeze");
/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
var store_1 = require("@ngrx/store");
/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
var fromMultilingual = require("../i18n/index");
var fromSample = require("../sample/index");
/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
var reducers = {
    i18n: fromMultilingual.reducer,
    sample: fromSample.reducer
};
// ensure state is frozen as extra level of security when developing
// helps maintain immutability
var developmentReducer = compose_1.compose(ngrx_store_freeze_1.storeFreeze, store_1.combineReducers)(reducers);
// for production, dev has already been cleared so no need
var productionReducer = store_1.combineReducers(reducers);
function AppReducer(state, action) {
    if (String('dev') === 'dev') {
        return developmentReducer(state, action);
    }
    else {
        return productionReducer(state, action);
    }
}
exports.AppReducer = AppReducer;
function getMultilingualState(state$) {
    return state$.select(function (s) { return s.i18n; });
}
exports.getMultilingualState = getMultilingualState;
function getNameListState(state$) {
    return state$.select(function (s) { return s.sample; });
}
exports.getNameListState = getNameListState;
exports.getLang = compose_1.compose(fromMultilingual.getLang, getMultilingualState);
exports.getNames = compose_1.compose(fromSample.getNames, getNameListState);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL25ncngvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBLDBDQUF3QztBQUV4Qzs7Ozs7OztHQU9HO0FBQ0gsOENBQTZDO0FBRTdDOzs7O0dBSUc7QUFDSCx1REFBZ0Q7QUFFaEQ7Ozs7Ozs7R0FPRztBQUNILHFDQUE4QztBQUU5Qzs7Ozs7R0FLRztBQUNILGdEQUFrRDtBQUNsRCw0Q0FBOEM7QUFXOUM7Ozs7OztHQU1HO0FBQ0gsSUFBTSxRQUFRLEdBQUc7SUFDZixJQUFJLEVBQUUsZ0JBQWdCLENBQUMsT0FBTztJQUM5QixNQUFNLEVBQUUsVUFBVSxDQUFDLE9BQU87Q0FDM0IsQ0FBQztBQUVGLG9FQUFvRTtBQUNwRSw4QkFBOEI7QUFDOUIsSUFBTSxrQkFBa0IsR0FBNkIsaUJBQU8sQ0FBQywrQkFBVyxFQUFFLHVCQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyRywwREFBMEQ7QUFDMUQsSUFBTSxpQkFBaUIsR0FBNkIsdUJBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUU5RSxvQkFBMkIsS0FBVSxFQUFFLE1BQVc7SUFDaEQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQztBQUNILENBQUM7QUFORCxnQ0FNQztBQUVELDhCQUFxQyxNQUE2QjtJQUNoRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUZELG9EQUVDO0FBQ0QsMEJBQWlDLE1BQTZCO0lBQzVELE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE1BQU0sRUFBUixDQUFRLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBRkQsNENBRUM7QUFFWSxRQUFBLE9BQU8sR0FBUSxpQkFBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3ZFLFFBQUEsUUFBUSxHQUFRLGlCQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9tb2R1bGVzL25ncngvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWJzXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbi8vIGltcG9ydCB7IGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzL29ic2VydmFibGUvY29tYmluZUxhdGVzdCc7XG5pbXBvcnQgeyBBY3Rpb25SZWR1Y2VyIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0ICdAbmdyeC9jb3JlL2FkZC9vcGVyYXRvci9zZWxlY3QnO1xuXG4vKipcbiAqIFRoZSBjb21wb3NlIGZ1bmN0aW9uIGlzIG9uZSBvZiBvdXIgbW9zdCBoYW5keSB0b29scy4gSW4gYmFzaWMgdGVybXMsIHlvdSBnaXZlXG4gKiBpdCBhbnkgbnVtYmVyIG9mIGZ1bmN0aW9ucyBhbmQgaXQgcmV0dXJucyBhIGZ1bmN0aW9uLiBUaGlzIG5ldyBmdW5jdGlvblxuICogdGFrZXMgYSB2YWx1ZSBhbmQgY2hhaW5zIGl0IHRocm91Z2ggZXZlcnkgY29tcG9zZWQgZnVuY3Rpb24sIHJldHVybmluZ1xuICogdGhlIG91dHB1dC5cbiAqXG4gKiBNb3JlOiBodHRwczovL2RyYm9vbGVhbi5naXRib29rcy5pby9tb3N0bHktYWRlcXVhdGUtZ3VpZGUvY29udGVudC9jaDUuaHRtbFxuICovXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAnQG5ncngvY29yZS9jb21wb3NlJztcblxuLyoqXG4gKiBzdG9yZUZyZWV6ZSBwcmV2ZW50cyBzdGF0ZSBmcm9tIGJlaW5nIG11dGF0ZWQuIFdoZW4gbXV0YXRpb24gb2NjdXJzLCBhblxuICogZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duLiBUaGlzIGlzIHVzZWZ1bCBkdXJpbmcgZGV2ZWxvcG1lbnQgbW9kZSB0b1xuICogZW5zdXJlIHRoYXQgbm9uZSBvZiB0aGUgcmVkdWNlcnMgYWNjaWRlbnRhbGx5IG11dGF0ZXMgdGhlIHN0YXRlLlxuICovXG5pbXBvcnQgeyBzdG9yZUZyZWV6ZSB9IGZyb20gJ25ncngtc3RvcmUtZnJlZXplJztcblxuLyoqXG4gKiBjb21iaW5lUmVkdWNlcnMgaXMgYW5vdGhlciB1c2VmdWwgbWV0YXJlZHVjZXIgdGhhdCB0YWtlcyBhIG1hcCBvZiByZWR1Y2VyXG4gKiBmdW5jdGlvbnMgYW5kIGNyZWF0ZXMgYSBuZXcgcmVkdWNlciB0aGF0IHN0b3JlcyB0aGUgZ2F0aGVycyB0aGUgdmFsdWVzXG4gKiBvZiBlYWNoIHJlZHVjZXIgYW5kIHN0b3JlcyB0aGVtIHVzaW5nIHRoZSByZWR1Y2VyJ3Mga2V5LiBUaGluayBvZiBpdFxuICogYWxtb3N0IGxpa2UgYSBkYXRhYmFzZSwgd2hlcmUgZXZlcnkgcmVkdWNlciBpcyBhIHRhYmxlIGluIHRoZSBkYi5cbiAqXG4gKiBNb3JlOiBodHRwczovL2VnZ2hlYWQuaW8vbGVzc29ucy9qYXZhc2NyaXB0LXJlZHV4LWltcGxlbWVudGluZy1jb21iaW5lcmVkdWNlcnMtZnJvbS1zY3JhdGNoXG4gKi9cbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuLyoqXG4gKiBFdmVyeSByZWR1Y2VyIG1vZHVsZSdzIGRlZmF1bHQgZXhwb3J0IGlzIHRoZSByZWR1Y2VyIGZ1bmN0aW9uIGl0c2VsZi4gSW5cbiAqIGFkZGl0aW9uLCBlYWNoIG1vZHVsZSBzaG91bGQgZXhwb3J0IGEgdHlwZSBvciBpbnRlcmZhY2UgdGhhdCBkZXNjcmliZXNcbiAqIHRoZSBzdGF0ZSBvZiB0aGUgcmVkdWNlciBwbHVzIGFueSBzZWxlY3RvciBmdW5jdGlvbnMuIFRoZSBgKiBhc2BcbiAqIG5vdGF0aW9uIHBhY2thZ2VzIHVwIGFsbCBvZiB0aGUgZXhwb3J0cyBpbnRvIGEgc2luZ2xlIG9iamVjdC5cbiAqL1xuaW1wb3J0ICogYXMgZnJvbU11bHRpbGluZ3VhbCBmcm9tICcuLi9pMThuL2luZGV4JztcbmltcG9ydCAqIGFzIGZyb21TYW1wbGUgZnJvbSAnLi4vc2FtcGxlL2luZGV4JztcblxuLyoqXG4gKiBBcyBtZW50aW9uZWQsIHdlIHRyZWF0IGVhY2ggcmVkdWNlciBsaWtlIGEgdGFibGUgaW4gYSBkYXRhYmFzZS4gVGhpcyBtZWFuc1xuICogb3VyIHRvcCBsZXZlbCBzdGF0ZSBpbnRlcmZhY2UgaXMganVzdCBhIG1hcCBvZiBrZXlzIHRvIGlubmVyIHN0YXRlIHR5cGVzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElBcHBTdGF0ZSB7XG4gIGkxOG46IGZyb21NdWx0aWxpbmd1YWwuSU11bHRpbGluZ3VhbFN0YXRlO1xuICBzYW1wbGU6IGZyb21TYW1wbGUuSVNhbXBsZVN0YXRlO1xufVxuXG4vKipcbiAqIEJlY2F1c2UgbWV0YXJlZHVjZXJzIHRha2UgYSByZWR1Y2VyIGZ1bmN0aW9uIGFuZCByZXR1cm4gYSBuZXcgcmVkdWNlcixcbiAqIHdlIGNhbiB1c2Ugb3VyIGNvbXBvc2UgaGVscGVyIHRvIGNoYWluIHRoZW0gdG9nZXRoZXIuIEhlcmUgd2UgYXJlXG4gKiB1c2luZyBjb21iaW5lUmVkdWNlcnMgdG8gbWFrZSBvdXIgdG9wIGxldmVsIHJlZHVjZXIsIGFuZCB0aGVuXG4gKiB3cmFwcGluZyB0aGF0IGluIHN0b3JlTG9nZ2VyLiBSZW1lbWJlciB0aGF0IGNvbXBvc2UgYXBwbGllc1xuICogdGhlIHJlc3VsdCBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKi9cbmNvbnN0IHJlZHVjZXJzID0ge1xuICBpMThuOiBmcm9tTXVsdGlsaW5ndWFsLnJlZHVjZXIsXG4gIHNhbXBsZTogZnJvbVNhbXBsZS5yZWR1Y2VyXG59O1xuXG4vLyBlbnN1cmUgc3RhdGUgaXMgZnJvemVuIGFzIGV4dHJhIGxldmVsIG9mIHNlY3VyaXR5IHdoZW4gZGV2ZWxvcGluZ1xuLy8gaGVscHMgbWFpbnRhaW4gaW1tdXRhYmlsaXR5XG5jb25zdCBkZXZlbG9wbWVudFJlZHVjZXI6IEFjdGlvblJlZHVjZXI8SUFwcFN0YXRlPiA9IGNvbXBvc2Uoc3RvcmVGcmVlemUsIGNvbWJpbmVSZWR1Y2VycykocmVkdWNlcnMpO1xuLy8gZm9yIHByb2R1Y3Rpb24sIGRldiBoYXMgYWxyZWFkeSBiZWVuIGNsZWFyZWQgc28gbm8gbmVlZFxuY29uc3QgcHJvZHVjdGlvblJlZHVjZXI6IEFjdGlvblJlZHVjZXI8SUFwcFN0YXRlPiA9IGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHBSZWR1Y2VyKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSB7XG4gIGlmIChTdHJpbmcoJzwlPSBCVUlMRF9UWVBFICU+JykgPT09ICdkZXYnKSB7XG4gICAgcmV0dXJuIGRldmVsb3BtZW50UmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcHJvZHVjdGlvblJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE11bHRpbGluZ3VhbFN0YXRlKHN0YXRlJDogT2JzZXJ2YWJsZTxJQXBwU3RhdGU+KTogT2JzZXJ2YWJsZTxmcm9tTXVsdGlsaW5ndWFsLklNdWx0aWxpbmd1YWxTdGF0ZT4ge1xuICByZXR1cm4gc3RhdGUkLnNlbGVjdChzID0+IHMuaTE4bik7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TmFtZUxpc3RTdGF0ZShzdGF0ZSQ6IE9ic2VydmFibGU8SUFwcFN0YXRlPik6IE9ic2VydmFibGU8ZnJvbVNhbXBsZS5JU2FtcGxlU3RhdGU+IHtcbiAgcmV0dXJuIHN0YXRlJC5zZWxlY3QocyA9PiBzLnNhbXBsZSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRMYW5nOiBhbnkgPSBjb21wb3NlKGZyb21NdWx0aWxpbmd1YWwuZ2V0TGFuZywgZ2V0TXVsdGlsaW5ndWFsU3RhdGUpO1xuZXhwb3J0IGNvbnN0IGdldE5hbWVzOiBhbnkgPSBjb21wb3NlKGZyb21TYW1wbGUuZ2V0TmFtZXMsIGdldE5hbWVMaXN0U3RhdGUpO1xuIl19
