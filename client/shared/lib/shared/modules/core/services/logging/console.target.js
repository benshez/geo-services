"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var log_target_1 = require("./log.target");
var index_1 = require("../../services/index");
var ConsoleTarget = function (_super) {
    __extends(ConsoleTarget, _super);
    function ConsoleTarget(console, options) {
        var _this = _super.call(this, options) || this;
        _this.console = console;
        return _this;
    }
    ConsoleTarget.prototype.writeToLog = function (event) {
        switch (event.level) {
            case log_target_1.LogLevel.Debug:
                this.console.log(event.message);
                break;
            case log_target_1.LogLevel.Info:
                // tslint:disable-next-line:no-console
                this.console.info(event.message);
                break;
            case log_target_1.LogLevel.Warning:
                this.console.warn(event.message);
                break;
            case log_target_1.LogLevel.Error:
                this.console.error(event.message);
                break;
        }
        return Promise.resolve();
    };
    ConsoleTarget = __decorate([core_1.Injectable(), __metadata("design:paramtypes", [index_1.ConsoleService, log_target_1.LogTargetOptions])], ConsoleTarget);
    return ConsoleTarget;
}(log_target_1.LogTargetBase);
exports.ConsoleTarget = ConsoleTarget;
function createConsoleTarget(level, consoleService) {
    return new ConsoleTarget(consoleService, { minLogLevel: level });
}
exports.createConsoleTarget = createConsoleTarget;
function provideConsoleTarget(logLevel) {
    return {
        provide: log_target_1.LogTarget, deps: [index_1.ConsoleService],
        multi: true,
        useFactory: function (c) {
            return new ConsoleTarget(c, { minLogLevel: logLevel });
        }
    };
}
exports.provideConsoleTarget = provideConsoleTarget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS50YXJnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25zb2xlLnRhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQkFBcUQ7QUFDckQsMkJBQThGO0FBQzlGLHNCQUFzRDtBQUd0RDtBQUFtQyw2QkFBYTtBQUM5QywyQkFBb0IsQUFBdUIsU0FBRSxBQUF5QjtBQUF0RSxvQkFDRSxrQkFBTSxBQUFPLEFBQUMsWUFDZjtBQUZtQixjQUFPLFVBQVAsQUFBTyxBQUFnQjtlQUUzQztBQUFDO0FBRUQsNEJBQVUsYUFBVixVQUFXLEFBQWU7QUFDeEIsQUFBTSxBQUFDLGdCQUFDLEFBQUssTUFBQyxBQUFLLEFBQUMsQUFBQyxBQUFDO0FBQ3BCLGlCQUFLLGFBQVEsU0FBQyxBQUFLO0FBQ2pCLEFBQUkscUJBQUMsQUFBTyxRQUFDLEFBQUcsSUFBQyxBQUFLLE1BQUMsQUFBTyxBQUFDLEFBQUM7QUFDaEMsQUFBSyxBQUFDO0FBQ1IsaUJBQUssYUFBUSxTQUFDLEFBQUk7QUFDaEIsQUFBc0M7QUFDdEMsQUFBSSxxQkFBQyxBQUFPLFFBQUMsQUFBSSxLQUFDLEFBQUssTUFBQyxBQUFPLEFBQUMsQUFBQztBQUNqQyxBQUFLLEFBQUM7QUFDUixpQkFBSyxhQUFRLFNBQUMsQUFBTztBQUNuQixBQUFJLHFCQUFDLEFBQU8sUUFBQyxBQUFJLEtBQUMsQUFBSyxNQUFDLEFBQU8sQUFBQyxBQUFDO0FBQ2pDLEFBQUssQUFBQztBQUNSLGlCQUFLLGFBQVEsU0FBQyxBQUFLO0FBQ2pCLEFBQUkscUJBQUMsQUFBTyxRQUFDLEFBQUssTUFBQyxBQUFLLE1BQUMsQUFBTyxBQUFDLEFBQUM7QUFDbEMsQUFBSyxBQUFDLEFBQ1YsQUFBQzs7QUFDRCxBQUFNLGVBQUMsQUFBTyxRQUFDLEFBQU8sQUFBRSxBQUFDLEFBQzNCO0FBQUM7QUF0QlUsQUFBYSxnQ0FEekIsT0FBVSxBQUFFLCtDQUVrQixRQUFjLGdCQUFXLGFBQWdCLHFCQUQzRCxBQUFhLEFBdUJ6QjtBQUFELFdBQUM7QUF2QkQsQUF1QkMsRUF2QmtDLGFBQWEsQUF1Qi9DO0FBdkJZLHdCQUFhO0FBeUIxQiw2QkFBb0MsQUFBZSxPQUFFLEFBQThCO0FBQ2pGLEFBQU0sV0FBQyxJQUFJLEFBQWEsY0FBQyxBQUFjLGdCQUFFLEVBQUUsQUFBVyxhQUFFLEFBQUssQUFBRSxBQUFDLEFBQUMsQUFDbkU7QUFBQztBQUZELDhCQUVDO0FBRUQsOEJBQXFDLEFBQWtCO0FBQ3JELEFBQU07QUFDSixBQUFPLGlCQUFFLGFBQVMsV0FBRSxBQUFJLE1BQUUsQ0FBQyxRQUFjLEFBQUM7QUFDMUMsQUFBSyxlQUFFLEFBQUk7QUFDWCxBQUFVLG9CQUFFLFVBQUMsQUFBaUI7QUFBSyxtQkFBQSxJQUFJLEFBQWEsY0FBQyxBQUFDLEdBQUUsRUFBRSxBQUFXLGFBQWxDLEFBQW9DLEFBQVEsQUFBRSxBQUFDO0FBQUEsQUFDbkYsQUFBQyxBQUNKO0FBTFM7QUFLUjtBQU5ELCtCQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZ1RhcmdldEJhc2UsIExvZ0V2ZW50LCBMb2dMZXZlbCwgTG9nVGFyZ2V0T3B0aW9ucywgTG9nVGFyZ2V0IH0gZnJvbSAnLi9sb2cudGFyZ2V0JztcbmltcG9ydCB7IENvbnNvbGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uc29sZVRhcmdldCBleHRlbmRzIExvZ1RhcmdldEJhc2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnNvbGU6IENvbnNvbGVTZXJ2aWNlLCBvcHRpb25zOiBMb2dUYXJnZXRPcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gIH1cblxuICB3cml0ZVRvTG9nKGV2ZW50OiBMb2dFdmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQubGV2ZWwpIHtcbiAgICAgIGNhc2UgTG9nTGV2ZWwuRGVidWc6XG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coZXZlbnQubWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dMZXZlbC5JbmZvOlxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICB0aGlzLmNvbnNvbGUuaW5mbyhldmVudC5tZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ0xldmVsLldhcm5pbmc6XG4gICAgICAgIHRoaXMuY29uc29sZS53YXJuKGV2ZW50Lm1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9nTGV2ZWwuRXJyb3I6XG4gICAgICAgIHRoaXMuY29uc29sZS5lcnJvcihldmVudC5tZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29uc29sZVRhcmdldChsZXZlbDogTG9nTGV2ZWwsIGNvbnNvbGVTZXJ2aWNlOiBDb25zb2xlU2VydmljZSkge1xuICByZXR1cm4gbmV3IENvbnNvbGVUYXJnZXQoY29uc29sZVNlcnZpY2UsIHsgbWluTG9nTGV2ZWw6IGxldmVsIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbnNvbGVUYXJnZXQobG9nTGV2ZWw6IExvZ0xldmVsKTogUHJvdmlkZXIge1xuICByZXR1cm4ge1xuICAgIHByb3ZpZGU6IExvZ1RhcmdldCwgZGVwczogW0NvbnNvbGVTZXJ2aWNlXSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgICB1c2VGYWN0b3J5OiAoYzogQ29uc29sZVNlcnZpY2UpID0+IG5ldyBDb25zb2xlVGFyZ2V0KGMsIHsgbWluTG9nTGV2ZWw6IGxvZ0xldmVsIH0pXG4gIH07XG59XG4iXX0=