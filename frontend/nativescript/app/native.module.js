Object.defineProperty(exports, "__esModule", { value: true });
// nativescript
var router_1 = require("nativescript-angular/router");
var segmented_bar_1 = require("tns-core-modules/ui/segmented-bar");
// angular
var core_1 = require("@angular/core");
// libs
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
// app
var index_1 = require("./app/modules/core/index");
var component_1 = require("./app/components/component");
var routes_1 = require("./app/components/routes");
var routes_2 = require("./mobile/map/routes/mobile/routes");
exports.NS_ROUTES = routes_1.APP_ROUTES.concat(routes_2.NS_MAP_ROUTES, routes_2.NS_LOCATION_ROUTES);
// feature modules
var module_1 = require("./app/modules/core/module");
var index_2 = require("./app/modules/ngrx/index");
var index_3 = require("./app/modules/i18n/index");
var index_4 = require("./app/modules/sample/index");
var components_module_1 = require("./components.module");
// {N} custom app specific
var index_5 = require("./mobile/core/index");
var index_6 = require("./mobile/analytics/index");
/**
 * Config
 * Seed provided configuration options
 */
var index_7 = require("./app/modules/core/index");
var page_1 = require("ui/page");
index_7.Config.PageClass = page_1.Page;
// (required) platform target (allows component decorators to use the right view template)
index_7.Config.PLATFORM_TARGET = index_7.Config.PLATFORMS.MOBILE_NATIVE;
// (optional) log level - defaults to no logging if not set
index_7.Config.DEBUG.LEVEL_4 = true;
var index_8 = require("./app/modules/i18n/index");
// helper for SegmentedBar view bindings in lang-switcher shared component
function segmentViewHelper(languages) {
    var segmentItems = [];
    for (var _i = 0, languages_1 = languages; _i < languages_1.length; _i++) {
        var lang = languages_1[_i];
        // {N} requires items to be SegmentedBarItem class
        var item = new segmented_bar_1.SegmentedBarItem();
        item.title = lang.title;
        item.code = lang.code;
        segmentItems.push(item);
    }
    return segmentItems;
}
exports.segmentViewHelper = segmentViewHelper;
var NativeModule = (function () {
    function NativeModule() {
    }
    return NativeModule;
}());
NativeModule = __decorate([
    core_1.NgModule({
        imports: [
            module_1.CoreModule.forRoot([
                { provide: index_1.WindowService, useClass: index_5.WindowNative },
                { provide: index_1.StorageService, useClass: index_5.StorageNative },
                { provide: index_1.ConsoleService, useFactory: (components_module_1.cons) },
                { provide: index_7.LogTarget, multi: true, deps: [index_1.ConsoleService], useFactory: (components_module_1.consoleLogTarget) }
            ]),
            components_module_1.ComponentsModule,
            router_1.NativeScriptRouterModule.forRoot(exports.NS_ROUTES),
            store_1.StoreModule.provideStore(index_2.AppReducer),
            effects_1.EffectsModule.run(index_3.MultilingualEffects),
            effects_1.EffectsModule.run(index_4.SampleEffects)
        ],
        providers: [
            index_6.NS_ANALYTICS_PROVIDERS,
            { provide: index_1.RouterExtensions, useClass: router_1.RouterExtensions },
            { provide: index_1.AppService, useClass: index_5.NSAppService },
            // i18n
            { provide: index_8.Languages, useValue: index_7.Config.GET_SUPPORTED_LANGUAGES() },
            { provide: index_8.LanguageViewHelper, deps: [index_8.Languages], useFactory: (segmentViewHelper) }
        ],
        declarations: [],
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
            core_1.CUSTOM_ELEMENTS_SCHEMA
        ],
        bootstrap: [component_1.AppComponent]
    })
], NativeModule);
exports.NativeModule = NativeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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dUIsRUFBRSxFQUFFO1lBQ2xFLEVBQUUsT0FBTyxFQUFFLDBCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDLGlCQUFTLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1NBQ3RGO1FBQ0QsWUFBWSxFQUFFLEVBRWI7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7WUFDaEIsNkJBQXNCO1NBQ3pCO1FBQ0QsU0FBUyxFQUFFLENBQUMsd0JBQVksQ0FBQztLQUM1QixDQUFDO0dBQ1csWUFBWSxDQUFJO0FBQWhCLG9DQUFZIiwiZmlsZSI6Im5hdGl2ZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuYXRpdmVzY3JpcHRcbmltcG9ydCB7XG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgIFJvdXRlckV4dGVuc2lvbnMgYXMgVE5TUm91dGVyRXh0ZW5zaW9uc1xufSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2VnbWVudGVkQmFySXRlbSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2VnbWVudGVkLWJhcic7XG5cbi8vIGFuZ3VsYXJcbmltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGxpYnNcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG4vLyBhcHBcbmltcG9ydCB7XG4gICAgV2luZG93U2VydmljZSxcbiAgICBTdG9yYWdlU2VydmljZSxcbiAgICBDb25zb2xlU2VydmljZSxcbiAgICBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIEFwcFNlcnZpY2Vcbn0gZnJvbSAnLi9hcHAvbW9kdWxlcy9jb3JlL2luZGV4JztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmltcG9ydCB7IEFQUF9ST1VURVMgfSBmcm9tICcuL2FwcC9jb21wb25lbnRzL3JvdXRlcyc7XG5pbXBvcnQgeyBOU19MT0NBVElPTl9ST1VURVMsIE5TX01BUF9ST1VURVMgfSBmcm9tICcuL21vYmlsZS9tYXAvcm91dGVzL21vYmlsZS9yb3V0ZXMnO1xuXG5leHBvcnQgY29uc3QgTlNfUk9VVEVTOiBBcnJheTxhbnk+ID0gW1xuICAgIC4uLkFQUF9ST1VURVMsXG4gICAgLi4uTlNfTUFQX1JPVVRFUyxcbiAgICAuLi5OU19MT0NBVElPTl9ST1VURVNcbl07XG5cbi8vIGZlYXR1cmUgbW9kdWxlc1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vYXBwL21vZHVsZXMvY29yZS9tb2R1bGUnO1xuaW1wb3J0IHsgQXBwUmVkdWNlciB9IGZyb20gJy4vYXBwL21vZHVsZXMvbmdyeC9pbmRleCc7XG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxFZmZlY3RzIH0gZnJvbSAnLi9hcHAvbW9kdWxlcy9pMThuL2luZGV4JztcbmltcG9ydCB7IFNhbXBsZUVmZmVjdHMgfSBmcm9tICcuL2FwcC9tb2R1bGVzL3NhbXBsZS9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnRzTW9kdWxlLCBjb25zLCBjb25zb2xlTG9nVGFyZ2V0IH0gZnJvbSAnLi9jb21wb25lbnRzLm1vZHVsZSc7XG5cbi8vIHtOfSBjdXN0b20gYXBwIHNwZWNpZmljXG5pbXBvcnQgeyBXaW5kb3dOYXRpdmUsIFN0b3JhZ2VOYXRpdmUsIE5TQXBwU2VydmljZSB9IGZyb20gJy4vbW9iaWxlL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgTlNfQU5BTFlUSUNTX1BST1ZJREVSUyB9IGZyb20gJy4vbW9iaWxlL2FuYWx5dGljcy9pbmRleCc7XG5cbi8qKlxuICogQ29uZmlnXG4gKiBTZWVkIHByb3ZpZGVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICovXG5pbXBvcnQgeyBDb25maWcsIExvZ1RhcmdldCB9IGZyb20gJy4vYXBwL21vZHVsZXMvY29yZS9pbmRleCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5Db25maWcuUGFnZUNsYXNzID0gUGFnZTtcblxuLy8gKHJlcXVpcmVkKSBwbGF0Zm9ybSB0YXJnZXQgKGFsbG93cyBjb21wb25lbnQgZGVjb3JhdG9ycyB0byB1c2UgdGhlIHJpZ2h0IHZpZXcgdGVtcGxhdGUpXG5Db25maWcuUExBVEZPUk1fVEFSR0VUID0gQ29uZmlnLlBMQVRGT1JNUy5NT0JJTEVfTkFUSVZFO1xuXG4vLyAob3B0aW9uYWwpIGxvZyBsZXZlbCAtIGRlZmF1bHRzIHRvIG5vIGxvZ2dpbmcgaWYgbm90IHNldFxuQ29uZmlnLkRFQlVHLkxFVkVMXzQgPSB0cnVlO1xuXG5pbXBvcnQgeyBMYW5ndWFnZXMsIExhbmd1YWdlVmlld0hlbHBlciB9IGZyb20gJy4vYXBwL21vZHVsZXMvaTE4bi9pbmRleCc7XG5cbi8vIGhlbHBlciBmb3IgU2VnbWVudGVkQmFyIHZpZXcgYmluZGluZ3MgaW4gbGFuZy1zd2l0Y2hlciBzaGFyZWQgY29tcG9uZW50XG5leHBvcnQgZnVuY3Rpb24gc2VnbWVudFZpZXdIZWxwZXIobGFuZ3VhZ2VzKSB7XG4gICAgbGV0IHNlZ21lbnRJdGVtcyA9IFtdO1xuICAgIGZvciAobGV0IGxhbmcgb2YgbGFuZ3VhZ2VzKSB7XG4gICAgICAgIC8vIHtOfSByZXF1aXJlcyBpdGVtcyB0byBiZSBTZWdtZW50ZWRCYXJJdGVtIGNsYXNzXG4gICAgICAgIGxldCBpdGVtID0gbmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICAgICAgaXRlbS50aXRsZSA9IGxhbmcudGl0bGU7XG4gICAgICAgICg8YW55Pml0ZW0pLmNvZGUgPSBsYW5nLmNvZGU7XG4gICAgICAgIHNlZ21lbnRJdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gc2VnbWVudEl0ZW1zO1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29yZU1vZHVsZS5mb3JSb290KFtcbiAgICAgICAgICAgIHsgcHJvdmlkZTogV2luZG93U2VydmljZSwgdXNlQ2xhc3M6IFdpbmRvd05hdGl2ZSB9LFxuICAgICAgICAgICAgeyBwcm92aWRlOiBTdG9yYWdlU2VydmljZSwgdXNlQ2xhc3M6IFN0b3JhZ2VOYXRpdmUgfSxcbiAgICAgICAgICAgIHsgcHJvdmlkZTogQ29uc29sZVNlcnZpY2UsIHVzZUZhY3Rvcnk6IChjb25zKSB9LFxuICAgICAgICAgICAgeyBwcm92aWRlOiBMb2dUYXJnZXQsIG11bHRpOiB0cnVlLCBkZXBzOiBbQ29uc29sZVNlcnZpY2VdLCB1c2VGYWN0b3J5OiAoY29uc29sZUxvZ1RhcmdldCkgfVxuICAgICAgICBdKSxcbiAgICAgICAgQ29tcG9uZW50c01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoPGFueT5OU19ST1VURVMpLFxuICAgICAgICBTdG9yZU1vZHVsZS5wcm92aWRlU3RvcmUoQXBwUmVkdWNlciksXG4gICAgICAgIEVmZmVjdHNNb2R1bGUucnVuKE11bHRpbGluZ3VhbEVmZmVjdHMpLFxuICAgICAgICBFZmZlY3RzTW9kdWxlLnJ1bihTYW1wbGVFZmZlY3RzKVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE5TX0FOQUxZVElDU19QUk9WSURFUlMsXG4gICAgICAgIHsgcHJvdmlkZTogUm91dGVyRXh0ZW5zaW9ucywgdXNlQ2xhc3M6IFROU1JvdXRlckV4dGVuc2lvbnMgfSxcbiAgICAgICAgeyBwcm92aWRlOiBBcHBTZXJ2aWNlLCB1c2VDbGFzczogTlNBcHBTZXJ2aWNlIH0sXG4gICAgICAgIC8vIGkxOG5cbiAgICAgICAgeyBwcm92aWRlOiBMYW5ndWFnZXMsIHVzZVZhbHVlOiBDb25maWcuR0VUX1NVUFBPUlRFRF9MQU5HVUFHRVMoKSB9LFxuICAgICAgICB7IHByb3ZpZGU6IExhbmd1YWdlVmlld0hlbHBlciwgZGVwczogW0xhbmd1YWdlc10sIHVzZUZhY3Rvcnk6IChzZWdtZW50Vmlld0hlbHBlcikgfVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BLFxuICAgICAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXG4gICAgXSxcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5hdGl2ZU1vZHVsZSB7IH1cbiJdfQ==
