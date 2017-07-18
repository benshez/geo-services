Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var LoaderService = (function () {
    function LoaderService() {
        this.loaderSubject = new Subject_1.Subject();
        this.loaderState = this.loaderSubject.asObservable();
    }
    LoaderService.prototype.show = function () {
        this.loaderSubject.next({ show: true });
    };
    LoaderService.prototype.hide = function () {
        this.loaderSubject.next({ show: false });
    };
    return LoaderService;
}());
LoaderService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], LoaderService);
exports.LoaderService = LoaderService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9zZXJ2aWNlcy9zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLHdDQUF1QztBQU12QyxJQUFhLGFBQWE7SUFNdEI7UUFKUSxrQkFBYSxHQUFHLElBQUksaUJBQU8sRUFBZ0IsQ0FBQztRQUVwRCxnQkFBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFaEMsQ0FBQztJQUVqQiw0QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQWUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFlLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSxhQUFhO0lBRnpCLGlCQUFVLEVBQUU7O0dBRUEsYUFBYSxDQWV6QjtBQWZZLHNDQUFhIiwiZmlsZSI6ImFwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9zZXJ2aWNlcy9zZXJ2aWNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XHJcblxyXG5pbXBvcnQgeyBJTG9hZGVyU3RhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ludGVyZmFjZXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRlclNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgbG9hZGVyU3ViamVjdCA9IG5ldyBTdWJqZWN0PElMb2FkZXJTdGF0ZT4oKTtcclxuXHJcbiAgICBsb2FkZXJTdGF0ZSA9IHRoaXMubG9hZGVyU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkZXJTdWJqZWN0Lm5leHQoPElMb2FkZXJTdGF0ZT57IHNob3c6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLmxvYWRlclN1YmplY3QubmV4dCg8SUxvYWRlclN0YXRlPnsgc2hvdzogZmFsc2UgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
