"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var log_target_1 = require("./log.target");
var index_1 = require("../../services/index");
var ConsoleTarget = (function (_super) {
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
    ConsoleTarget = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [index_1.ConsoleService, log_target_1.LogTargetOptions])
    ], ConsoleTarget);
    return ConsoleTarget;
}(log_target_1.LogTargetBase));
exports.ConsoleTarget = ConsoleTarget;
function createConsoleTarget(level, consoleService) {
    return new ConsoleTarget(consoleService, { minLogLevel: level });
}
exports.createConsoleTarget = createConsoleTarget;
function provideConsoleTarget(logLevel) {
    return {
        provide: log_target_1.LogTarget, deps: [index_1.ConsoleService],
        multi: true,
        useFactory: function (c) { return new ConsoleTarget(c, { minLogLevel: logLevel }); }
    };
}
exports.provideConsoleTarget = provideConsoleTarget;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS50YXJnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25zb2xlLnRhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRDtBQUNyRCwyQ0FBOEY7QUFDOUYsOENBQXNEO0FBR3REO0lBQW1DLGlDQUFhO0lBQzlDLHVCQUFvQixPQUF1QixFQUFFLE9BQXlCO1FBQXRFLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLFNBQ2Y7UUFGbUIsYUFBTyxHQUFQLE9BQU8sQ0FBZ0I7O0lBRTNDLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsS0FBZTtRQUN4QixNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLHFCQUFRLENBQUMsS0FBSztnQkFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoQyxLQUFLLENBQUM7WUFDUixLQUFLLHFCQUFRLENBQUMsSUFBSTtnQkFDaEIsc0NBQXNDO2dCQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQztZQUNSLEtBQUsscUJBQVEsQ0FBQyxPQUFPO2dCQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQztZQUNSLEtBQUsscUJBQVEsQ0FBQyxLQUFLO2dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQztRQUNWLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUF0QlUsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQUVrQixzQkFBYyxFQUFXLDZCQUFnQjtPQUQzRCxhQUFhLENBdUJ6QjtJQUFELG9CQUFDO0NBQUEsQUF2QkQsQ0FBbUMsMEJBQWEsR0F1Qi9DO0FBdkJZLHNDQUFhO0FBeUIxQiw2QkFBb0MsS0FBZSxFQUFFLGNBQThCO0lBQ2pGLE1BQU0sQ0FBQyxJQUFJLGFBQWEsQ0FBQyxjQUFjLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNuRSxDQUFDO0FBRkQsa0RBRUM7QUFFRCw4QkFBcUMsUUFBa0I7SUFDckQsTUFBTSxDQUFDO1FBQ0wsT0FBTyxFQUFFLHNCQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsc0JBQWMsQ0FBQztRQUMxQyxLQUFLLEVBQUUsSUFBSTtRQUNYLFVBQVUsRUFBRSxVQUFDLENBQWlCLElBQUssT0FBQSxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBL0MsQ0FBK0M7S0FDbkYsQ0FBQztBQUNKLENBQUM7QUFORCxvREFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2dUYXJnZXRCYXNlLCBMb2dFdmVudCwgTG9nTGV2ZWwsIExvZ1RhcmdldE9wdGlvbnMsIExvZ1RhcmdldCB9IGZyb20gJy4vbG9nLnRhcmdldCc7XG5pbXBvcnQgeyBDb25zb2xlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnNvbGVUYXJnZXQgZXh0ZW5kcyBMb2dUYXJnZXRCYXNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25zb2xlOiBDb25zb2xlU2VydmljZSwgb3B0aW9uczogTG9nVGFyZ2V0T3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICB9XG5cbiAgd3JpdGVUb0xvZyhldmVudDogTG9nRXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmxldmVsKSB7XG4gICAgICBjYXNlIExvZ0xldmVsLkRlYnVnOlxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGV2ZW50Lm1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9nTGV2ZWwuSW5mbzpcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgdGhpcy5jb25zb2xlLmluZm8oZXZlbnQubWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dMZXZlbC5XYXJuaW5nOlxuICAgICAgICB0aGlzLmNvbnNvbGUud2FybihldmVudC5tZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ0xldmVsLkVycm9yOlxuICAgICAgICB0aGlzLmNvbnNvbGUuZXJyb3IoZXZlbnQubWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnNvbGVUYXJnZXQobGV2ZWw6IExvZ0xldmVsLCBjb25zb2xlU2VydmljZTogQ29uc29sZVNlcnZpY2UpIHtcbiAgcmV0dXJuIG5ldyBDb25zb2xlVGFyZ2V0KGNvbnNvbGVTZXJ2aWNlLCB7IG1pbkxvZ0xldmVsOiBsZXZlbCB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb25zb2xlVGFyZ2V0KGxvZ0xldmVsOiBMb2dMZXZlbCk6IFByb3ZpZGVyIHtcbiAgcmV0dXJuIHtcbiAgICBwcm92aWRlOiBMb2dUYXJnZXQsIGRlcHM6IFtDb25zb2xlU2VydmljZV0sXG4gICAgbXVsdGk6IHRydWUsXG4gICAgdXNlRmFjdG9yeTogKGM6IENvbnNvbGVTZXJ2aWNlKSA9PiBuZXcgQ29uc29sZVRhcmdldChjLCB7IG1pbkxvZ0xldmVsOiBsb2dMZXZlbCB9KVxuICB9O1xufVxuIl19