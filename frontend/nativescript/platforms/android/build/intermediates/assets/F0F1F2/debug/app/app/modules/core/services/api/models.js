Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ApiServiceParametersOptions = (function () {
    function ApiServiceParametersOptions() {
        this.url = '';
        this.parameters = {};
        this.cacheKey = '';
        this.concatApi = false;
        this.allowRequestOption = true;
    }
    return ApiServiceParametersOptions;
}());
ApiServiceParametersOptions = __decorate([
    core_1.Injectable()
], ApiServiceParametersOptions);
exports.ApiServiceParametersOptions = ApiServiceParametersOptions;
var ApiServiceOptions = (function () {
    function ApiServiceOptions() {
        this.headers = {};
        this.data = {};
        this.pendingCommandCount = 0;
    }
    return ApiServiceOptions;
}());
ApiServiceOptions = __decorate([
    core_1.Injectable()
], ApiServiceOptions);
exports.ApiServiceOptions = ApiServiceOptions;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvYXBpL21vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBSzNDLElBQWEsMkJBQTJCO0lBRHhDO1FBRUksUUFBRyxHQUFXLEVBQUUsQ0FBQztRQUNqQixlQUFVLEdBQVEsRUFBRSxDQUFDO1FBQ3JCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQix1QkFBa0IsR0FBWSxJQUFJLENBQUM7SUFDdkMsQ0FBQztJQUFELGtDQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSwyQkFBMkI7SUFEdkMsaUJBQVUsRUFBRTtHQUNBLDJCQUEyQixDQU12QztBQU5ZLGtFQUEyQjtBQVN4QyxJQUFhLGlCQUFpQjtJQUQ5QjtRQUdJLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFFbEIsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUdmLHdCQUFtQixHQUFXLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLGlCQUFpQjtJQUQ3QixpQkFBVSxFQUFFO0dBQ0EsaUJBQWlCLENBUTdCO0FBUlksOENBQWlCIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvYXBpL21vZGVscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVxdWVzdE1ldGhvZCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcy9SeCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlUGFyYW1ldGVyc09wdGlvbnMge1xyXG4gICAgdXJsOiBzdHJpbmcgPSAnJztcclxuICAgIHBhcmFtZXRlcnM6IGFueSA9IHt9O1xyXG4gICAgY2FjaGVLZXk6IHN0cmluZyA9ICcnO1xyXG4gICAgY29uY2F0QXBpOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBhbGxvd1JlcXVlc3RPcHRpb246IGJvb2xlYW4gPSB0cnVlO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlT3B0aW9ucyB7XHJcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2Q7XHJcbiAgICBoZWFkZXJzOiBhbnkgPSB7fTtcclxuICAgIHBhcmFtZXRlcnM6IEFwaVNlcnZpY2VQYXJhbWV0ZXJzT3B0aW9ucztcclxuICAgIGRhdGE6IGFueSA9IHt9O1xyXG4gICAgcGVuZGluZ0NvbW1hbmRzJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gICAgcGVuZGluZ0NvbW1hbmRzU3ViamVjdDogU3ViamVjdDxudW1iZXI+O1xyXG4gICAgcGVuZGluZ0NvbW1hbmRDb3VudDogbnVtYmVyID0gMDtcclxufVxyXG4iXX0=
