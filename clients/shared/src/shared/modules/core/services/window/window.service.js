"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var WindowService = (function () {
    function WindowService() {
        this.navigator = {};
        this.location = {};
    }
    WindowService.prototype.alert = function (_msg) { return; };
    WindowService.prototype.confirm = function (_msg) { return; };
    WindowService = __decorate([
        core_1.Injectable()
    ], WindowService);
    return WindowService;
}());
exports.WindowService = WindowService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3aW5kb3cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFVBQVU7QUFDVixzQ0FBMkM7QUFNM0M7SUFEQTtRQUdTLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztJQUk1QixDQUFDO0lBSFEsNkJBQUssR0FBWixVQUFhLElBQVksSUFBVSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLCtCQUFPLEdBQWQsVUFBZSxJQUFZLElBQVUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUxuQyxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7T0FDQSxhQUFhLENBT3pCO0lBQUQsb0JBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBJV2luZG93IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaW5kb3dTZXJ2aWNlIGltcGxlbWVudHMgSVdpbmRvdyB7XG5cbiAgcHVibGljIG5hdmlnYXRvcjogYW55ID0ge307XG4gIHB1YmxpYyBsb2NhdGlvbjogYW55ID0ge307XG4gIHB1YmxpYyBhbGVydChfbXNnOiBzdHJpbmcpOiB2b2lkIHsgcmV0dXJuOyB9XG4gIHB1YmxpYyBjb25maXJtKF9tc2c6IHN0cmluZyk6IHZvaWQgeyByZXR1cm47IH1cblxufVxuIl19