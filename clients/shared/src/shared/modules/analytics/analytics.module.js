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
var AnalyticsModule = (function () {
    function AnalyticsModule() {
    }
    AnalyticsModule = __decorate([
        core_1.NgModule({
            imports: [
                angulartics2_1.Angulartics2Module.forRoot([
                    angulartics2_1.Angulartics2Segment
                ])
            ],
            providers: [
                analytics_service_1.AnalyticsService
            ]
        })
    ], AnalyticsModule);
    return AnalyticsModule;
}());
exports.AnalyticsModule = AnalyticsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuYWx5dGljcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxVQUFVO0FBQ1Ysc0NBQXlDO0FBRXpDLE1BQU07QUFDTiw2Q0FBdUU7QUFFdkUsU0FBUztBQUNULHlEQUF1RDtBQUV2RDs7R0FFRztBQVdIO0lBQUE7SUFFQSxDQUFDO0lBRlksZUFBZTtRQVYzQixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsaUNBQWtCLENBQUMsT0FBTyxDQUFDO29CQUN6QixrQ0FBbUI7aUJBQ3BCLENBQUM7YUFDSDtZQUNELFNBQVMsRUFBRTtnQkFDVCxvQ0FBZ0I7YUFDakI7U0FDRixDQUFDO09BQ1csZUFBZSxDQUUzQjtJQUFELHNCQUFDO0NBQUEsQUFGRCxJQUVDO0FBRlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBsaWJcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMk1vZHVsZSwgQW5ndWxhcnRpY3MyU2VnbWVudCB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4vYW5hbHl0aWNzLnNlcnZpY2UnO1xuXG4vKipcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQW5ndWxhcnRpY3MyTW9kdWxlLmZvclJvb3QoW1xuICAgICAgQW5ndWxhcnRpY3MyU2VnbWVudFxuICAgIF0pXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEFuYWx5dGljc1NlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NNb2R1bGUge1xuXG59XG4iXX0=