Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
// modules
var index_1 = require("../i18n/index");
var index_2 = require("./index");
var SHARED_MODULES = [
    common_1.CommonModule,
    http_1.HttpModule,
    forms_1.FormsModule,
    forms_1.ReactiveFormsModule,
    router_1.RouterModule,
    index_1.MultilingualModule
];
/**
 * SharedModule
 * Only for shared components, directives and pipes
 * Do not specify providers here
 * https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#what-kinds-of-modules-should-i-have-and-how-should-i-use-them-
 */
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: SHARED_MODULES.slice(),
        declarations: index_2.SHARED_COMPONENTS.slice(),
        exports: index_2.SHARED_COMPONENTS.concat(SHARED_MODULES),
        providers: index_2.SHARED_PROVIDERS.slice()
    })
], SharedModule);
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NoYXJlZC9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0Msc0NBQTJDO0FBQzNDLHdDQUFrRTtBQUNsRSwwQ0FBK0M7QUFFL0MsVUFBVTtBQUNWLHVDQUFtRDtBQUNuRCxpQ0FBOEQ7QUFFOUQsSUFBTSxjQUFjLEdBQVU7SUFDMUIscUJBQVk7SUFDWixpQkFBVTtJQUNWLG1CQUFXO0lBQ1gsMkJBQW1CO0lBQ25CLHFCQUFZO0lBQ1osMEJBQWtCO0NBQ3JCLENBQUM7QUFFRjs7Ozs7R0FLRztBQWlCSCxJQUFhLFlBQVk7SUFBekI7SUFBNEIsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBNUIsQUFBNkIsSUFBQTtBQUFoQixZQUFZO0lBZnhCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFDQSxjQUFjLFFBQ3BCO1FBQ0QsWUFBWSxFQUNMLHlCQUFpQixRQUN2QjtRQUNELE9BQU8sRUFDQSx5QkFBaUIsUUFDakIsY0FBYyxDQUNwQjtRQUNELFNBQVMsRUFDRix3QkFBZ0IsUUFDdEI7S0FDSixDQUFDO0dBQ1csWUFBWSxDQUFJO0FBQWhCLG9DQUFZIiwiZmlsZSI6ImFwcC9tb2R1bGVzL3NoYXJlZC9tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLy8gbW9kdWxlc1xuaW1wb3J0IHsgTXVsdGlsaW5ndWFsTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9pbmRleCc7XG5pbXBvcnQgeyBTSEFSRURfQ09NUE9ORU5UUywgU0hBUkVEX1BST1ZJREVSUyB9IGZyb20gJy4vaW5kZXgnO1xuXG5jb25zdCBTSEFSRURfTU9EVUxFUzogYW55W10gPSBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTXVsdGlsaW5ndWFsTW9kdWxlXG5dO1xuXG4vKipcbiAqIFNoYXJlZE1vZHVsZVxuICogT25seSBmb3Igc2hhcmVkIGNvbXBvbmVudHMsIGRpcmVjdGl2ZXMgYW5kIHBpcGVzXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgaGVyZVxuICogaHR0cHM6Ly9hbmd1bGFyLmlvL2RvY3MvdHMvbGF0ZXN0L2Nvb2tib29rL25nbW9kdWxlLWZhcS5odG1sIyEjd2hhdC1raW5kcy1vZi1tb2R1bGVzLXNob3VsZC1pLWhhdmUtYW5kLWhvdy1zaG91bGQtaS11c2UtdGhlbS1cbiAqL1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgLi4uU0hBUkVEX01PRFVMRVNcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICAuLi5TSEFSRURfQ09NUE9ORU5UU1xuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICAuLi5TSEFSRURfQ09NUE9ORU5UUyxcbiAgICAgICAgLi4uU0hBUkVEX01PRFVMRVNcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5TSEFSRURfUFJPVklERVJTXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUgeyB9XG4iXX0=
