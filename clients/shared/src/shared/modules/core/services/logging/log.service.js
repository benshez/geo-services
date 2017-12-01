"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var _ = require("lodash");
// module
var index_1 = require("../../utilities/index");
var log_target_1 = require("./log.target");
var LogService = (function () {
    function LogService(targets) {
        this.targets = targets;
    }
    // debug (standard output)
    LogService.prototype.debug = function () {
        var _this = this;
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (index_1.Config.DEBUG.LEVEL_4) {
            // console.debug does not work on {N} apps... use `log`
            return Promise.all(_.map(this.targets, function (logger) { return _this.logEvent(logger, msg, log_target_1.LogLevel.Debug); }));
        }
        return Promise.resolve();
    };
    // error
    LogService.prototype.error = function () {
        var _this = this;
        var err = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            err[_i] = arguments[_i];
        }
        if (index_1.Config.DEBUG.LEVEL_4 || index_1.Config.DEBUG.LEVEL_3) {
            return Promise.all(_.map(this.targets, function (logger) { return _this.logEvent(logger, err, log_target_1.LogLevel.Error); }));
        }
        return Promise.resolve();
    };
    // warn
    LogService.prototype.warn = function () {
        var _this = this;
        var err = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            err[_i] = arguments[_i];
        }
        if (index_1.Config.DEBUG.LEVEL_4 || index_1.Config.DEBUG.LEVEL_2) {
            return Promise.all(_.map(this.targets, function (logger) { return _this.logEvent(logger, err, log_target_1.LogLevel.Warning); }));
        }
        return Promise.resolve();
    };
    // info
    LogService.prototype.info = function () {
        var _this = this;
        var err = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            err[_i] = arguments[_i];
        }
        if (index_1.Config.DEBUG.LEVEL_4 || index_1.Config.DEBUG.LEVEL_1) {
            return Promise.all(_.map(this.targets, function (logger) { return _this.logEvent(logger, err, log_target_1.LogLevel.Info); }));
        }
        return Promise.resolve();
    };
    LogService.prototype.logEvent = function (target, message, level) {
        return target.log({ level: level, message: message });
    };
    LogService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(log_target_1.LogTarget)),
        __metadata("design:paramtypes", [Array])
    ], LogService);
    return LogService;
}());
exports.LogService = LogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFVBQVU7QUFDVixzQ0FBbUQ7QUFDbkQsMEJBQTRCO0FBQzVCLFNBQVM7QUFDVCwrQ0FBK0M7QUFDL0MsMkNBQW1EO0FBR25EO0lBRUUsb0JBQXdDLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFDNUQsQ0FBQztJQUVELDBCQUEwQjtJQUNuQiwwQkFBSyxHQUFaO1FBQUEsaUJBTUM7UUFOWSxhQUFNO2FBQU4sVUFBTSxFQUFOLHFCQUFNLEVBQU4sSUFBTTtZQUFOLHdCQUFNOztRQUNqQixFQUFFLENBQUMsQ0FBQyxjQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDekIsdURBQXVEO1lBQ3ZELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxxQkFBUSxDQUFDLEtBQUssQ0FBQyxFQUExQyxDQUEwQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsUUFBUTtJQUNELDBCQUFLLEdBQVo7UUFBQSxpQkFLQztRQUxZLGFBQU07YUFBTixVQUFNLEVBQU4scUJBQU0sRUFBTixJQUFNO1lBQU4sd0JBQU07O1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLGNBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLGNBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNqRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUscUJBQVEsQ0FBQyxLQUFLLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUFDLENBQUM7UUFDaEcsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELE9BQU87SUFDQSx5QkFBSSxHQUFYO1FBQUEsaUJBS0M7UUFMVyxhQUFNO2FBQU4sVUFBTSxFQUFOLHFCQUFNLEVBQU4sSUFBTTtZQUFOLHdCQUFNOztRQUNoQixFQUFFLENBQUMsQ0FBQyxjQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxjQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLHFCQUFRLENBQUMsT0FBTyxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxPQUFPO0lBQ0EseUJBQUksR0FBWDtRQUFBLGlCQUtDO1FBTFcsYUFBTTthQUFOLFVBQU0sRUFBTixxQkFBTSxFQUFOLElBQU07WUFBTix3QkFBTTs7UUFDaEIsRUFBRSxDQUFDLENBQUMsY0FBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksY0FBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxxQkFBUSxDQUFDLElBQUksQ0FBQyxFQUF6QyxDQUF5QyxDQUFDLENBQUMsQ0FBQztRQUMvRixDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sNkJBQVEsR0FBaEIsVUFBaUIsTUFBaUIsRUFBRSxPQUF3QixFQUFFLEtBQWU7UUFDM0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUF4Q1UsVUFBVTtRQUR0QixpQkFBVSxFQUFFO1FBR0csV0FBQSxhQUFNLENBQUMsc0JBQVMsQ0FBQyxDQUFBOztPQUZwQixVQUFVLENBeUN0QjtJQUFELGlCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbi8vIG1vZHVsZVxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2luZGV4JztcbmltcG9ydCB7IExvZ1RhcmdldCwgTG9nTGV2ZWwgfSBmcm9tICcuL2xvZy50YXJnZXQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9nU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoIEBJbmplY3QoTG9nVGFyZ2V0KSBwcml2YXRlIHRhcmdldHM6IExvZ1RhcmdldFtdKSB7XG4gIH1cblxuICAvLyBkZWJ1ZyAoc3RhbmRhcmQgb3V0cHV0KVxuICBwdWJsaWMgZGVidWcoLi4ubXNnKSB7XG4gICAgaWYgKENvbmZpZy5ERUJVRy5MRVZFTF80KSB7XG4gICAgICAvLyBjb25zb2xlLmRlYnVnIGRvZXMgbm90IHdvcmsgb24ge059IGFwcHMuLi4gdXNlIGBsb2dgXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXy5tYXAodGhpcy50YXJnZXRzLCBsb2dnZXIgPT4gdGhpcy5sb2dFdmVudChsb2dnZXIsIG1zZywgTG9nTGV2ZWwuRGVidWcpKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIC8vIGVycm9yXG4gIHB1YmxpYyBlcnJvciguLi5lcnIpIHtcbiAgICBpZiAoQ29uZmlnLkRFQlVHLkxFVkVMXzQgfHwgQ29uZmlnLkRFQlVHLkxFVkVMXzMpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChfLm1hcCh0aGlzLnRhcmdldHMsIGxvZ2dlciA9PiB0aGlzLmxvZ0V2ZW50KGxvZ2dlciwgZXJyLCBMb2dMZXZlbC5FcnJvcikpKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgLy8gd2FyblxuICBwdWJsaWMgd2FybiguLi5lcnIpIHtcbiAgICBpZiAoQ29uZmlnLkRFQlVHLkxFVkVMXzQgfHwgQ29uZmlnLkRFQlVHLkxFVkVMXzIpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChfLm1hcCh0aGlzLnRhcmdldHMsIGxvZ2dlciA9PiB0aGlzLmxvZ0V2ZW50KGxvZ2dlciwgZXJyLCBMb2dMZXZlbC5XYXJuaW5nKSkpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICAvLyBpbmZvXG4gIHB1YmxpYyBpbmZvKC4uLmVycikge1xuICAgIGlmIChDb25maWcuREVCVUcuTEVWRUxfNCB8fCBDb25maWcuREVCVUcuTEVWRUxfMSkge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKF8ubWFwKHRoaXMudGFyZ2V0cywgbG9nZ2VyID0+IHRoaXMubG9nRXZlbnQobG9nZ2VyLCBlcnIsIExvZ0xldmVsLkluZm8pKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9nRXZlbnQodGFyZ2V0OiBMb2dUYXJnZXQsIG1lc3NhZ2U6IHN0cmluZyB8IE9iamVjdCwgbGV2ZWw6IExvZ0xldmVsKSB7XG4gICAgcmV0dXJuIHRhcmdldC5sb2coeyBsZXZlbDogbGV2ZWwsIG1lc3NhZ2U6IG1lc3NhZ2UgfSk7XG4gIH1cbn1cbiJdfQ==