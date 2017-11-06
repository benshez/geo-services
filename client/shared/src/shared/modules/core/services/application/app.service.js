"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// app
var index_1 = require("../../../analytics/index");
var index_2 = require("../index");
var index_3 = require("../../utilities/index");
var AppService = (function () {
    function AppService(analytics, log) {
        this.analytics = analytics;
        this.log = log;
        this.log.debug("AppService -> Config env: " + index_3.Config.ENVIRONMENT().ENV);
    }
    AppService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [index_1.AnalyticsService, index_2.LogService])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyxNQUFNO0FBQ04sa0RBQTREO0FBQzVELGtDQUFzQztBQUN0QywrQ0FBK0M7QUFHL0M7SUFDRSxvQkFBbUIsU0FBMkIsRUFBUyxHQUFlO1FBQW5ELGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNwRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQywrQkFBNkIsY0FBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUssQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFIVSxVQUFVO1FBRHRCLGlCQUFVLEVBQUU7eUNBRW1CLHdCQUFnQixFQUFjLGtCQUFVO09BRDNELFVBQVUsQ0FJdEI7SUFBRCxpQkFBQztDQUFBLEFBSkQsSUFJQztBQUpZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBhcHBcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hbmFseXRpY3MvaW5kZXgnO1xuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSwgcHVibGljIGxvZzogTG9nU2VydmljZSkge1xuICAgIHRoaXMubG9nLmRlYnVnKGBBcHBTZXJ2aWNlIC0+IENvbmZpZyBlbnY6ICR7Q29uZmlnLkVOVklST05NRU5UKCkuRU5WfWApO1xuICB9XG59XG4iXX0=