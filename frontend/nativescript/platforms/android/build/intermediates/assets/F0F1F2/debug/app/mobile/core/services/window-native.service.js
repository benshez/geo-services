Object.defineProperty(exports, "__esModule", { value: true });
// nativescript
var dialogs = require("ui/dialogs");
var platform_1 = require("platform");
var WindowNative = (function () {
    function WindowNative() {
    }
    Object.defineProperty(WindowNative.prototype, "navigator", {
        get: function () {
            return {
                language: platform_1.device.language,
                userAgent: 'nativescript'
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowNative.prototype, "location", {
        get: function () {
            return {
                host: 'nativescript'
            };
        },
        enumerable: true,
        configurable: true
    });
    WindowNative.prototype.alert = function (msg) {
        return dialogs.alert(msg);
    };
    WindowNative.prototype.confirm = function (msg) {
        return dialogs.confirm(msg);
    };
    return WindowNative;
}());
exports.WindowNative = WindowNative;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYmlsZS9jb3JlL3NlcnZpY2VzL3dpbmRvdy1uYXRpdmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZUFBZTtBQUNmLG9DQUFzQztBQUN0QyxxQ0FBa0M7QUFLbEM7SUFBQTtJQWtCQSxDQUFDO0lBakJHLHNCQUFXLG1DQUFTO2FBQXBCO1lBQ0ksTUFBTSxDQUFDO2dCQUNILFFBQVEsRUFBRSxpQkFBTSxDQUFDLFFBQVE7Z0JBQ3pCLFNBQVMsRUFBRSxjQUFjO2FBQzVCLENBQUM7UUFDTixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLGtDQUFRO2FBQW5CO1lBQ0ksTUFBTSxDQUFDO2dCQUNILElBQUksRUFBRSxjQUFjO2FBQ3ZCLENBQUM7UUFDTixDQUFDOzs7T0FBQTtJQUNNLDRCQUFLLEdBQVosVUFBYSxHQUFXO1FBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTSw4QkFBTyxHQUFkLFVBQWUsR0FBVztRQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLG9DQUFZIiwiZmlsZSI6Im1vYmlsZS9jb3JlL3NlcnZpY2VzL3dpbmRvdy1uYXRpdmUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG5hdGl2ZXNjcmlwdFxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tICd1aS9kaWFsb2dzJztcbmltcG9ydCB7IGRldmljZSB9IGZyb20gJ3BsYXRmb3JtJztcblxuLy8gYXBwXG5pbXBvcnQgeyBJV2luZG93IH0gZnJvbSAnLi4vLi4vLi4vYXBwL21vZHVsZXMvY29yZS9pbnRlcmZhY2VzL2l3aW5kb3cnO1xuXG5leHBvcnQgY2xhc3MgV2luZG93TmF0aXZlIGltcGxlbWVudHMgSVdpbmRvdyB7XG4gICAgcHVibGljIGdldCBuYXZpZ2F0b3IoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhbmd1YWdlOiBkZXZpY2UubGFuZ3VhZ2UsXG4gICAgICAgICAgICB1c2VyQWdlbnQ6ICduYXRpdmVzY3JpcHQnXG4gICAgICAgIH07XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgbG9jYXRpb24oKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhvc3Q6ICduYXRpdmVzY3JpcHQnXG4gICAgICAgIH07XG4gICAgfVxuICAgIHB1YmxpYyBhbGVydChtc2c6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBkaWFsb2dzLmFsZXJ0KG1zZyk7XG4gICAgfVxuICAgIHB1YmxpYyBjb25maXJtKG1zZzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIGRpYWxvZ3MuY29uZmlybShtc2cpO1xuICAgIH1cbn1cbiJdfQ==
