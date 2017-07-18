Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// module
var window_service_1 = require("../services/window.service");
var PlatformDirective = (function () {
    function PlatformDirective(el, renderer, win) {
        this.el = el;
        this.renderer = renderer;
        this.win = win;
        var platformClass = 'web';
        var agent = win.navigator.userAgent.toLowerCase();
        if (agent.indexOf('electron') > -1) {
            platformClass = 'desktop';
        }
        else if (agent.indexOf('nativescript') > -1) {
            platformClass = 'nativescript';
        }
        renderer.setElementClass(el.nativeElement, platformClass, true);
    }
    return PlatformDirective;
}());
PlatformDirective = __decorate([
    core_1.Directive({
        selector: '[platform]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, window_service_1.WindowService])
], PlatformDirective);
exports.PlatformDirective = PlatformDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvZGlyZWN0aXZlcy9wbGF0Zm9ybS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixzQ0FBZ0U7QUFFaEUsU0FBUztBQUNULDZEQUEyRDtBQUszRCxJQUFhLGlCQUFpQjtJQUU1QiwyQkFBb0IsRUFBYyxFQUFVLFFBQWtCLEVBQVUsR0FBa0I7UUFBdEUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFlO1FBQ3hGLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBQzVCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsYUFBYSxHQUFHLGNBQWMsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLGlCQUFpQjtJQUg3QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7S0FDdkIsQ0FBQztxQ0FHd0IsaUJBQVUsRUFBb0IsZUFBUSxFQUFlLDhCQUFhO0dBRi9FLGlCQUFpQixDQVk3QjtBQVpZLDhDQUFpQiIsImZpbGUiOiJhcHAvbW9kdWxlcy9jb3JlL2RpcmVjdGl2ZXMvcGxhdGZvcm0uZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy93aW5kb3cuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twbGF0Zm9ybV0nXG59KVxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciwgcHJpdmF0ZSB3aW46IFdpbmRvd1NlcnZpY2UpIHtcbiAgICBsZXQgcGxhdGZvcm1DbGFzcyA9ICd3ZWInO1xuICAgIGxldCBhZ2VudCA9IHdpbi5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGFnZW50LmluZGV4T2YoJ2VsZWN0cm9uJykgPiAtMSkge1xuICAgICAgcGxhdGZvcm1DbGFzcyA9ICdkZXNrdG9wJztcbiAgICB9IGVsc2UgaWYgKGFnZW50LmluZGV4T2YoJ25hdGl2ZXNjcmlwdCcpID4gLTEpIHtcbiAgICAgIHBsYXRmb3JtQ2xhc3MgPSAnbmF0aXZlc2NyaXB0JztcbiAgICB9IFxuICAgIHJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCBwbGF0Zm9ybUNsYXNzLCB0cnVlKTtcbiAgfVxufVxuIl19
