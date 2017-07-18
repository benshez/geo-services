Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// app
var index_1 = require("../shared/index");
var index_2 = require("./services/index");
var multilingual_module_1 = require("../i18n/multilingual.module");
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var SampleModule = (function () {
    function SampleModule(parentModule) {
        if (parentModule) {
            throw new Error('SampleModule already loaded; Import in root module only.');
        }
    }
    return SampleModule;
}());
SampleModule = __decorate([
    core_1.NgModule({
        imports: [
            index_1.SharedModule,
            multilingual_module_1.MultilingualModule,
        ],
        providers: index_2.SAMPLE_PROVIDERS.slice(),
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
            core_1.CUSTOM_ELEMENTS_SCHEMA
        ],
        exports: [
            index_1.SharedModule
        ]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [SampleModule])
], SampleModule);
exports.SampleModule = SampleModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NhbXBsZS9zYW1wbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxVQUFVO0FBQ1Ysc0NBQXVHO0FBTXZHLE1BQU07QUFDTix5Q0FBK0M7QUFDL0MsMENBQW9EO0FBQ3BELG1FQUFpRTtBQUVqRTs7R0FFRztBQWtCSCxJQUFhLFlBQVk7SUFFckIsc0JBQXFDLFlBQTBCO1FBQzNELEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7UUFDaEYsQ0FBQztJQUNMLENBQUM7SUFDTCxtQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksWUFBWTtJQWhCeEIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsb0JBQVk7WUFDWix3Q0FBa0I7U0FDckI7UUFDRCxTQUFTLEVBQ0Ysd0JBQWdCLFFBQ3RCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1lBQ2hCLDZCQUFzQjtTQUN6QjtRQUNELE9BQU8sRUFBRTtZQUNMLG9CQUFZO1NBQ2Y7S0FDSixDQUFDO0lBR2dCLFdBQUEsZUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLGVBQVEsRUFBRSxDQUFBO3FDQUFlLFlBQVk7R0FGdEQsWUFBWSxDQU94QjtBQVBZLG9DQUFZIiwiZmlsZSI6ImFwcC9tb2R1bGVzL3NhbXBsZS9zYW1wbGUubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiwgTk9fRVJST1JTX1NDSEVNQSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLy8gYXBwXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgU0FNUExFX1BST1ZJREVSUyB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgTXVsdGlsaW5ndWFsTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9tdWx0aWxpbmd1YWwubW9kdWxlJztcblxuLyoqXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cbiAqL1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBNdWx0aWxpbmd1YWxNb2R1bGUsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uU0FNUExFX1BST1ZJREVSU1xuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BLFxuICAgICAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFNoYXJlZE1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU2FtcGxlTW9kdWxlIHtcblxuICAgIGNvbnN0cnVjdG9yKCBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IFNhbXBsZU1vZHVsZSkge1xuICAgICAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NhbXBsZU1vZHVsZSBhbHJlYWR5IGxvYWRlZDsgSW1wb3J0IGluIHJvb3QgbW9kdWxlIG9ubHkuJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
