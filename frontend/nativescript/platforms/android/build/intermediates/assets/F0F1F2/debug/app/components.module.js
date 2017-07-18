Object.defineProperty(exports, "__esModule", { value: true });
// nativescript
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var http_2 = require("@angular/http");
// angular
var core_1 = require("@angular/core");
// libs
var core_2 = require("@ngx-translate/core");
// app
var component_1 = require("./app/components/component");
var component_2 = require("./app/components/about/component");
var component_3 = require("./app/components/home/component");
var index_1 = require("./mobile/map/index");
// feature modules
var module_1 = require("./app/modules/core/module");
var module_2 = require("./app/modules/analytics/module");
var multilingual_module_1 = require("./app/modules/i18n/multilingual.module");
var sample_module_1 = require("./app/modules/sample/sample.module");
var index_2 = require("./app/modules/core/index");
// intermediate component module
// helps encapsulate custom native modules in with the components
// note: couple ways this could be done, just one option presented here...
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    core_1.NgModule({
        imports: [
            module_2.AnalyticsModule,
            module_1.CoreModule,
            multilingual_module_1.MultilingualModule.forRoot([{
                    provide: core_2.TranslateLoader,
                    deps: [http_2.Http],
                    useFactory: (multilingual_module_1.translateLoaderFactory)
                }]),
            sample_module_1.SampleModule,
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
        ],
        declarations: [
            component_1.AppComponent,
            component_3.HomeComponent,
            component_2.AboutComponent,
            index_1.NS_MAP_COMPONENTS
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
            core_1.CUSTOM_ELEMENTS_SCHEMA
        ],
        exports: [
            multilingual_module_1.MultilingualModule,
            component_1.AppComponent,
            module_2.AnalyticsModule,
            module_1.CoreModule,
            sample_module_1.SampleModule,
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
        ]
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;
// For AoT compilation to work:
function cons() {
    return console;
}
exports.cons = cons;
function consoleLogTarget(service) {
    return new index_2.ConsoleTarget(service, { minLogLevel: index_2.LogLevel.Debug });
}
exports.consoleLogTarget = consoleLogTarget;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxlQUFlO0FBQ2YsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxrREFBbUU7QUFDbkUsc0RBQXVFO0FBQ3ZFLHNDQUFxQztBQUVyQyxVQUFVO0FBQ1Ysc0NBQW1GO0FBRW5GLE9BQU87QUFDUCw0Q0FBc0Q7QUFHdEQsTUFBTTtBQUNOLHdEQUEwRDtBQUMxRCw4REFBa0U7QUFDbEUsNkRBQWdFO0FBQ2hFLDRDQUF1RDtBQUV2RCxrQkFBa0I7QUFDbEIsb0RBQXVEO0FBQ3ZELHlEQUFpRTtBQUNqRSw4RUFBb0c7QUFDcEcsb0VBQWtFO0FBQ2xFLGtEQUFtRjtBQUVuRixnQ0FBZ0M7QUFDaEMsaUVBQWlFO0FBQ2pFLDBFQUEwRTtBQXNDMUUsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBZ0MsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBaEMsQUFBaUMsSUFBQTtBQUFwQixnQkFBZ0I7SUFyQzVCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLHdCQUFlO1lBQ2YsbUJBQVU7WUFDVix3Q0FBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDeEIsT0FBTyxFQUFFLHNCQUFlO29CQUN4QixJQUFJLEVBQUUsQ0FBQyxXQUFJLENBQUM7b0JBQ1osVUFBVSxFQUFFLENBQUMsNENBQXNCLENBQUM7aUJBQ3ZDLENBQUMsQ0FBQztZQUNILDRCQUFZO1lBQ1osd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw2QkFBc0I7WUFDdEIsaUNBQXdCO1NBQzNCO1FBQ0QsWUFBWSxFQUFFO1lBQ1Ysd0JBQVk7WUFDWix5QkFBYTtZQUNiLDBCQUFjO1lBQ2QseUJBQWlCO1NBQ3BCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1lBQ2hCLDZCQUFzQjtTQUN6QjtRQUNELE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQix3QkFBWTtZQUNaLHdCQUFlO1lBQ2YsbUJBQVU7WUFDViw0QkFBWTtZQUNaLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsNkJBQXNCO1lBQ3RCLGlDQUF3QjtTQUMzQjtLQUNKLENBQUM7R0FDVyxnQkFBZ0IsQ0FBSTtBQUFwQiw0Q0FBZ0I7QUFFN0IsK0JBQStCO0FBQy9CO0lBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBRkQsb0JBRUM7QUFFRCwwQkFBaUMsT0FBdUI7SUFDcEQsTUFBTSxDQUFDLElBQUkscUJBQWEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsZ0JBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZFLENBQUM7QUFGRCw0Q0FFQyIsImZpbGUiOiJjb21wb25lbnRzLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG5hdGl2ZXNjcmlwdFxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbi8vIGFuZ3VsYXJcbmltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGxpYnNcbmltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlSHR0cExvYWRlciB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2h0dHAtbG9hZGVyJztcblxuLy8gYXBwXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvYWJvdXQvY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2hvbWUvY29tcG9uZW50JztcbmltcG9ydCB7IE5TX01BUF9DT01QT05FTlRTIH0gZnJvbSAnLi9tb2JpbGUvbWFwL2luZGV4JztcblxuLy8gZmVhdHVyZSBtb2R1bGVzXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9hcHAvbW9kdWxlcy9jb3JlL21vZHVsZSc7XG5pbXBvcnQgeyBBbmFseXRpY3NNb2R1bGUgfSBmcm9tICcuL2FwcC9tb2R1bGVzL2FuYWx5dGljcy9tb2R1bGUnO1xuaW1wb3J0IHsgTXVsdGlsaW5ndWFsTW9kdWxlLCB0cmFuc2xhdGVMb2FkZXJGYWN0b3J5IH0gZnJvbSAnLi9hcHAvbW9kdWxlcy9pMThuL211bHRpbGluZ3VhbC5tb2R1bGUnO1xuaW1wb3J0IHsgU2FtcGxlTW9kdWxlIH0gZnJvbSAnLi9hcHAvbW9kdWxlcy9zYW1wbGUvc2FtcGxlLm1vZHVsZSc7XG5pbXBvcnQgeyBDb25zb2xlU2VydmljZSwgQ29uc29sZVRhcmdldCwgTG9nTGV2ZWwgfSBmcm9tICcuL2FwcC9tb2R1bGVzL2NvcmUvaW5kZXgnO1xuXG4vLyBpbnRlcm1lZGlhdGUgY29tcG9uZW50IG1vZHVsZVxuLy8gaGVscHMgZW5jYXBzdWxhdGUgY3VzdG9tIG5hdGl2ZSBtb2R1bGVzIGluIHdpdGggdGhlIGNvbXBvbmVudHNcbi8vIG5vdGU6IGNvdXBsZSB3YXlzIHRoaXMgY291bGQgYmUgZG9uZSwganVzdCBvbmUgb3B0aW9uIHByZXNlbnRlZCBoZXJlLi4uXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQW5hbHl0aWNzTW9kdWxlLFxuICAgICAgICBDb3JlTW9kdWxlLFxuICAgICAgICBNdWx0aWxpbmd1YWxNb2R1bGUuZm9yUm9vdChbe1xuICAgICAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgICAgICAgZGVwczogW0h0dHBdLFxuICAgICAgICAgICAgdXNlRmFjdG9yeTogKHRyYW5zbGF0ZUxvYWRlckZhY3RvcnkpXG4gICAgICAgIH1dKSxcbiAgICAgICAgU2FtcGxlTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBBYm91dENvbXBvbmVudCxcbiAgICAgICAgTlNfTUFQX0NPTVBPTkVOVFNcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQSxcbiAgICAgICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBNdWx0aWxpbmd1YWxNb2R1bGUsXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgQW5hbHl0aWNzTW9kdWxlLFxuICAgICAgICBDb3JlTW9kdWxlLFxuICAgICAgICBTYW1wbGVNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNNb2R1bGUgeyB9XG5cbi8vIEZvciBBb1QgY29tcGlsYXRpb24gdG8gd29yazpcbmV4cG9ydCBmdW5jdGlvbiBjb25zKCkge1xuICAgIHJldHVybiBjb25zb2xlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc29sZUxvZ1RhcmdldChzZXJ2aWNlOiBDb25zb2xlU2VydmljZSkge1xuICAgIHJldHVybiBuZXcgQ29uc29sZVRhcmdldChzZXJ2aWNlLCB7IG1pbkxvZ0xldmVsOiBMb2dMZXZlbC5EZWJ1ZyB9KTtcbn1cbiJdfQ==
