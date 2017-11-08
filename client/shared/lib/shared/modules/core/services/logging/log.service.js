"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var _ = require("lodash");
// module
var index_1 = require("../../utilities/index");
var log_target_1 = require("./log.target");
var LogService = function () {
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
            return Promise.all(_.map(this.targets, function (logger) {
                return _this.logEvent(logger, msg, log_target_1.LogLevel.Debug);
            }));
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
            return Promise.all(_.map(this.targets, function (logger) {
                return _this.logEvent(logger, err, log_target_1.LogLevel.Error);
            }));
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
            return Promise.all(_.map(this.targets, function (logger) {
                return _this.logEvent(logger, err, log_target_1.LogLevel.Warning);
            }));
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
            return Promise.all(_.map(this.targets, function (logger) {
                return _this.logEvent(logger, err, log_target_1.LogLevel.Info);
            }));
        }
        return Promise.resolve();
    };
    LogService.prototype.logEvent = function (target, message, level) {
        return target.log({ level: level, message: message });
    };
    LogService = __decorate([core_1.Injectable(), __param(0, core_1.Inject(log_target_1.LogTarget)), __metadata("design:paramtypes", [Array])], LogService);
    return LogService;
}();
exports.LogService = LogService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxBQUFVO0FBQ1YscUJBQW1EO0FBQ25ELGdCQUE0QjtBQUM1QixBQUFTO0FBQ1Qsc0JBQStDO0FBQy9DLDJCQUFtRDtBQUduRDtBQUVFLHdCQUF3QyxBQUFvQjtBQUFwQixhQUFPLFVBQVAsQUFBTyxBQUFhLEFBQzVEO0FBQUM7QUFFRCxBQUEwQjtBQUNuQix5QkFBSyxRQUFaO0FBQUEsb0JBTUM7QUFOWSxrQkFBTTthQUFOLFNBQU0sR0FBTixlQUFNLFFBQU4sQUFBTTtBQUFOLGdDQUFNOztBQUNqQixBQUFFLEFBQUMsWUFBQyxRQUFNLE9BQUMsQUFBSyxNQUFDLEFBQU8sQUFBQyxTQUFDLEFBQUM7QUFDekIsQUFBdUQ7QUFDdkQsQUFBTSwyQkFBUyxBQUFHLE1BQUcsQUFBRyxJQUFDLEFBQUksS0FBQyxBQUFPLFNBQUUsVUFBQSxBQUFNO0FBQUksdUJBQUEsQUFBSSxNQUFDLEFBQVEsU0FBQyxBQUFNLFFBQUUsQUFBRyxLQUFFLGFBQVEsU0FBbkMsQUFBb0MsQUFBSyxBQUFDO0FBQUEsQUFBQyxBQUFDLEFBQUMsQUFDaEcsYUFEcUIsQUFBQyxDQUFiLEFBQU87QUFDZjtBQUNELEFBQU0sZUFBQyxBQUFPLFFBQUMsQUFBTyxBQUFFLEFBQUMsQUFDM0I7QUFBQztBQUVELEFBQVE7QUFDRCx5QkFBSyxRQUFaO0FBQUEsb0JBS0M7QUFMWSxrQkFBTTthQUFOLFNBQU0sR0FBTixlQUFNLFFBQU4sQUFBTTtBQUFOLGdDQUFNOztBQUNqQixBQUFFLEFBQUMsWUFBQyxRQUFNLE9BQUMsQUFBSyxNQUFDLEFBQU8sV0FBSSxRQUFNLE9BQUMsQUFBSyxNQUFDLEFBQU8sQUFBQyxTQUFDLEFBQUM7QUFDakQsQUFBTSwyQkFBUyxBQUFHLE1BQUcsQUFBRyxJQUFDLEFBQUksS0FBQyxBQUFPLFNBQUUsVUFBQSxBQUFNO0FBQUksdUJBQUEsQUFBSSxNQUFDLEFBQVEsU0FBQyxBQUFNLFFBQUUsQUFBRyxLQUFFLGFBQVEsU0FBbkMsQUFBb0MsQUFBSyxBQUFDO0FBQUEsQUFBQyxBQUFDLEFBQUMsQUFDaEcsYUFEcUIsQUFBQyxDQUFiLEFBQU87QUFDZjtBQUNELEFBQU0sZUFBQyxBQUFPLFFBQUMsQUFBTyxBQUFFLEFBQUMsQUFDM0I7QUFBQztBQUVELEFBQU87QUFDQSx5QkFBSSxPQUFYO0FBQUEsb0JBS0M7QUFMVyxrQkFBTTthQUFOLFNBQU0sR0FBTixlQUFNLFFBQU4sQUFBTTtBQUFOLGdDQUFNOztBQUNoQixBQUFFLEFBQUMsWUFBQyxRQUFNLE9BQUMsQUFBSyxNQUFDLEFBQU8sV0FBSSxRQUFNLE9BQUMsQUFBSyxNQUFDLEFBQU8sQUFBQyxTQUFDLEFBQUM7QUFDakQsQUFBTSwyQkFBUyxBQUFHLE1BQUcsQUFBRyxJQUFDLEFBQUksS0FBQyxBQUFPLFNBQUUsVUFBQSxBQUFNO0FBQUksdUJBQUEsQUFBSSxNQUFDLEFBQVEsU0FBQyxBQUFNLFFBQUUsQUFBRyxLQUFFLGFBQVEsU0FBbkMsQUFBb0MsQUFBTyxBQUFDO0FBQUEsQUFBQyxBQUFDLEFBQUMsQUFDbEcsYUFEcUIsQUFBQyxDQUFiLEFBQU87QUFDZjtBQUNELEFBQU0sZUFBQyxBQUFPLFFBQUMsQUFBTyxBQUFFLEFBQUMsQUFDM0I7QUFBQztBQUVELEFBQU87QUFDQSx5QkFBSSxPQUFYO0FBQUEsb0JBS0M7QUFMVyxrQkFBTTthQUFOLFNBQU0sR0FBTixlQUFNLFFBQU4sQUFBTTtBQUFOLGdDQUFNOztBQUNoQixBQUFFLEFBQUMsWUFBQyxRQUFNLE9BQUMsQUFBSyxNQUFDLEFBQU8sV0FBSSxRQUFNLE9BQUMsQUFBSyxNQUFDLEFBQU8sQUFBQyxTQUFDLEFBQUM7QUFDakQsQUFBTSwyQkFBUyxBQUFHLE1BQUcsQUFBRyxJQUFDLEFBQUksS0FBQyxBQUFPLFNBQUUsVUFBQSxBQUFNO0FBQUksdUJBQUEsQUFBSSxNQUFDLEFBQVEsU0FBQyxBQUFNLFFBQUUsQUFBRyxLQUFFLGFBQVEsU0FBbkMsQUFBb0MsQUFBSSxBQUFDO0FBQUEsQUFBQyxBQUFDLEFBQUMsQUFDL0YsYUFEcUIsQUFBQyxDQUFiLEFBQU87QUFDZjtBQUNELEFBQU0sZUFBQyxBQUFPLFFBQUMsQUFBTyxBQUFFLEFBQUMsQUFDM0I7QUFBQztBQUVPLHlCQUFRLFdBQWhCLFVBQWlCLEFBQWlCLFFBQUUsQUFBd0IsU0FBRSxBQUFlO0FBQzNFLEFBQU0sZUFBQyxBQUFNLE9BQUMsQUFBRyxJQUFDLEVBQUUsQUFBSyxPQUFFLEFBQUssT0FBRSxBQUFPLFNBQUUsQUFBTyxBQUFFLEFBQUMsQUFBQyxBQUN4RDtBQUFDO0FBeENVLEFBQVUsNkJBRHRCLE9BQVUsQUFBRSxjQUdHLFdBQUEsT0FBTSxPQUFDLGFBQVMsQUFBQyx3REFGcEIsQUFBVSxBQXlDdEI7QUFBRCxXQUFDO0FBekNELEFBeUNDO0FBekNZLHFCQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG4vLyBtb2R1bGVcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pbmRleCc7XG5pbXBvcnQgeyBMb2dUYXJnZXQsIExvZ0xldmVsIH0gZnJvbSAnLi9sb2cudGFyZ2V0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCBASW5qZWN0KExvZ1RhcmdldCkgcHJpdmF0ZSB0YXJnZXRzOiBMb2dUYXJnZXRbXSkge1xuICB9XG5cbiAgLy8gZGVidWcgKHN0YW5kYXJkIG91dHB1dClcbiAgcHVibGljIGRlYnVnKC4uLm1zZykge1xuICAgIGlmIChDb25maWcuREVCVUcuTEVWRUxfNCkge1xuICAgICAgLy8gY29uc29sZS5kZWJ1ZyBkb2VzIG5vdCB3b3JrIG9uIHtOfSBhcHBzLi4uIHVzZSBgbG9nYFxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKF8ubWFwKHRoaXMudGFyZ2V0cywgbG9nZ2VyID0+IHRoaXMubG9nRXZlbnQobG9nZ2VyLCBtc2csIExvZ0xldmVsLkRlYnVnKSkpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICAvLyBlcnJvclxuICBwdWJsaWMgZXJyb3IoLi4uZXJyKSB7XG4gICAgaWYgKENvbmZpZy5ERUJVRy5MRVZFTF80IHx8IENvbmZpZy5ERUJVRy5MRVZFTF8zKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXy5tYXAodGhpcy50YXJnZXRzLCBsb2dnZXIgPT4gdGhpcy5sb2dFdmVudChsb2dnZXIsIGVyciwgTG9nTGV2ZWwuRXJyb3IpKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIC8vIHdhcm5cbiAgcHVibGljIHdhcm4oLi4uZXJyKSB7XG4gICAgaWYgKENvbmZpZy5ERUJVRy5MRVZFTF80IHx8IENvbmZpZy5ERUJVRy5MRVZFTF8yKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXy5tYXAodGhpcy50YXJnZXRzLCBsb2dnZXIgPT4gdGhpcy5sb2dFdmVudChsb2dnZXIsIGVyciwgTG9nTGV2ZWwuV2FybmluZykpKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgLy8gaW5mb1xuICBwdWJsaWMgaW5mbyguLi5lcnIpIHtcbiAgICBpZiAoQ29uZmlnLkRFQlVHLkxFVkVMXzQgfHwgQ29uZmlnLkRFQlVHLkxFVkVMXzEpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChfLm1hcCh0aGlzLnRhcmdldHMsIGxvZ2dlciA9PiB0aGlzLmxvZ0V2ZW50KGxvZ2dlciwgZXJyLCBMb2dMZXZlbC5JbmZvKSkpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBwcml2YXRlIGxvZ0V2ZW50KHRhcmdldDogTG9nVGFyZ2V0LCBtZXNzYWdlOiBzdHJpbmcgfCBPYmplY3QsIGxldmVsOiBMb2dMZXZlbCkge1xuICAgIHJldHVybiB0YXJnZXQubG9nKHsgbGV2ZWw6IGxldmVsLCBtZXNzYWdlOiBtZXNzYWdlIH0pO1xuICB9XG59XG4iXX0=