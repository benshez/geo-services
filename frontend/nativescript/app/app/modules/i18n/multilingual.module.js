Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// libs
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
// module
var index_1 = require("../core/index");
var index_2 = require("./components/index");
var index_3 = require("./services/index");
// for AoT compilation
function translateLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, (index_1.Config.IS_MOBILE_NATIVE() ? '/' : '') + "assets/i18n/", '.json');
}
exports.translateLoaderFactory = translateLoaderFactory;
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var MultilingualModule = MultilingualModule_1 = (function () {
    function MultilingualModule(parentModule) {
        if (parentModule) {
            throw new Error('MultilingualModule already loaded; Import in root module only.');
        }
    }
    // optional usage
    // ideally we could use this to override TranslateModule, but it requires the static above at moment
    MultilingualModule.forRoot = function (configuredProviders) {
        return {
            ngModule: MultilingualModule_1,
            providers: configuredProviders
        };
    };
    return MultilingualModule;
}());
MultilingualModule = MultilingualModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            core_2.TranslateModule.forRoot([{
                    provide: core_2.TranslateLoader,
                    deps: [http_1.Http],
                    useFactory: (translateLoaderFactory)
                }]),
        ],
        declarations: index_2.MULTILANG_COMPONENTS.slice(),
        providers: index_3.MULTILANG_PROVIDERS.slice(),
        exports: index_2.MULTILANG_COMPONENTS.concat([
            core_2.TranslateModule
        ]),
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
            core_1.CUSTOM_ELEMENTS_SCHEMA
        ]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [MultilingualModule])
], MultilingualModule);
exports.MultilingualModule = MultilingualModule;
var MultilingualModule_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vbXVsdGlsaW5ndWFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHNDQUE0SDtBQUM1SCwwQ0FBK0M7QUFDL0Msd0NBQTZDO0FBQzdDLHNDQUFpRDtBQUVqRCxPQUFPO0FBQ1AsNENBQXVFO0FBQ3ZFLDBEQUFpRTtBQUVqRSxTQUFTO0FBQ1QsdUNBQXVDO0FBQ3ZDLDRDQUEwRDtBQUMxRCwwQ0FBdUQ7QUFFdkQsc0JBQXNCO0FBQ3RCLGdDQUF1QyxJQUFVO0lBQzdDLE1BQU0sQ0FBQyxJQUFJLGlDQUFtQixDQUFDLElBQUksRUFBRSxDQUFHLGNBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLGtCQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekcsQ0FBQztBQUZELHdEQUVDO0FBRUQ7O0dBRUc7QUE0QkgsSUFBYSxrQkFBa0I7SUFXM0IsNEJBQXFDLFlBQWdDO1FBQ2pFLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7UUFDdEYsQ0FBQztJQUNMLENBQUM7SUFiRCxpQkFBaUI7SUFDakIsb0dBQW9HO0lBQzdGLDBCQUFPLEdBQWQsVUFBZSxtQkFBK0I7UUFDMUMsTUFBTSxDQUFDO1lBQ0gsUUFBUSxFQUFFLG9CQUFrQjtZQUM1QixTQUFTLEVBQUUsbUJBQW1CO1NBQ2pDLENBQUM7SUFDTixDQUFDO0lBT0wseUJBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLGtCQUFrQjtJQTFCOUIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wscUJBQVk7WUFDWixpQkFBVTtZQUNWLG1CQUFXO1lBQ1gsc0JBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDckIsT0FBTyxFQUFFLHNCQUFlO29CQUN4QixJQUFJLEVBQUUsQ0FBQyxXQUFJLENBQUM7b0JBQ1osVUFBVSxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ3ZDLENBQUMsQ0FBQztTQUNOO1FBQ0QsWUFBWSxFQUNMLDRCQUFvQixRQUMxQjtRQUNELFNBQVMsRUFDRiwyQkFBbUIsUUFDekI7UUFDRCxPQUFPLEVBQ0EsNEJBQW9CO1lBQ3ZCLHNCQUFlO1VBQ2xCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1lBQ2hCLDZCQUFzQjtTQUN6QjtLQUNKLENBQUM7SUFZZ0IsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7cUNBQWUsa0JBQWtCO0dBWDVELGtCQUFrQixDQWdCOUI7QUFoQlksZ0RBQWtCIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2kxOG4vbXVsdGlsaW5ndWFsLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBPcHRpb25hbCwgU2tpcFNlbGYsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBNb2R1bGUsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuLy8gbGlic1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZUh0dHBMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlcic7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XG5pbXBvcnQgeyBNVUxUSUxBTkdfQ09NUE9ORU5UUyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBNVUxUSUxBTkdfUFJPVklERVJTIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5cbi8vIGZvciBBb1QgY29tcGlsYXRpb25cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVMb2FkZXJGYWN0b3J5KGh0dHA6IEh0dHApIHtcbiAgICByZXR1cm4gbmV3IFRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cCwgYCR7Q29uZmlnLklTX01PQklMRV9OQVRJVkUoKSA/ICcvJyA6ICcnfWFzc2V0cy9pMThuL2AsICcuanNvbicpO1xufVxuXG4vKipcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxuICovXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEh0dHBNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdChbe1xuICAgICAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgICAgICAgZGVwczogW0h0dHBdLFxuICAgICAgICAgICAgdXNlRmFjdG9yeTogKHRyYW5zbGF0ZUxvYWRlckZhY3RvcnkpXG4gICAgICAgIH1dKSxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICAuLi5NVUxUSUxBTkdfQ09NUE9ORU5UU1xuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLk1VTFRJTEFOR19QUk9WSURFUlMsXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIC4uLk1VTFRJTEFOR19DT01QT05FTlRTLFxuICAgICAgICBUcmFuc2xhdGVNb2R1bGVcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQSxcbiAgICAgICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlsaW5ndWFsTW9kdWxlIHtcblxuICAgIC8vIG9wdGlvbmFsIHVzYWdlXG4gICAgLy8gaWRlYWxseSB3ZSBjb3VsZCB1c2UgdGhpcyB0byBvdmVycmlkZSBUcmFuc2xhdGVNb2R1bGUsIGJ1dCBpdCByZXF1aXJlcyB0aGUgc3RhdGljIGFib3ZlIGF0IG1vbWVudFxuICAgIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyZWRQcm92aWRlcnM6IEFycmF5PGFueT4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBNdWx0aWxpbmd1YWxNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IGNvbmZpZ3VyZWRQcm92aWRlcnNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBNdWx0aWxpbmd1YWxNb2R1bGUpIHtcbiAgICAgICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdWx0aWxpbmd1YWxNb2R1bGUgYWxyZWFkeSBsb2FkZWQ7IEltcG9ydCBpbiByb290IG1vZHVsZSBvbmx5LicpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
