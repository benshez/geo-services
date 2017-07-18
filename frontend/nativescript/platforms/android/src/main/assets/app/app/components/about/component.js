Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../modules/core/index");
var AboutComponent = (function () {
    function AboutComponent(injector) {
        this.injector = injector;
        // This is here as an example
        // if (this.page) {
        //   this.page.actionBarHidden = true;
        // }
    }
    Object.defineProperty(AboutComponent.prototype, "page", {
        get: function () {
            if (index_1.Config.PageClass) {
                if (!this._page) {
                    this._page = this.injector.get(index_1.Config.PageClass);
                }
                return this._page;
            }
        },
        enumerable: true,
        configurable: true
    });
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-about',
        templateUrl: index_1.Config.COMPONENT_ITEMS.TEMPLATE,
        styleUrls: [index_1.Config.COMPONENT_ITEMS.CSS]
    }),
    __metadata("design:paramtypes", [core_1.Injector])
], AboutComponent);
exports.AboutComponent = AboutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Fib3V0L2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW9EO0FBQ3BELGtEQUFrRDtBQVFsRCxJQUFhLGNBQWM7SUFldkIsd0JBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEMsNkJBQTZCO1FBQzdCLG1CQUFtQjtRQUNuQixzQ0FBc0M7UUFDdEMsSUFBSTtJQUNSLENBQUM7SUFmRCxzQkFBWSxnQ0FBSTthQUFoQjtZQUNJLEVBQUUsQ0FBQyxDQUFDLGNBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNyRCxDQUFDO2dCQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUM7UUFDTCxDQUFDOzs7T0FBQTtJQVFMLHFCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFBQTtBQXJCWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLGNBQU0sQ0FBQyxlQUFlLENBQUMsUUFBUTtRQUM1QyxTQUFTLEVBQUUsQ0FBQyxjQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQztLQUMxQyxDQUFDO3FDQWdCZ0MsZUFBUTtHQWY3QixjQUFjLENBcUIxQjtBQXJCWSx3Q0FBYyIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hYm91dC9jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9tb2R1bGVzL2NvcmUvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc2QtYWJvdXQnLFxuICAgIHRlbXBsYXRlVXJsOiBDb25maWcuQ09NUE9ORU5UX0lURU1TLlRFTVBMQVRFLFxyXG4gICAgc3R5bGVVcmxzOiBbQ29uZmlnLkNPTVBPTkVOVF9JVEVNUy5DU1NdXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IHtcblxuICAgIC8vIEp1c3Qgb25lIHdheSB5b3UgY291bGQgaGFuZGxlIHRoZSB7Tn0gYHVpL3BhZ2VgIFBhZ2UgY2xhc3NcbiAgICAvLyBpbiBhIHNoYXJlZCBjb21wb25lbnQuLi5cbiAgICBwcml2YXRlIF9wYWdlOiBhbnk7XG4gICAgcHJpdmF0ZSBnZXQgcGFnZSgpIHtcbiAgICAgICAgaWYgKENvbmZpZy5QYWdlQ2xhc3MpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fcGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhZ2UgPSB0aGlzLmluamVjdG9yLmdldChDb25maWcuUGFnZUNsYXNzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgICAgICAvLyBUaGlzIGlzIGhlcmUgYXMgYW4gZXhhbXBsZVxuICAgICAgICAvLyBpZiAodGhpcy5wYWdlKSB7XG4gICAgICAgIC8vICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIC8vIH1cbiAgICB9XG59XG4iXX0=
