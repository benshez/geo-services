Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../../core/index");
var services_1 = require("./services/services");
var LoaderComponent = (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.showMapPlaces = false;
        this.show = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loaderService.loaderState
            .subscribe(function (state) {
            _this.show = state.show;
        });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return LoaderComponent;
}());
LoaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-loader',
        templateUrl: index_1.Config.COMPONENT_ITEMS.TEMPLATE,
        styleUrls: [index_1.Config.COMPONENT_ITEMS.CSS]
    }),
    __metadata("design:paramtypes", [services_1.LoaderService])
], LoaderComponent);
exports.LoaderComponent = LoaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUE2RDtBQUc3RCw2Q0FBNkM7QUFFN0MsZ0RBQW9EO0FBUXBELElBQWEsZUFBZTtJQU94Qix5QkFDWSxhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVBqQyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUV0QyxTQUFJLEdBQVksS0FBSyxDQUFDO0lBTWxCLENBQUM7SUFFTCxrQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVzthQUM3QyxTQUFTLENBQUMsVUFBQyxLQUFtQjtZQUMzQixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFBQTtBQXJCWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLGNBQU0sQ0FBQyxlQUFlLENBQUMsUUFBUTtRQUM1QyxTQUFTLEVBQUUsQ0FBQyxjQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQztLQUMxQyxDQUFDO3FDQVM2Qix3QkFBYTtHQVIvQixlQUFlLENBcUIzQjtBQXJCWSwwQ0FBZSIsImZpbGUiOiJhcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcblxyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgSUxvYWRlclN0YXRlIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZXJ2aWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3NkLWxvYWRlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogQ29uZmlnLkNPTVBPTkVOVF9JVEVNUy5URU1QTEFURSxcclxuICAgIHN0eWxlVXJsczogW0NvbmZpZy5DT01QT05FTlRfSVRFTVMuQ1NTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBzaG93TWFwUGxhY2VzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgc2hvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBsb2FkZXJTZXJ2aWNlOiBMb2FkZXJTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5sb2FkZXJTZXJ2aWNlLmxvYWRlclN0YXRlXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHN0YXRlOiBJTG9hZGVyU3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdyA9IHN0YXRlLnNob3c7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
