Object.defineProperty(exports, "__esModule", { value: true });
// any operators needed throughout your application
require("./operators");
// libs
var core_1 = require("@angular/core");
// app
var index_1 = require("../modules/analytics/index");
var index_2 = require("../modules/core/services/index");
var index_3 = require("../modules/core/utils/index");
/**
 * This class represents the main application component.
 */
var AppComponent = (function () {
    function AppComponent(analytics, log, appService) {
        this.analytics = analytics;
        this.log = log;
        this.appService = appService;
        log.debug("Config env: " + index_3.Config.ENVIRONMENT().ENV);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-app',
        templateUrl: index_3.Config.COMPONENT_ITEMS.TEMPLATE
    }),
    __metadata("design:paramtypes", [index_1.AnalyticsService,
        index_2.LogService,
        index_2.AppService])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbURBQW1EO0FBQ25ELHVCQUFxQjtBQUVyQixPQUFPO0FBQ1Asc0NBQWtEO0FBRWxELE1BQU07QUFDTixvREFBOEQ7QUFDOUQsd0RBQXdFO0FBQ3hFLHFEQUFxRDtBQUVyRDs7R0FFRztBQU1ILElBQWEsWUFBWTtJQUNyQixzQkFDVyxTQUEyQixFQUMzQixHQUFlLEVBQ2QsVUFBc0I7UUFGdkIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNkLGVBQVUsR0FBVixVQUFVLENBQVk7UUFFOUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBZSxjQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBSyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSxZQUFZO0lBTHhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLGNBQU0sQ0FBQyxlQUFlLENBQUMsUUFBUTtLQUMvQyxDQUFDO3FDQUd3Qix3QkFBZ0I7UUFDdEIsa0JBQVU7UUFDRixrQkFBVTtHQUp6QixZQUFZLENBUXhCO0FBUlksb0NBQVkiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW55IG9wZXJhdG9ycyBuZWVkZWQgdGhyb3VnaG91dCB5b3VyIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vb3BlcmF0b3JzJztcblxuLy8gbGlic1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gYXBwXG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kdWxlcy9hbmFseXRpY3MvaW5kZXgnO1xuaW1wb3J0IHsgTG9nU2VydmljZSwgQXBwU2VydmljZSB9IGZyb20gJy4uL21vZHVsZXMvY29yZS9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9tb2R1bGVzL2NvcmUvdXRpbHMvaW5kZXgnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzZC1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiBDb25maWcuQ09NUE9ORU5UX0lURU1TLlRFTVBMQVRFXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBhbmFseXRpY3M6IEFuYWx5dGljc1NlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBsb2c6IExvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYXBwU2VydmljZTogQXBwU2VydmljZVxuICAgICkge1xuICAgICAgICBsb2cuZGVidWcoYENvbmZpZyBlbnY6ICR7Q29uZmlnLkVOVklST05NRU5UKCkuRU5WfWApO1xuICAgIH1cbn1cbiJdfQ==
