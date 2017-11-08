"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 0] = "Debug";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 4] = "Error";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var LogTargetOptions = function () {
    function LogTargetOptions() {}
    return LogTargetOptions;
}();
exports.LogTargetOptions = LogTargetOptions;
var LogTarget = function () {
    function LogTarget() {}
    return LogTarget;
}();
exports.LogTarget = LogTarget;
var LogTargetBase = function () {
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
}();
exports.LogTargetBase = LogTargetBase;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnRhcmdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZy50YXJnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBWSxBQUtYO0FBTEQsV0FBWSxBQUFRO0FBQ2xCLHNDQUFTO0FBQ1QscUNBQVE7QUFDUix3Q0FBVztBQUNYLHNDQUFTLEFBQ1g7QUFBQyxHQUxXLEFBQVEsV0FBUixRQUFRLGFBQVIsUUFBUSxXQUtuQjtBQU9EO0FBQUEsZ0NBRUEsQ0FBQztBQUFELFdBQUMsQUFBRDtBQUZBLEFBRUM7QUFGcUIsMkJBQWdCO0FBSXRDO0FBQUEseUJBRUEsQ0FBQztBQUFELFdBQUMsQUFBRDtBQUZBLEFBRUM7QUFGcUIsb0JBQVM7QUFJL0I7QUFDRSwyQkFBc0IsQUFBeUI7QUFBekIsYUFBTyxVQUFQLEFBQU8sQUFBa0IsQUFDL0M7QUFBQztBQUVELDRCQUFHLE1BQUgsVUFBSSxBQUFlO0FBQ2pCLEFBQUUsQUFBQyxZQUFDLEFBQUssTUFBQyxBQUFLLFNBQUksQUFBSSxLQUFDLEFBQU8sUUFBQyxBQUFXLEFBQUMsYUFBQyxBQUFDO0FBQzVDLEFBQU0sbUJBQUMsQUFBSSxLQUFDLEFBQVUsV0FBQyxBQUFLLEFBQUMsQUFBQyxBQUNoQztBQUFDO0FBQ0QsQUFBTSxlQUFDLEFBQU8sUUFBQyxBQUFPLEFBQUUsQUFBQyxBQUMzQjtBQUFDO0FBR0gsV0FBQyxBQUFEO0FBWkEsQUFZQztBQVpxQix3QkFBYSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIExvZ0xldmVsIHtcbiAgRGVidWcgPSAwLFxuICBJbmZvID0gMSxcbiAgV2FybmluZyA9IDIsXG4gIEVycm9yID0gNFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvZ0V2ZW50IHtcbiAgbWVzc2FnZTogc3RyaW5nIHwgT2JqZWN0O1xuICBsZXZlbDogTG9nTGV2ZWw7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMb2dUYXJnZXRPcHRpb25zIHtcbiAgbWluTG9nTGV2ZWw6IExvZ0xldmVsO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9nVGFyZ2V0IHtcbiAgYWJzdHJhY3QgbG9nKGV2ZW50OiBMb2dFdmVudCk6IFByb21pc2U8YW55Pjtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvZ1RhcmdldEJhc2UgaW1wbGVtZW50cyBMb2dUYXJnZXQge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgb3B0aW9uczogTG9nVGFyZ2V0T3B0aW9ucykge1xuICB9XG5cbiAgbG9nKGV2ZW50OiBMb2dFdmVudCk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKGV2ZW50LmxldmVsID49IHRoaXMub3B0aW9ucy5taW5Mb2dMZXZlbCkge1xuICAgICAgcmV0dXJuIHRoaXMud3JpdGVUb0xvZyhldmVudCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCB3cml0ZVRvTG9nKGV2ZW50OiBMb2dFdmVudCk6IFByb21pc2U8YW55Pjtcbn1cbiJdfQ==