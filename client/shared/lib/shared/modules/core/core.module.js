"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// module
var index_1 = require("./index");
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var CoreModule = function () {
    var CoreModule = CoreModule_1 = function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule already loaded; Import in root module only.');
        }
    };
    // configuredProviders: *required to configure WindowService and ConsoleService per platform
    CoreModule.forRoot = function (configuredProviders) {
        return {
            ngModule: CoreModule_1,
            providers: configuredProviders
        };
    };
    CoreModule = CoreModule_1 = __decorate([core_1.NgModule({
        imports: [],
        declarations: index_1.CORE_DIRECTIVES.slice(),
        exports: index_1.CORE_DIRECTIVES.slice(),
        providers: index_1.CORE_PROVIDERS.slice()
    }), __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()), __metadata("design:paramtypes", [CoreModule])], CoreModule);
    return CoreModule;
    var CoreModule_1;
}();
exports.CoreModule = CoreModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxBQUFVO0FBQ1YscUJBS3VCO0FBRXZCLEFBQVM7QUFDVCxzQkFHaUI7QUFFakIsQUFFRzs7O0FBY0g7QUFBQSxRQUFhLEFBQVUsNEJBUXJCLG9CQUFxQyxBQUF3QjtBQUMzRCxBQUFFLEFBQUMsWUFBQyxBQUFZLEFBQUMsY0FBQyxBQUFDO0FBQ2pCLGtCQUFNLElBQUksQUFBSyxNQUFDLEFBQXdELEFBQUMsQUFBQyxBQUM1RTtBQUFDLEFBQ0g7QUFBQyxBQUNGO0FBWkMsQUFBNEY7QUFDckYsZUFBTyxVQUFkLFVBQWUsQUFBK0I7QUFDNUMsQUFBTTtBQUNKLEFBQVEsc0JBQUUsQUFBVTtBQUNwQixBQUFTLHVCQUFFLEFBQW1CLEFBQy9CLEFBQUMsQUFDSjtBQUpTO0FBSVI7QUFQVSxBQUFVLG1EQWJkO0FBQ1AsQUFBTyxpQkFBRSxBQUNSO0FBQ0QsQUFBWSxzQkFDUCxRQUFlLGdCQUNuQjtBQUNELEFBQU8saUJBQ0YsUUFBZSxnQkFDbkI7QUFDRCxBQUFTLG1CQUNKLFFBQWMsZUFDbEIsQUFDRixBQUFDO0FBWlEsS0FBVCxHQXFCZSxXQUFBLE9BQVEsQUFBRSxhQUFFLFdBQUEsT0FBUSxBQUFFLDhDQUFlLEFBQVUsZUFSbEQsQUFBVSxBQWF0QjtBQUFELFdBQUM7O0FBYkQsQUFhQztBQWJZLHFCQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxyXG5pbXBvcnQge1xyXG4gIE5nTW9kdWxlLFxyXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXHJcbiAgT3B0aW9uYWwsXHJcbiAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIG1vZHVsZVxyXG5pbXBvcnQge1xyXG4gIENPUkVfRElSRUNUSVZFUyxcclxuICBDT1JFX1BST1ZJREVSU1xyXG59IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIC4uLkNPUkVfRElSRUNUSVZFU1xyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgLi4uQ09SRV9ESVJFQ1RJVkVTXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIC4uLkNPUkVfUFJPVklERVJTXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcbiAgLy8gY29uZmlndXJlZFByb3ZpZGVyczogKnJlcXVpcmVkIHRvIGNvbmZpZ3VyZSBXaW5kb3dTZXJ2aWNlIGFuZCBDb25zb2xlU2VydmljZSBwZXIgcGxhdGZvcm1cclxuICBzdGF0aWMgZm9yUm9vdChjb25maWd1cmVkUHJvdmlkZXJzOiBBcnJheTxhbnk+KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQ29yZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBjb25maWd1cmVkUHJvdmlkZXJzXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlKSB7XHJcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29yZU1vZHVsZSBhbHJlYWR5IGxvYWRlZDsgSW1wb3J0IGluIHJvb3QgbW9kdWxlIG9ubHkuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==