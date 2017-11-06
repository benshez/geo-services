"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 0] = "Debug";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 4] = "Error";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var LogTargetOptions = (function () {
    function LogTargetOptions() {
    }
    return LogTargetOptions;
}());
exports.LogTargetOptions = LogTargetOptions;
var LogTarget = (function () {
    function LogTarget() {
    }
    return LogTarget;
}());
exports.LogTarget = LogTarget;
var LogTargetBase = (function () {
    function LogTargetBase(options) {
        this.options = options;
    }
    LogTargetBase.prototype.log = function (event) {
        if (event.level >= this.options.minLogLevel) {
            return this.writeToLog(event);
        }
        return Promise.resolve();
    };
    return LogTargetBase;
}());
exports.LogTargetBase = LogTargetBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnRhcmdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZy50YXJnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFZLFFBS1g7QUFMRCxXQUFZLFFBQVE7SUFDbEIseUNBQVMsQ0FBQTtJQUNULHVDQUFRLENBQUE7SUFDUiw2Q0FBVyxDQUFBO0lBQ1gseUNBQVMsQ0FBQTtBQUNYLENBQUMsRUFMVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUtuQjtBQU9EO0lBQUE7SUFFQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZxQiw0Q0FBZ0I7QUFJdEM7SUFBQTtJQUVBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRnFCLDhCQUFTO0FBSS9CO0lBQ0UsdUJBQXNCLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO0lBQy9DLENBQUM7SUFFRCwyQkFBRyxHQUFILFVBQUksS0FBZTtRQUNqQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBR0gsb0JBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpxQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIExvZ0xldmVsIHtcbiAgRGVidWcgPSAwLFxuICBJbmZvID0gMSxcbiAgV2FybmluZyA9IDIsXG4gIEVycm9yID0gNFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvZ0V2ZW50IHtcbiAgbWVzc2FnZTogc3RyaW5nIHwgT2JqZWN0O1xuICBsZXZlbDogTG9nTGV2ZWw7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMb2dUYXJnZXRPcHRpb25zIHtcbiAgbWluTG9nTGV2ZWw6IExvZ0xldmVsO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9nVGFyZ2V0IHtcbiAgYWJzdHJhY3QgbG9nKGV2ZW50OiBMb2dFdmVudCk6IFByb21pc2U8YW55Pjtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvZ1RhcmdldEJhc2UgaW1wbGVtZW50cyBMb2dUYXJnZXQge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgb3B0aW9uczogTG9nVGFyZ2V0T3B0aW9ucykge1xuICB9XG5cbiAgbG9nKGV2ZW50OiBMb2dFdmVudCk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKGV2ZW50LmxldmVsID49IHRoaXMub3B0aW9ucy5taW5Mb2dMZXZlbCkge1xuICAgICAgcmV0dXJuIHRoaXMud3JpdGVUb0xvZyhldmVudCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCB3cml0ZVRvTG9nKGV2ZW50OiBMb2dFdmVudCk6IFByb21pc2U8YW55Pjtcbn1cbiJdfQ==