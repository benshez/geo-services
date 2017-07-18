Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var testing_1 = require("@angular/http/testing");
var providers = [
    http_1.BaseRequestOptions,
    testing_1.MockBackend,
    { provide: http_1.Http,
        useFactory: function (backend, defaultOptions) {
            return new http_1.Http(backend, defaultOptions);
        },
        deps: [testing_1.MockBackend, http_1.BaseRequestOptions]
    }
];
/*
* For instances where you need the injector
* @returns `ReflectiveInjector`
*/
function GET_HTTP_PROVIDERS_INJECTOR(additionalProviders) {
    if (additionalProviders) {
        providers = providers.concat(additionalProviders);
    }
    return core_1.ReflectiveInjector.resolveAndCreate(providers);
}
exports.GET_HTTP_PROVIDERS_INJECTOR = GET_HTTP_PROVIDERS_INJECTOR;
/*
* For testing http services
* @returns `Array<any>`
*/
function TEST_HTTP_PROVIDERS() {
    return providers;
}
exports.TEST_HTTP_PROVIDERS = TEST_HTTP_PROVIDERS;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvdGVzdGluZy9wcm92aWRlcnMvaHR0cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHNDQUFtRDtBQUNuRCxzQ0FBNEU7QUFDNUUsaURBQW9EO0FBRXBELElBQUksU0FBUyxHQUFlO0lBQzFCLHlCQUFrQjtJQUNsQixxQkFBVztJQUNYLEVBQUUsT0FBTyxFQUFFLFdBQUk7UUFDYixVQUFVLEVBQUUsVUFBVSxPQUEwQixFQUFFLGNBQWtDO1lBQ2xGLE1BQU0sQ0FBQyxJQUFJLFdBQUksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUNELElBQUksRUFBRSxDQUFDLHFCQUFXLEVBQUUseUJBQWtCLENBQUM7S0FDeEM7Q0FDRixDQUFDO0FBRUY7OztFQUdFO0FBQ0YscUNBQTRDLG1CQUFnQztJQUUxRSxFQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFDeEIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsTUFBTSxDQUFDLHlCQUFrQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFQRCxrRUFPQztBQUVEOzs7RUFHRTtBQUNGO0lBQ0UsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBRkQsa0RBRUMiLCJmaWxlIjoiYXBwL21vZHVsZXMvY29yZS90ZXN0aW5nL3Byb3ZpZGVycy9odHRwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgUmVmbGVjdGl2ZUluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlUmVxdWVzdE9wdGlvbnMsIENvbm5lY3Rpb25CYWNrZW5kLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBNb2NrQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAvdGVzdGluZyc7XG5cbmxldCBwcm92aWRlcnM6IEFycmF5PGFueT4gPSBbXG4gIEJhc2VSZXF1ZXN0T3B0aW9ucyxcbiAgTW9ja0JhY2tlbmQsXG4gIHsgcHJvdmlkZTogSHR0cCxcbiAgICB1c2VGYWN0b3J5OiBmdW5jdGlvbiAoYmFja2VuZDogQ29ubmVjdGlvbkJhY2tlbmQsIGRlZmF1bHRPcHRpb25zOiBCYXNlUmVxdWVzdE9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBuZXcgSHR0cChiYWNrZW5kLCBkZWZhdWx0T3B0aW9ucyk7XG4gICAgfSxcbiAgICBkZXBzOiBbTW9ja0JhY2tlbmQsIEJhc2VSZXF1ZXN0T3B0aW9uc11cbiAgfVxuXTtcblxuLypcbiogRm9yIGluc3RhbmNlcyB3aGVyZSB5b3UgbmVlZCB0aGUgaW5qZWN0b3JcbiogQHJldHVybnMgYFJlZmxlY3RpdmVJbmplY3RvcmBcbiovXG5leHBvcnQgZnVuY3Rpb24gR0VUX0hUVFBfUFJPVklERVJTX0lOSkVDVE9SKGFkZGl0aW9uYWxQcm92aWRlcnM/OiBBcnJheTxhbnk+KTogUmVmbGVjdGl2ZUluamVjdG9yIHtcblxuICBpZiAoYWRkaXRpb25hbFByb3ZpZGVycykge1xuICAgIHByb3ZpZGVycyA9IHByb3ZpZGVycy5jb25jYXQoYWRkaXRpb25hbFByb3ZpZGVycyk7XG4gIH1cblxuICByZXR1cm4gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUocHJvdmlkZXJzKTtcbn1cblxuLypcbiogRm9yIHRlc3RpbmcgaHR0cCBzZXJ2aWNlc1xuKiBAcmV0dXJucyBgQXJyYXk8YW55PmBcbiovXG5leHBvcnQgZnVuY3Rpb24gVEVTVF9IVFRQX1BST1ZJREVSUygpOiBBcnJheTxhbnk+IHtcbiAgcmV0dXJuIHByb3ZpZGVycztcbn1cblxuXG5cbiJdfQ==