Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var multilingual_module_1 = require("../i18n/multilingual.module");
var index_1 = require("./index");
exports.WEB_MAP_IMPORTS = [
    common_1.CommonModule,
    http_1.HttpModule,
    forms_1.FormsModule,
    forms_1.ReactiveFormsModule,
    router_1.RouterModule,
    multilingual_module_1.MultilingualModule
];
var WebMapModule = (function () {
    function WebMapModule() {
    }
    return WebMapModule;
}());
WebMapModule = __decorate([
    core_1.NgModule({
        imports: exports.WEB_MAP_IMPORTS.slice(),
        declarations: index_1.WEB_MAP_COMPONENTS.slice(),
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
            core_1.CUSTOM_ELEMENTS_SCHEMA
        ],
        exports: exports.WEB_MAP_IMPORTS.concat(index_1.WEB_MAP_COMPONENTS),
        providers: index_1.WEB_MAP_PROVIDERS.slice()
    })
], WebMapModule);
exports.WebMapModule = WebMapModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL21hcC9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixzQ0FBNEg7QUFDNUgsMENBQStDO0FBQy9DLHNDQUEyQztBQUMzQyx3Q0FBa0U7QUFDbEUsMENBQStDO0FBRy9DLG1FQUFpRTtBQUNqRSxpQ0FBZ0U7QUFFbkQsUUFBQSxlQUFlLEdBQVU7SUFDbEMscUJBQVk7SUFDWixpQkFBVTtJQUNWLG1CQUFXO0lBQ1gsMkJBQW1CO0lBQ25CLHFCQUFZO0lBQ1osd0NBQWtCO0NBQ3JCLENBQUM7QUFxQkYsSUFBYSxZQUFZO0lBQXpCO0lBQTRCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQTVCLEFBQTZCLElBQUE7QUFBaEIsWUFBWTtJQW5CeEIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUNBLHVCQUFlLFFBQ3JCO1FBQ0QsWUFBWSxFQUNMLDBCQUFrQixRQUN4QjtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtZQUNoQiw2QkFBc0I7U0FDekI7UUFDRCxPQUFPLEVBQ0EsdUJBQWUsUUFDZiwwQkFBa0IsQ0FDeEI7UUFDRCxTQUFTLEVBQ0YseUJBQWlCLFFBQ3ZCO0tBQ0osQ0FBQztHQUNXLFlBQVksQ0FBSTtBQUFoQixvQ0FBWSIsImZpbGUiOiJhcHAvbW9kdWxlcy9tYXAvbW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgT3B0aW9uYWwsIFNraXBTZWxmLCBOT19FUlJPUlNfU0NIRU1BLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xyXG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxNb2R1bGUgfSBmcm9tICcuLi9pMThuL211bHRpbGluZ3VhbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBXRUJfTUFQX1BST1ZJREVSUywgV0VCX01BUF9DT01QT05FTlRTIH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgY29uc3QgV0VCX01BUF9JTVBPUlRTOiBhbnlbXSA9IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBNdWx0aWxpbmd1YWxNb2R1bGVcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIC4uLldFQl9NQVBfSU1QT1JUU1xyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIC4uLldFQl9NQVBfQ09NUE9ORU5UU1xyXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUEsXG4gICAgICAgIENVU1RPTV9FTEVNRU5UU19TQ0hFTUFcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgLi4uV0VCX01BUF9JTVBPUlRTLFxuICAgICAgICAuLi5XRUJfTUFQX0NPTVBPTkVOVFNcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIC4uLldFQl9NQVBfUFJPVklERVJTXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXZWJNYXBNb2R1bGUgeyB9XHJcbiJdfQ==
