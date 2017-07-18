Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// app
var index_1 = require("../../core/index");
var index_2 = require("../../analytics/index");
// module
var index_3 = require("../actions/index");
var NameListService = (function (_super) {
    __extends(NameListService, _super);
    function NameListService(analytics, http) {
        var _this = _super.call(this, analytics) || this;
        _this.analytics = analytics;
        _this.http = http;
        _this.category = index_3.NameList.CATEGORY;
        return _this;
    }
    NameListService.prototype.getNames = function () {
        return this.http.get((index_1.Config.IS_MOBILE_NATIVE() ? '/' : '') + "assets/data.json")
            .map(function (res) { return res.json(); });
    };
    return NameListService;
}(index_2.Analytics));
NameListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_2.AnalyticsService,
        http_1.Http])
], NameListService);
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NhbXBsZS9zZXJ2aWNlcy9uYW1lLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHNDQUEyQztBQUMzQyxzQ0FBcUM7QUFLckMsTUFBTTtBQUNOLDBDQUEwQztBQUMxQywrQ0FBb0U7QUFFcEUsU0FBUztBQUNULDBDQUE0QztBQUc1QyxJQUFhLGVBQWU7SUFBUyxtQ0FBUztJQUU1Qyx5QkFDUyxTQUEyQixFQUMxQixJQUFVO1FBRnBCLFlBSUUsa0JBQU0sU0FBUyxDQUFDLFNBRWpCO1FBTFEsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDMUIsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUdsQixLQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFRLENBQUMsUUFBUSxDQUFDOztJQUNwQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFHLGNBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLHNCQUFrQixDQUFDO2FBQzVFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQWRBLEFBY0MsQ0Fkb0MsaUJBQVMsR0FjN0M7QUFkWSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7cUNBSVMsd0JBQWdCO1FBQ3BCLFdBQUk7R0FKVCxlQUFlLENBYzNCO0FBZFksMENBQWUiLCJmaWxlIjoiYXBwL21vZHVsZXMvc2FtcGxlL3NlcnZpY2VzL25hbWUtbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG4vLyBsaWJzXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuLy8gYXBwXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcbmltcG9ydCB7IEFuYWx5dGljcywgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uLy4uL2FuYWx5dGljcy9pbmRleCc7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgTmFtZUxpc3QgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hbWVMaXN0U2VydmljZSBleHRlbmRzIEFuYWx5dGljcyB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBcbiAgKSB7XG4gICAgc3VwZXIoYW5hbHl0aWNzKTtcbiAgICB0aGlzLmNhdGVnb3J5ID0gTmFtZUxpc3QuQ0FURUdPUlk7XG4gIH1cblxuICBnZXROYW1lcygpOiBPYnNlcnZhYmxlPEFycmF5PHN0cmluZz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuSVNfTU9CSUxFX05BVElWRSgpID8gJy8nIDogJyd9YXNzZXRzL2RhdGEuanNvbmApXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgfVxufVxuIl19
