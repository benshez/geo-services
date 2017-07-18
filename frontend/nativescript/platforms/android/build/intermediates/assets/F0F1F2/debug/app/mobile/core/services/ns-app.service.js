Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ns_location_strategy_1 = require("nativescript-angular/router/ns-location-strategy");
// nativescript
var nsApp = require("application");
var platform_1 = require("platform");
if (platform_1.isIOS) {
    /*
      nsApp.ios.delegate = require('../PATH/TO/DELEGATE').CustomAppDelegate;
    */
}
// libs
var store_1 = require("@ngrx/store");
var core_2 = require("@ngx-translate/core");
// app
var app_service_1 = require("../../../app/modules/core/services/app.service");
var index_1 = require("../../../app/modules/core/index");
var index_2 = require("../../../app/modules/analytics/index");
var actionbar_util_1 = require("../utils/actionbar.util");
var multilingual = require("../../../app/modules/i18n/index");
var NSAppService = (function (_super) {
    __extends(NSAppService, _super);
    // Remember to update iOS and android constructors if you change dependencies
    // @Inject decorator is used on injectables here since this component merely extends AppComponent
    // Since @Component decorator is not used here, this ensures metadata will be generated
    function NSAppService(analytics, log, store, router, locationstrategy, translate, window) {
        var _this = _super.call(this, analytics, log) || this;
        _this.analytics = analytics;
        _this.log = log;
        _this.store = store;
        _this.router = router;
        _this.locationstrategy = locationstrategy;
        _this.translate = translate;
        _this.window = window;
        _this.nsApp = nsApp;
        _this.log.debug('NSAppService constructor');
        store.dispatch(new multilingual.ChangeAction(window.navigator.language.substr(0, 2)));
        // translate.onLangChange.skip(1).subscribe((args) => {
        //   this.log.info(`NSAppComponent translate.onLangChange(${args.lang})`);
        //   // translate.setDefaultLang(args.lang);
        //   translate.currentLang = args.lang;
        //   window.navigator.language = args.lang;
        // });
        /**
         *  Top status bar on iOS and/or Android
         * iOs {number}
         *   0: default
         *   1: light
         * Android {string}
         *   hex value
         */
        actionbar_util_1.ActionBarUtil.STATUSBAR_STYLE(platform_1.isIOS ? 1 : '#3280CF');
        // Fix: Reset all nsApp events before subscribing to avoid Duplicate events.
        // this.unsubscribeAll();
        nsApp.on(nsApp.launchEvent, function (eventData) {
            _this.log.info('TNS Application - Launched!');
        });
        nsApp.on(nsApp.suspendEvent, function (eventData) {
            _this.log.info('TNS Application - Suspended');
        });
        nsApp.on(nsApp.resumeEvent, function (eventData) {
            _this.log.info('TNS Application - Resumed');
        });
        nsApp.on(nsApp.lowMemoryEvent, function (eventData) {
            _this.log.warn('TNS Application - !!! LOW MEMORY !!!');
        });
        nsApp.on(nsApp.exitEvent, function (eventData) {
            _this.log.info('TNS Application - EXIT');
            _this.unsubscribeAll();
        });
        _this.setupAndroid();
        _this.setupIOS();
        return _this;
    }
    NSAppService.prototype.handleUncaughtError = function (err, platform) {
        this.log.info("TNS Application - Uncaught Error: " + err.message);
        var errorDescription = {
            message: err.message,
            android: platform === 'android',
            ios: platform === 'ios',
            stackTrace: err.stackTrace,
            nativeException: err.nativeException,
        };
        for (var _i = 0, _a = Object.keys(errorDescription); _i < _a.length; _i++) {
            var key = _a[_i];
            if (errorDescription[key]) {
                console.log("**** START - errorDescription." + key + " - ****\n\n\n" + errorDescription[key] + "\n\n\n*** END - " + key + " - ****");
            }
        }
    };
    NSAppService.prototype.unsubscribeAll = function () {
        nsApp.off(nsApp.launchEvent);
        nsApp.off(nsApp.suspendEvent);
        nsApp.off(nsApp.resumeEvent);
        nsApp.off(nsApp.lowMemoryEvent);
        nsApp.off(nsApp.exitEvent);
        nsApp.off(nsApp.uncaughtErrorEvent);
    };
    NSAppService.prototype.setupAndroid = function () {
        var _this = this;
        if (!platform_1.isAndroid) {
            return;
        }
        // Android specific code goes here
        this.nsApp.android.on(this.nsApp.AndroidApplication.activityBackPressedEvent, function (args) {
            var states = _this.locationstrategy._getStates();
            _this.log.info("Event: " + args.eventName + "\nActivity: " + args.activity + "\nstates: " + JSON.stringify(states));
        });
        this.nsApp.android.on(this.nsApp.AndroidApplication.activityResumedEvent, function (args) {
            if (args.activity.getIntent().getAction() === android.content.Intent.ACTION_VIEW) {
                var intentData = args.activity.getIntent().getData();
                console.log("Android received VIEW intent, with data: " + intentData);
            }
        });
        this.nsApp.on(this.nsApp.uncaughtErrorEvent, function (err) {
            _this.handleUncaughtError(err.android, 'android');
        });
    };
    NSAppService.prototype.setupIOS = function () {
        var _this = this;
        if (!platform_1.isIOS) {
            return;
        }
        this.nsApp.on(this.nsApp.uncaughtErrorEvent, function (err) {
            _this.handleUncaughtError(err.ios, 'ios');
        });
    };
    return NSAppService;
}(app_service_1.AppService));
NSAppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_2.AnalyticsService,
        index_1.LogService,
        store_1.Store,
        router_1.Router,
        ns_location_strategy_1.NSLocationStrategy,
        core_2.TranslateService,
        index_1.WindowService])
], NSAppService);
exports.NSAppService = NSAppService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYmlsZS9jb3JlL3NlcnZpY2VzL25zLWFwcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0MsMENBQXlDO0FBQ3pDLHlGQUFzRjtBQUV0RixlQUFlO0FBQ2YsbUNBQXFDO0FBQ3JDLHFDQUE0QztBQUU1QyxFQUFFLENBQUMsQ0FBQyxnQkFBSyxDQUFDLENBQUMsQ0FBQztJQUNWOztNQUVFO0FBQ0osQ0FBQztBQUVELE9BQU87QUFDUCxxQ0FBb0M7QUFDcEMsNENBQXVEO0FBRXZELE1BQU07QUFDTiw4RUFBNEU7QUFFNUUseURBQThGO0FBQzlGLDhEQUF3RTtBQUN4RSwwREFBd0Q7QUFDeEQsOERBQWdFO0FBS2hFLElBQWEsWUFBWTtJQUFTLGdDQUFVO0lBRzFDLDZFQUE2RTtJQUM3RSxpR0FBaUc7SUFDakcsdUZBQXVGO0lBQ3ZGLHNCQUFtQixTQUEyQixFQUMzQixHQUFlLEVBQ2YsS0FBaUIsRUFDakIsTUFBYyxFQUNkLGdCQUFvQyxFQUNwQyxTQUEyQixFQUMzQixNQUFxQjtRQU54QyxZQVFFLGtCQUFNLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FvRHRCO1FBNURrQixlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixTQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtRQUNwQyxlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixZQUFNLEdBQU4sTUFBTSxDQUFlO1FBWHhDLFdBQUssR0FBRyxLQUFLLENBQUM7UUFlWixLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRTNDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVB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QUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxVQUFDLEdBQUc7WUFDL0MsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sK0JBQVEsR0FBaEI7UUFBQSxpQkFRQztRQVBDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQUssQ0FBQyxDQUFDLENBQUM7WUFDWCxNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxVQUFDLEdBQUc7WUFDL0MsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQWhJQSxBQWdJQyxDQWhJaUMsd0JBQVUsR0FnSTNDO0FBaElZLFlBQVk7SUFEeEIsaUJBQVUsRUFBRTtxQ0FPbUIsd0JBQWdCO1FBQ3RCLGtCQUFVO1FBQ1IsYUFBSztRQUNKLGVBQU07UUFDSSx5Q0FBa0I7UUFDekIsdUJBQWdCO1FBQ25CLHFCQUFhO0dBWjdCLFlBQVksQ0FnSXhCO0FBaElZLG9DQUFZIiwiZmlsZSI6Im1vYmlsZS9jb3JlL3NlcnZpY2VzL25zLWFwcC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5TTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9ucy1sb2NhdGlvbi1zdHJhdGVneSc7XG5cbi8vIG5hdGl2ZXNjcmlwdFxuaW1wb3J0ICogYXMgbnNBcHAgZnJvbSAnYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gJ3BsYXRmb3JtJztcblxuaWYgKGlzSU9TKSB7XG4gIC8qXG4gICAgbnNBcHAuaW9zLmRlbGVnYXRlID0gcmVxdWlyZSgnLi4vUEFUSC9UTy9ERUxFR0FURScpLkN1c3RvbUFwcERlbGVnYXRlO1xuICAqL1xufVxuXG4vLyBsaWJzXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuLy8gYXBwXG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXBwL21vZHVsZXMvY29yZS9zZXJ2aWNlcy9hcHAuc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi8uLi9hcHAvbW9kdWxlcy9jb3JlL3V0aWxzJztcbmltcG9ydCB7IExvZ1NlcnZpY2UsIFdpbmRvd1NlcnZpY2UsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICcuLi8uLi8uLi9hcHAvbW9kdWxlcy9jb3JlL2luZGV4JztcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hcHAvbW9kdWxlcy9hbmFseXRpY3MvaW5kZXgnO1xuaW1wb3J0IHsgQWN0aW9uQmFyVXRpbCB9IGZyb20gJy4uL3V0aWxzL2FjdGlvbmJhci51dGlsJztcbmltcG9ydCAqIGFzIG11bHRpbGluZ3VhbCBmcm9tICcuLi8uLi8uLi9hcHAvbW9kdWxlcy9pMThuL2luZGV4JztcblxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTlNBcHBTZXJ2aWNlIGV4dGVuZHMgQXBwU2VydmljZSB7XG4gIG5zQXBwID0gbnNBcHA7XG5cbiAgLy8gUmVtZW1iZXIgdG8gdXBkYXRlIGlPUyBhbmQgYW5kcm9pZCBjb25zdHJ1Y3RvcnMgaWYgeW91IGNoYW5nZSBkZXBlbmRlbmNpZXNcbiAgLy8gQEluamVjdCBkZWNvcmF0b3IgaXMgdXNlZCBvbiBpbmplY3RhYmxlcyBoZXJlIHNpbmNlIHRoaXMgY29tcG9uZW50IG1lcmVseSBleHRlbmRzIEFwcENvbXBvbmVudFxuICAvLyBTaW5jZSBAQ29tcG9uZW50IGRlY29yYXRvciBpcyBub3QgdXNlZCBoZXJlLCB0aGlzIGVuc3VyZXMgbWV0YWRhdGEgd2lsbCBiZSBnZW5lcmF0ZWRcbiAgY29uc3RydWN0b3IocHVibGljIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSxcbiAgICAgICAgICAgICAgcHVibGljIGxvZzogTG9nU2VydmljZSxcbiAgICAgICAgICAgICAgcHVibGljIHN0b3JlOiBTdG9yZTxhbnk+LFxuICAgICAgICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHB1YmxpYyBsb2NhdGlvbnN0cmF0ZWd5OiBOU0xvY2F0aW9uU3RyYXRlZ3ksXG4gICAgICAgICAgICAgIHB1YmxpYyB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHB1YmxpYyB3aW5kb3c6IFdpbmRvd1NlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoYW5hbHl0aWNzLCBsb2cpO1xuXG4gICAgdGhpcy5sb2cuZGVidWcoJ05TQXBwU2VydmljZSBjb25zdHJ1Y3RvcicpO1xuXG4gICAgc3RvcmUuZGlzcGF0Y2gobmV3IG11bHRpbGluZ3VhbC5DaGFuZ2VBY3Rpb24od2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZS5zdWJzdHIoMCwgMikpKTtcblxuICAgIC8vIHRyYW5zbGF0ZS5vbkxhbmdDaGFuZ2Uuc2tpcCgxKS5zdWJzY3JpYmUoKGFyZ3MpID0+IHtcbiAgICAvLyAgIHRoaXMubG9nLmluZm8oYE5TQXBwQ29tcG9uZW50IHRyYW5zbGF0ZS5vbkxhbmdDaGFuZ2UoJHthcmdzLmxhbmd9KWApO1xuICAgIC8vICAgLy8gdHJhbnNsYXRlLnNldERlZmF1bHRMYW5nKGFyZ3MubGFuZyk7XG4gICAgLy8gICB0cmFuc2xhdGUuY3VycmVudExhbmcgPSBhcmdzLmxhbmc7XG5cbiAgICAvLyAgIHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UgPSBhcmdzLmxhbmc7XG4gICAgLy8gfSk7XG5cbiAgICAvKipcbiAgICAgKiAgVG9wIHN0YXR1cyBiYXIgb24gaU9TIGFuZC9vciBBbmRyb2lkXG4gICAgICogaU9zIHtudW1iZXJ9XG4gICAgICogICAwOiBkZWZhdWx0XG4gICAgICogICAxOiBsaWdodFxuICAgICAqIEFuZHJvaWQge3N0cmluZ31cbiAgICAgKiAgIGhleCB2YWx1ZVxuICAgICAqL1xuICAgIEFjdGlvbkJhclV0aWwuU1RBVFVTQkFSX1NUWUxFKFxuICAgICAgaXNJT1MgPyAxIDogJyMzMjgwQ0YnXG4gICAgKTtcblxuICAgIC8vIEZpeDogUmVzZXQgYWxsIG5zQXBwIGV2ZW50cyBiZWZvcmUgc3Vic2NyaWJpbmcgdG8gYXZvaWQgRHVwbGljYXRlIGV2ZW50cy5cbiAgICAvLyB0aGlzLnVuc3Vic2NyaWJlQWxsKCk7XG5cbiAgICBuc0FwcC5vbihuc0FwcC5sYXVuY2hFdmVudCwgKGV2ZW50RGF0YTogbnNBcHAuTGF1bmNoRXZlbnREYXRhKSA9PiB7XG4gICAgICB0aGlzLmxvZy5pbmZvKCdUTlMgQXBwbGljYXRpb24gLSBMYXVuY2hlZCEnKTtcbiAgICB9KTtcblxuICAgIG5zQXBwLm9uKG5zQXBwLnN1c3BlbmRFdmVudCwgKGV2ZW50RGF0YTogbnNBcHAuQXBwbGljYXRpb25FdmVudERhdGEpID0+IHtcbiAgICAgIHRoaXMubG9nLmluZm8oJ1ROUyBBcHBsaWNhdGlvbiAtIFN1c3BlbmRlZCcpO1xuICAgIH0pO1xuXG4gICAgbnNBcHAub24obnNBcHAucmVzdW1lRXZlbnQsIChldmVudERhdGE6IG5zQXBwLkFwcGxpY2F0aW9uRXZlbnREYXRhKSA9PiB7XG4gICAgICB0aGlzLmxvZy5pbmZvKCdUTlMgQXBwbGljYXRpb24gLSBSZXN1bWVkJyk7XG4gICAgfSk7XG5cbiAgICBuc0FwcC5vbihuc0FwcC5sb3dNZW1vcnlFdmVudCwgKGV2ZW50RGF0YTogbnNBcHAuQXBwbGljYXRpb25FdmVudERhdGEpID0+IHtcbiAgICAgIHRoaXMubG9nLndhcm4oJ1ROUyBBcHBsaWNhdGlvbiAtICEhISBMT1cgTUVNT1JZICEhIScpO1xuICAgIH0pO1xuXG4gICAgbnNBcHAub24obnNBcHAuZXhpdEV2ZW50LCAoZXZlbnREYXRhOiBhbnkpID0+IHtcbiAgICAgIHRoaXMubG9nLmluZm8oJ1ROUyBBcHBsaWNhdGlvbiAtIEVYSVQnKTtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVBbGwoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0dXBBbmRyb2lkKCk7XG4gICAgdGhpcy5zZXR1cElPUygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhbmRsZVVuY2F1Z2h0RXJyb3IoZXJyOiBhbnksIHBsYXRmb3JtOiAnYW5kcm9pZCcgfCAnaW9zJykge1xuICAgIHRoaXMubG9nLmluZm8oYFROUyBBcHBsaWNhdGlvbiAtIFVuY2F1Z2h0IEVycm9yOiAke2Vyci5tZXNzYWdlfWApO1xuXG4gICAgY29uc3QgZXJyb3JEZXNjcmlwdGlvbjogYW55ID0ge1xuICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2UsXG4gICAgICBhbmRyb2lkOiBwbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnLFxuICAgICAgaW9zOiBwbGF0Zm9ybSA9PT0gJ2lvcycsXG4gICAgICBzdGFja1RyYWNlOiBlcnIuc3RhY2tUcmFjZSxcbiAgICAgIG5hdGl2ZUV4Y2VwdGlvbjogZXJyLm5hdGl2ZUV4Y2VwdGlvbixcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZXJyb3JEZXNjcmlwdGlvbikpIHtcbiAgICAgIGlmIChlcnJvckRlc2NyaXB0aW9uW2tleV0pIHtcbiAgICAgICAgY29uc29sZS5sb2coYCoqKiogU1RBUlQgLSBlcnJvckRlc2NyaXB0aW9uLiR7a2V5fSAtICoqKipcXG5cXG5cXG4ke2Vycm9yRGVzY3JpcHRpb25ba2V5XX1cXG5cXG5cXG4qKiogRU5EIC0gJHtrZXl9IC0gKioqKmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVBbGwoKSB7XG4gICAgbnNBcHAub2ZmKG5zQXBwLmxhdW5jaEV2ZW50KTtcbiAgICBuc0FwcC5vZmYobnNBcHAuc3VzcGVuZEV2ZW50KTtcbiAgICBuc0FwcC5vZmYobnNBcHAucmVzdW1lRXZlbnQpO1xuICAgIG5zQXBwLm9mZihuc0FwcC5sb3dNZW1vcnlFdmVudCk7XG4gICAgbnNBcHAub2ZmKG5zQXBwLmV4aXRFdmVudCk7XG4gICAgbnNBcHAub2ZmKG5zQXBwLnVuY2F1Z2h0RXJyb3JFdmVudCk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwQW5kcm9pZCgpIHtcbiAgICBpZiAoIWlzQW5kcm9pZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEFuZHJvaWQgc3BlY2lmaWMgY29kZSBnb2VzIGhlcmVcblxuICAgIHRoaXMubnNBcHAuYW5kcm9pZC5vbih0aGlzLm5zQXBwLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsIChhcmdzKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZXMgPSB0aGlzLmxvY2F0aW9uc3RyYXRlZ3kuX2dldFN0YXRlcygpO1xuICAgICAgdGhpcy5sb2cuaW5mbyhgRXZlbnQ6ICR7YXJncy5ldmVudE5hbWV9XFxuQWN0aXZpdHk6ICR7YXJncy5hY3Rpdml0eX1cXG5zdGF0ZXM6ICR7SlNPTi5zdHJpbmdpZnkoc3RhdGVzKX1gKTtcbiAgICB9KTtcblxuICAgIHRoaXMubnNBcHAuYW5kcm9pZC5vbih0aGlzLm5zQXBwLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eVJlc3VtZWRFdmVudCwgKGFyZ3MpID0+IHtcbiAgICAgIGlmIChhcmdzLmFjdGl2aXR5LmdldEludGVudCgpLmdldEFjdGlvbigpID09PSBhbmRyb2lkLmNvbnRlbnQuSW50ZW50LkFDVElPTl9WSUVXKSB7XG4gICAgICAgIGNvbnN0IGludGVudERhdGEgPSBhcmdzLmFjdGl2aXR5LmdldEludGVudCgpLmdldERhdGEoKTtcbiAgICAgICAgY29uc29sZS5sb2coYEFuZHJvaWQgcmVjZWl2ZWQgVklFVyBpbnRlbnQsIHdpdGggZGF0YTogJHtpbnRlbnREYXRhfWApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5uc0FwcC5vbih0aGlzLm5zQXBwLnVuY2F1Z2h0RXJyb3JFdmVudCwgKGVycikgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVVbmNhdWdodEVycm9yKGVyci5hbmRyb2lkLCAnYW5kcm9pZCcpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cElPUygpIHtcbiAgICBpZiAoIWlzSU9TKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5uc0FwcC5vbih0aGlzLm5zQXBwLnVuY2F1Z2h0RXJyb3JFdmVudCwgKGVycikgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVVbmNhdWdodEVycm9yKGVyci5pb3MsICdpb3MnKTtcbiAgICB9KTtcbiAgfVxufVxuIl19
