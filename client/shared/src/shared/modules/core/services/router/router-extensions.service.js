"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var RouterExtensions = (function () {
    function RouterExtensions(router, locationStrategy) {
        this.router = router;
        this.locationStrategy = locationStrategy;
    }
    RouterExtensions.prototype.navigate = function (commands, extras) {
        return this.router.navigate(commands, extras);
    };
    RouterExtensions.prototype.navigateByUrl = function (url, _options) {
        return this.router.navigateByUrl(url);
    };
    RouterExtensions.prototype.back = function () {
        this.locationStrategy.back();
    };
    RouterExtensions = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, common_1.LocationStrategy])
    ], RouterExtensions);
    return RouterExtensions;
}());
exports.RouterExtensions = RouterExtensions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLWV4dGVuc2lvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvdXRlci1leHRlbnNpb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxVQUFVO0FBQ1Ysc0NBQTJDO0FBQzNDLDBDQUFtRDtBQUNuRCwwQ0FBb0U7QUFzQnBFO0lBRUUsMEJBQW1CLE1BQWMsRUFBVSxnQkFBa0M7UUFBMUQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBRTNFLG1DQUFRLEdBQWYsVUFBZ0IsUUFBb0IsRUFBRSxNQUFpQztRQUNyRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSx3Q0FBYSxHQUFwQixVQUFxQixHQUFxQixFQUFFLFFBQW1DO1FBQzdFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sK0JBQUksR0FBWDtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBZFUsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7eUNBR2dCLGVBQU0sRUFBNEIseUJBQWdCO09BRmxFLGdCQUFnQixDQWU1QjtJQUFELHVCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXIsIFVybFRyZWUsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4dGVuZGVkTmF2aWdhdGlvbkV4dHJhcyBleHRlbmRzIE5hdmlnYXRpb25FeHRyYXMge1xuICAvLyBPcHRpb25zIGZvciBuYXRpdmVzY3JpcHRcbiAgY2xlYXJIaXN0b3J5PzogYm9vbGVhbjtcbiAgYW5pbWF0ZWQ/OiBib29sZWFuO1xuICB0cmFuc2l0aW9uPzogeyAvLyBTZWUgLT4gaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYXBpLXJlZmVyZW5jZS9pbnRlcmZhY2VzL191aV9mcmFtZV8ubmF2aWdhdGlvbnRyYW5zaXRpb24uaHRtbFxuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgaW5zdGFuY2U/OiBhbnk7XG4gICAgZHVyYXRpb24/OiBudW1iZXI7XG4gICAgY3VydmU/OiBhbnk7XG4gIH07XG4gIC8vIEVORCAtIE9wdGlvbnMgZm9yIG5hdGl2ZXNjcmlwdFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSb3V0ZXJFeHRlbnNpb25zIHtcbiAgbmF2aWdhdGUoY29tbWFuZHM6IEFycmF5PGFueT4sIGV4dHJhcz86IEV4dGVuZGVkTmF2aWdhdGlvbkV4dHJhcyk6IFByb21pc2U8Ym9vbGVhbj47XG4gIG5hdmlnYXRlQnlVcmwodXJsOiBzdHJpbmcgfCBVcmxUcmVlLCBvcHRpb25zPzogRXh0ZW5kZWROYXZpZ2F0aW9uRXh0cmFzKTogUHJvbWlzZTxib29sZWFuPjtcbiAgYmFjaygpOiB2b2lkO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm91dGVyRXh0ZW5zaW9ucyBpbXBsZW1lbnRzIElSb3V0ZXJFeHRlbnNpb25zIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbG9jYXRpb25TdHJhdGVneTogTG9jYXRpb25TdHJhdGVneSkgeyB9XG5cbiAgcHVibGljIG5hdmlnYXRlKGNvbW1hbmRzOiBBcnJheTxhbnk+LCBleHRyYXM/OiBFeHRlbmRlZE5hdmlnYXRpb25FeHRyYXMpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoY29tbWFuZHMsIGV4dHJhcyk7XG4gIH1cblxuICBwdWJsaWMgbmF2aWdhdGVCeVVybCh1cmw6IHN0cmluZyB8IFVybFRyZWUsIF9vcHRpb25zPzogRXh0ZW5kZWROYXZpZ2F0aW9uRXh0cmFzKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKTtcbiAgfVxuXG4gIHB1YmxpYyBiYWNrKCkge1xuICAgIHRoaXMubG9jYXRpb25TdHJhdGVneS5iYWNrKCk7XG4gIH1cbn1cbiJdfQ==