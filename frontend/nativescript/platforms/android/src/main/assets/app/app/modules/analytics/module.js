Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// lib
var angulartics2_1 = require("angulartics2");
// module
var index_1 = require("./index");
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var AnalyticsModule = (function () {
    function AnalyticsModule() {
    }
    return AnalyticsModule;
}());
AnalyticsModule = __decorate([
    core_1.NgModule({
        imports: [
            angulartics2_1.Angulartics2Module.forRoot([
                angulartics2_1.Angulartics2Segment
            ])
        ],
        providers: index_1.ANALYTICS_PROVIDERS.slice()
    })
], AnalyticsModule);
exports.AnalyticsModule = AnalyticsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FuYWx5dGljcy9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixzQ0FBeUM7QUFFekMsTUFBTTtBQUNOLDZDQUF1RTtBQUV2RSxTQUFTO0FBQ1QsaUNBQThDO0FBRTlDOztHQUVHO0FBWUgsSUFBYSxlQUFlO0lBQTVCO0lBRUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxlQUFlO0lBVjNCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLGlDQUFrQixDQUFDLE9BQU8sQ0FBQztnQkFDdkIsa0NBQW1CO2FBQ3RCLENBQUM7U0FDTDtRQUNELFNBQVMsRUFDRiwyQkFBbUIsUUFDekI7S0FDSixDQUFDO0dBQ1csZUFBZSxDQUUzQjtBQUZZLDBDQUFlIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2FuYWx5dGljcy9tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBsaWJcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMk1vZHVsZSwgQW5ndWxhcnRpY3MyU2VnbWVudCB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgQU5BTFlUSUNTX1BST1ZJREVSUyB9IGZyb20gJy4vaW5kZXgnO1xuXG4vKipcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxuICovXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBBbmd1bGFydGljczJNb2R1bGUuZm9yUm9vdChbXG4gICAgICAgICAgICBBbmd1bGFydGljczJTZWdtZW50XG4gICAgICAgIF0pXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uQU5BTFlUSUNTX1BST1ZJREVSU1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQW5hbHl0aWNzTW9kdWxlIHtcblxufVxuIl19
