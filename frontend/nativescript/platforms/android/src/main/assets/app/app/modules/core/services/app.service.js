Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// app
var index_1 = require("../../../modules/analytics/index");
var log_service_1 = require("./logging/log.service");
var config_1 = require("../utils/config");
var AppService = (function () {
    function AppService(analytics, log) {
        this.analytics = analytics;
        this.log = log;
        this.log.debug("AppService -> Config env: " + config_1.Config.ENVIRONMENT().ENV);
    }
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.AnalyticsService, log_service_1.LogService])
], AppService);
exports.AppService = AppService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvYXBwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUUzQyxNQUFNO0FBQ04sMERBQW9FO0FBQ3BFLHFEQUFtRDtBQUNuRCwwQ0FBeUM7QUFHekMsSUFBYSxVQUFVO0lBQ25CLG9CQUFtQixTQUEyQixFQUFTLEdBQWU7UUFBbkQsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2xFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLCtCQUE2QixlQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBSyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSxVQUFVO0lBRHRCLGlCQUFVLEVBQUU7cUNBRXFCLHdCQUFnQixFQUFjLHdCQUFVO0dBRDdELFVBQVUsQ0FJdEI7QUFKWSxnQ0FBVSIsImZpbGUiOiJhcHAvbW9kdWxlcy9jb3JlL3NlcnZpY2VzL2FwcC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBhcHBcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2FuYWx5dGljcy9pbmRleCc7XG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi9sb2dnaW5nL2xvZy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL3V0aWxzL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlLCBwdWJsaWMgbG9nOiBMb2dTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKGBBcHBTZXJ2aWNlIC0+IENvbmZpZyBlbnY6ICR7Q29uZmlnLkVOVklST05NRU5UKCkuRU5WfWApO1xuICAgIH1cbn1cbiJdfQ==
