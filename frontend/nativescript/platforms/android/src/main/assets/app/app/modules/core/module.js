Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// module
var index_1 = require("../shared/index");
var index_2 = require("./directives/index");
var index_3 = require("./services/index");
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var CoreModule = CoreModule_1 = (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule already loaded; Import in root module only.');
        }
    }
    // configuredProviders: *required to configure WindowService and ConsoleService per platform
    CoreModule.forRoot = function (configuredProviders) {
        return {
            ngModule: CoreModule_1,
            providers: configuredProviders
        };
    };
    return CoreModule;
}());
CoreModule = CoreModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            index_1.SharedModule
        ],
        declarations: index_2.CORE_DIRECTIVES.slice(),
        exports: index_2.CORE_DIRECTIVES.slice(),
        providers: index_3.CORE_PROVIDERS.slice()
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);
exports.CoreModule = CoreModule;
var CoreModule_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxVQUFVO0FBQ1Ysc0NBQWtGO0FBTWxGLFNBQVM7QUFDVCx5Q0FBK0M7QUFDL0MsNENBQXFEO0FBQ3JELDBDQUFrRDtBQVFsRDs7R0FFRztBQWdCSCxJQUFhLFVBQVU7SUFRbkIsb0JBQXFDLFlBQXdCO1FBQ3pELEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7UUFDOUUsQ0FBQztJQUNMLENBQUM7SUFYRCw0RkFBNEY7SUFDckYsa0JBQU8sR0FBZCxVQUFlLG1CQUErQjtRQUMxQyxNQUFNLENBQUM7WUFDSCxRQUFRLEVBQUUsWUFBVTtZQUNwQixTQUFTLEVBQUUsbUJBQW1CO1NBQ2pDLENBQUM7SUFDTixDQUFDO0lBTUwsaUJBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLFVBQVU7SUFkdEIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsb0JBQVk7U0FDZjtRQUNELFlBQVksRUFDTCx1QkFBZSxRQUNyQjtRQUNELE9BQU8sRUFDQSx1QkFBZSxRQUNyQjtRQUNELFNBQVMsRUFDRixzQkFBYyxRQUNwQjtLQUNKLENBQUM7SUFTZ0IsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7cUNBQWUsVUFBVTtHQVJwRCxVQUFVLENBYXRCO0FBYlksZ0NBQVUiLCJmaWxlIjoiYXBwL21vZHVsZXMvY29yZS9tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5kZXgnO1xuaW1wb3J0IHsgQ09SRV9QUk9WSURFUlMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vdXRpbHMvaW5kZXgnO1xuXG5pbnRlcmZhY2UgSUNvcmVNb2R1bGVPcHRpb25zIHtcbiAgICB3aW5kb3c/OiBhbnk7XG4gICAgY29uc29sZT86IGFueTtcbn1cblxuLyoqXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cbiAqL1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgU2hhcmVkTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgLi4uQ09SRV9ESVJFQ1RJVkVTXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIC4uLkNPUkVfRElSRUNUSVZFU1xuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLkNPUkVfUFJPVklERVJTLFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XG4gICAgLy8gY29uZmlndXJlZFByb3ZpZGVyczogKnJlcXVpcmVkIHRvIGNvbmZpZ3VyZSBXaW5kb3dTZXJ2aWNlIGFuZCBDb25zb2xlU2VydmljZSBwZXIgcGxhdGZvcm1cbiAgICBzdGF0aWMgZm9yUm9vdChjb25maWd1cmVkUHJvdmlkZXJzOiBBcnJheTxhbnk+KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogQ29yZU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogY29uZmlndXJlZFByb3ZpZGVyc1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlKSB7XG4gICAgICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29yZU1vZHVsZSBhbHJlYWR5IGxvYWRlZDsgSW1wb3J0IGluIHJvb3QgbW9kdWxlIG9ubHkuJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
