Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// app
var log_service_1 = require("../../../core/services/logging/log.service");
var index_1 = require("../../../core/index");
var ToolbarComponent = (function () {
    function ToolbarComponent(log) {
        this.log = log;
    }
    ToolbarComponent.prototype.openLanguages = function (e) {
        this.log.debug('openLanguages');
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-toolbar',
        templateUrl: index_1.Config.COMPONENT_ITEMS.TEMPLATE,
        styleUrls: [index_1.Config.COMPONENT_ITEMS.CSS]
    }),
    __metadata("design:paramtypes", [log_service_1.LogService])
], ToolbarComponent);
exports.ToolbarComponent = ToolbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL3Rvb2xiYXIvY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMEM7QUFFMUMsTUFBTTtBQUNOLDBFQUF3RTtBQUV4RSw2Q0FBNkM7QUFRN0MsSUFBYSxnQkFBZ0I7SUFFekIsMEJBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQUksQ0FBQztJQUVqQyx3Q0FBYSxHQUFwQixVQUFxQixDQUFNO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTCx1QkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksZ0JBQWdCO0lBTjVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLGNBQU0sQ0FBQyxlQUFlLENBQUMsUUFBUTtRQUM1QyxTQUFTLEVBQUUsQ0FBQyxjQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQztLQUMxQyxDQUFDO3FDQUcyQix3QkFBVTtHQUYxQixnQkFBZ0IsQ0FPNUI7QUFQWSw0Q0FBZ0IiLCJmaWxlIjoiYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvdG9vbGJhci9jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gYXBwXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9sb2dnaW5nL2xvZy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzZC10b29sYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogQ29uZmlnLkNPTVBPTkVOVF9JVEVNUy5URU1QTEFURSxcclxuICAgIHN0eWxlVXJsczogW0NvbmZpZy5DT01QT05FTlRfSVRFTVMuQ1NTXVxufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFyQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nOiBMb2dTZXJ2aWNlKSB7IH1cblxuICAgIHB1YmxpYyBvcGVuTGFuZ3VhZ2VzKGU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1Zygnb3Blbkxhbmd1YWdlcycpO1xuICAgIH1cbn1cbiJdfQ==
