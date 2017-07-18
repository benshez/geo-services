Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// libs
var store_1 = require("@ngrx/store");
var core_2 = require("@ngx-translate/core");
// app
var index_1 = require("../../analytics/index");
var window_service_1 = require("../../core/services/window.service");
// module
var category_common_1 = require("../common/category.common");
var index_2 = require("../states/index");
var index_3 = require("../actions/index");
// provide supported languages at runtime
exports.Languages = new core_1.InjectionToken('Languages');
// optional view helper for language handling
// {N} uses this to provide specific classes to SegmentedBar view bindings
exports.LanguageViewHelper = new core_1.InjectionToken('LanguageViewHelper');
exports.LanguageProviders = [
    { provide: exports.Languages, useValue: [] },
    { provide: exports.LanguageViewHelper, useValue: null }
];
// service
var MultilingualService = (function (_super) {
    __extends(MultilingualService, _super);
    function MultilingualService(analytics, translate, win, store) {
        var _this = _super.call(this, analytics) || this;
        _this.analytics = analytics;
        _this.translate = translate;
        _this.win = win;
        _this.store = store;
        _this.category = category_common_1.CATEGORY;
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang(index_2.initialState.lang);
        // use browser/platform lang if available
        var userLang = win.navigator.language.split('-')[0];
        // subscribe to changes
        store.select(function (s) { return s.i18n; }).subscribe(function (state) {
            // update ng2-translate which will cause translations to occur wherever the TranslatePipe is used in the view
            _this.translate.use(state.lang);
        });
        // init the lang
        _this.store.dispatch(new index_3.ChangeAction(userLang));
        return _this;
    }
    return MultilingualService;
}(index_1.Analytics));
MultilingualService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.AnalyticsService,
        core_2.TranslateService,
        window_service_1.WindowService,
        store_1.Store])
], MultilingualService);
exports.MultilingualService = MultilingualService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vc2VydmljZXMvbXVsdGlsaW5ndWFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixzQ0FBMkQ7QUFFM0QsT0FBTztBQUNQLHFDQUFvQztBQUNwQyw0Q0FBdUQ7QUFFdkQsTUFBTTtBQUNOLCtDQUFvRTtBQUVwRSxxRUFBbUU7QUFHbkUsU0FBUztBQUNULDZEQUFxRDtBQUNyRCx5Q0FBbUU7QUFDbkUsMENBQWdEO0FBRWhELHlDQUF5QztBQUM1QixRQUFBLFNBQVMsR0FBaUMsSUFBSSxxQkFBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZGLDZDQUE2QztBQUM3QywwRUFBMEU7QUFDN0QsUUFBQSxrQkFBa0IsR0FBK0IsSUFBSSxxQkFBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDMUYsUUFBQSxpQkFBaUIsR0FBRztJQUMvQixFQUFFLE9BQU8sRUFBRSxpQkFBUyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7SUFDcEMsRUFBRSxPQUFPLEVBQUUsMEJBQWtCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtDQUNoRCxDQUFDO0FBRUYsVUFBVTtBQUVWLElBQWEsbUJBQW1CO0lBQVMsdUNBQVM7SUFFaEQsNkJBQ1MsU0FBMkIsRUFDMUIsU0FBMkIsRUFDM0IsR0FBa0IsRUFDbEIsS0FBdUI7UUFKakMsWUFNRSxrQkFBTSxTQUFTLENBQUMsU0FpQmpCO1FBdEJRLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzFCLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFNBQUcsR0FBSCxHQUFHLENBQWU7UUFDbEIsV0FBSyxHQUFMLEtBQUssQ0FBa0I7UUFHL0IsS0FBSSxDQUFDLFFBQVEsR0FBRywwQkFBUSxDQUFDO1FBRXpCLGtHQUFrRztRQUNsRyxTQUFTLENBQUMsY0FBYyxDQUFDLG9CQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUMseUNBQXlDO1FBQ3pDLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwRCx1QkFBdUI7UUFDdkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBeUI7WUFDNUQsNkdBQTZHO1lBQzdHLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztRQUVILGdCQUFnQjtRQUNoQixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7SUFDbEQsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsQ0ExQndDLGlCQUFTLEdBMEJqRDtBQTFCWSxtQkFBbUI7SUFEL0IsaUJBQVUsRUFBRTtxQ0FJUyx3QkFBZ0I7UUFDZix1QkFBZ0I7UUFDdEIsOEJBQWE7UUFDWCxhQUFLO0dBTlgsbUJBQW1CLENBMEIvQjtBQTFCWSxrREFBbUIiLCJmaWxlIjoiYXBwL21vZHVsZXMvaTE4bi9zZXJ2aWNlcy9tdWx0aWxpbmd1YWwuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGxpYnNcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG4vLyBhcHBcbmltcG9ydCB7IEFuYWx5dGljcywgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uLy4uL2FuYWx5dGljcy9pbmRleCc7XG5pbXBvcnQgeyBJTGFuZyB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvd2luZG93LnNlcnZpY2UnO1xuaW1wb3J0IHsgSUFwcFN0YXRlIH0gZnJvbSAnLi4vLi4vbmdyeC9pbmRleCc7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgQ0FURUdPUlkgfSBmcm9tICcuLi9jb21tb24vY2F0ZWdvcnkuY29tbW9uJztcbmltcG9ydCB7IElNdWx0aWxpbmd1YWxTdGF0ZSwgaW5pdGlhbFN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL2luZGV4JztcbmltcG9ydCB7IENoYW5nZUFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG4vLyBwcm92aWRlIHN1cHBvcnRlZCBsYW5ndWFnZXMgYXQgcnVudGltZVxuZXhwb3J0IGNvbnN0IExhbmd1YWdlczogSW5qZWN0aW9uVG9rZW48QXJyYXk8SUxhbmc+PiA9IG5ldyBJbmplY3Rpb25Ub2tlbignTGFuZ3VhZ2VzJyk7XG4vLyBvcHRpb25hbCB2aWV3IGhlbHBlciBmb3IgbGFuZ3VhZ2UgaGFuZGxpbmdcbi8vIHtOfSB1c2VzIHRoaXMgdG8gcHJvdmlkZSBzcGVjaWZpYyBjbGFzc2VzIHRvIFNlZ21lbnRlZEJhciB2aWV3IGJpbmRpbmdzXG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VWaWV3SGVscGVyOiBJbmplY3Rpb25Ub2tlbjxBcnJheTxhbnk+PiA9IG5ldyBJbmplY3Rpb25Ub2tlbignTGFuZ3VhZ2VWaWV3SGVscGVyJyk7XG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VQcm92aWRlcnMgPSBbXG4gIHsgcHJvdmlkZTogTGFuZ3VhZ2VzLCB1c2VWYWx1ZTogW10gfSxcbiAgeyBwcm92aWRlOiBMYW5ndWFnZVZpZXdIZWxwZXIsIHVzZVZhbHVlOiBudWxsIH1cbl07XG5cbi8vIHNlcnZpY2VcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNdWx0aWxpbmd1YWxTZXJ2aWNlIGV4dGVuZHMgQW5hbHl0aWNzIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgd2luOiBXaW5kb3dTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPElBcHBTdGF0ZT5cbiAgKSB7XG4gICAgc3VwZXIoYW5hbHl0aWNzKTtcbiAgICB0aGlzLmNhdGVnb3J5ID0gQ0FURUdPUlk7XG5cbiAgICAvLyB0aGlzIGxhbmd1YWdlIHdpbGwgYmUgdXNlZCBhcyBhIGZhbGxiYWNrIHdoZW4gYSB0cmFuc2xhdGlvbiBpc24ndCBmb3VuZCBpbiB0aGUgY3VycmVudCBsYW5ndWFnZVxuICAgIHRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZyhpbml0aWFsU3RhdGUubGFuZyk7XG5cbiAgICAvLyB1c2UgYnJvd3Nlci9wbGF0Zm9ybSBsYW5nIGlmIGF2YWlsYWJsZVxuICAgIGxldCB1c2VyTGFuZyA9IHdpbi5uYXZpZ2F0b3IubGFuZ3VhZ2Uuc3BsaXQoJy0nKVswXTtcblxuICAgIC8vIHN1YnNjcmliZSB0byBjaGFuZ2VzXG4gICAgc3RvcmUuc2VsZWN0KHMgPT4gcy5pMThuKS5zdWJzY3JpYmUoKHN0YXRlOiBJTXVsdGlsaW5ndWFsU3RhdGUpID0+IHtcbiAgICAgIC8vIHVwZGF0ZSBuZzItdHJhbnNsYXRlIHdoaWNoIHdpbGwgY2F1c2UgdHJhbnNsYXRpb25zIHRvIG9jY3VyIHdoZXJldmVyIHRoZSBUcmFuc2xhdGVQaXBlIGlzIHVzZWQgaW4gdGhlIHZpZXdcbiAgICAgIHRoaXMudHJhbnNsYXRlLnVzZShzdGF0ZS5sYW5nKTtcbiAgICB9KTtcblxuICAgIC8vIGluaXQgdGhlIGxhbmdcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VBY3Rpb24odXNlckxhbmcpKTtcbiAgfVxufVxuIl19
