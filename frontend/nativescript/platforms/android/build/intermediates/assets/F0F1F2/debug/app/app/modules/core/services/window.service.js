Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var WindowService = (function () {
    function WindowService() {
        this.navigator = {};
        this.location = {};
    }
    WindowService.prototype.alert = function (msg) { return; };
    WindowService.prototype.confirm = function (msg) { return; };
    return WindowService;
}());
WindowService = __decorate([
    core_1.Injectable()
], WindowService);
exports.WindowService = WindowService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvd2luZG93LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixzQ0FBMkM7QUFNM0MsSUFBYSxhQUFhO0lBRDFCO1FBR1csY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQVEsRUFBRSxDQUFDO0lBSTlCLENBQUM7SUFIVSw2QkFBSyxHQUFaLFVBQWEsR0FBVyxJQUFVLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDcEMsK0JBQU8sR0FBZCxVQUFlLEdBQVcsSUFBVSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRWpELG9CQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxhQUFhO0lBRHpCLGlCQUFVLEVBQUU7R0FDQSxhQUFhLENBT3pCO0FBUFksc0NBQWEiLCJmaWxlIjoiYXBwL21vZHVsZXMvY29yZS9zZXJ2aWNlcy93aW5kb3cuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBJV2luZG93IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pd2luZG93JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdpbmRvd1NlcnZpY2UgaW1wbGVtZW50cyBJV2luZG93IHtcblxuICAgIHB1YmxpYyBuYXZpZ2F0b3I6IGFueSA9IHt9O1xuICAgIHB1YmxpYyBsb2NhdGlvbjogYW55ID0ge307XG4gICAgcHVibGljIGFsZXJ0KG1zZzogc3RyaW5nKTogdm9pZCB7IHJldHVybjsgfVxuICAgIHB1YmxpYyBjb25maXJtKG1zZzogc3RyaW5nKTogdm9pZCB7IHJldHVybjsgfVxuXG59XG4iXX0=
