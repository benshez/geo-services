"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// lib
var angulartics2_1 = require("angulartics2");
// module
var analytics_service_1 = require("./analytics.service");
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var AnalyticsModule = function () {
    function AnalyticsModule() {}
    AnalyticsModule = __decorate([core_1.NgModule({
        imports: [angulartics2_1.Angulartics2Module.forRoot([angulartics2_1.Angulartics2Segment])],
        providers: [analytics_service_1.AnalyticsService]
    })], AnalyticsModule);
    return AnalyticsModule;
}();
exports.AnalyticsModule = AnalyticsModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuYWx5dGljcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsQUFBVTtBQUNWLHFCQUF5QztBQUV6QyxBQUFNO0FBQ04sNkJBQXVFO0FBRXZFLEFBQVM7QUFDVCxrQ0FBdUQ7QUFFdkQsQUFFRzs7O0FBV0g7QUFBQSwrQkFFQSxDQUFDO0FBRlksQUFBZSx5Q0FWbkI7QUFDUCxBQUFPLGlCQUFFLENBQ1AsZUFBa0IsbUJBQUMsQUFBTyxRQUFDLENBQ3pCLGVBQW1CLEFBQ3BCLEFBQUMsQUFDSDtBQUNELEFBQVMsbUJBQUUsQ0FDVCxvQkFBZ0IsQUFDakIsQUFDRixBQUFDO0FBVFEsS0FBVCxJQVVZLEFBQWUsQUFFM0I7QUFBRCxXQUFDO0FBRkQsQUFFQztBQUZZLDBCQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbGliXG5pbXBvcnQgeyBBbmd1bGFydGljczJNb2R1bGUsIEFuZ3VsYXJ0aWNzMlNlZ21lbnQgfSBmcm9tICdhbmd1bGFydGljczInO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuL2FuYWx5dGljcy5zZXJ2aWNlJztcblxuLyoqXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEFuZ3VsYXJ0aWNzMk1vZHVsZS5mb3JSb290KFtcbiAgICAgIEFuZ3VsYXJ0aWNzMlNlZ21lbnRcbiAgICBdKVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBbmFseXRpY3NTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQW5hbHl0aWNzTW9kdWxlIHtcblxufVxuIl19