Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// app
var index_1 = require("../../../../app/modules/core/index");
var models_1 = require("../../../../app/modules/core/services/api/models");
var service_1 = require("../../../../app/modules/map/services/service");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var NSMapLocationsComponent = (function () {
    function NSMapLocationsComponent(location, routerext) {
        var _this = this;
        this.location = location;
        this.routerext = routerext;
        this.showMapPlaces = false;
        this.onBindIndustries = function (keyword) {
            var args = {
                keyword: keyword,
                key: 'id',
                value: 'description',
                delay: 400,
                apiOptions: null,
                minQueryLength: 2,
                cacheKey: 'industries'.concat('_').concat('{query}'),
                DeepObjectName: ''
            };
            args.apiOptions = new models_1.ApiServiceParametersOptions();
            args.apiOptions.url = index_1.Config.API_END_POINTS.INDUSTRIES.concat('{query}');
            args.apiOptions.parameters = '';
            args.apiOptions.concatApi = true;
            return _this.location.onSearch(args);
        };
        this.onBindPlaces = function (keyword) {
            var args = {
                keyword: keyword,
                key: 'center',
                value: 'place_name',
                delay: 400,
                apiOptions: null,
                minQueryLength: 2,
                cacheKey: 'places'.concat('_').concat('{query}'),
                DeepObjectName: 'features'
            };
            args.apiOptions = new models_1.ApiServiceParametersOptions();
            args.apiOptions.url = index_1.Config.ENVIRONMENT().MAP_BOX_API.concat('{query}').concat('.json?access_token=').concat(index_1.Config.ENVIRONMENT().MAP_BOX_API_KEY); //Config.API_END_POINTS.INDUSTRIES.concat('{query}');
            args.apiOptions.parameters = '';
            args.apiOptions.concatApi = false;
            return _this.location.onSearch(args);
        };
        nativescript_geolocation_1.enableLocationRequest(true);
    }
    NSMapLocationsComponent.prototype.onIndustryChange = function (args) {
        this.showMapPlaces = false;
        if (args !== '') {
            index_1.Config.ROUTE_PARAMETERS.INDUSTRY = args.key;
            this.showMapPlaces = true;
        }
    };
    NSMapLocationsComponent.prototype.onPlaceChange = function (args) {
        if (args && this.showMapPlaces) {
            index_1.Config.ROUTE_PARAMETERS.LONGITUDE = args[0];
            index_1.Config.ROUTE_PARAMETERS.LATITUDE = args[1];
            this.onNavigate();
        }
    };
    NSMapLocationsComponent.prototype.onSetLocation = function () {
        var self = this;
        nativescript_geolocation_1.getCurrentLocation({
            desiredAccuracy: 3,
            updateDistance: 1,
            maximumAge: 20000,
            timeout: 20000
        }).then(function (position) {
            console.log('loc found');
            if (position) {
                index_1.Config.ROUTE_PARAMETERS.LONGITUDE = position.longitude;
                index_1.Config.ROUTE_PARAMETERS.LATITUDE = position.latitude;
                self.onNavigate();
            }
            else {
                self.onNavigate();
            }
        }).catch(function (response) {
            self.onNavigate();
        });
    };
    NSMapLocationsComponent.prototype.onNavigate = function () {
        this.routerext.navigate([index_1.Config.ROUTE_ROUTES.MAP], {
            transition: {
                duration: index_1.Config.TRANSITION.DURATION,
                name: index_1.Config.TRANSITION.SLIDE_TOP,
            }
        });
    };
    NSMapLocationsComponent.prototype.onItemTap = function (args) {
        if (this.showMapPlaces) {
            var lbl = args.view.getViewById('lbl' + args.index);
            index_1.Config.ROUTE_PARAMETERS.LONGITUDE = lbl.center[0];
            index_1.Config.ROUTE_PARAMETERS.LATITUDE = lbl.center[1];
            this.onNavigate();
        }
    };
    return NSMapLocationsComponent;
}());
NSMapLocationsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-locations',
        templateUrl: index_1.Config.COMPONENT_ITEMS.TEMPLATE,
        styleUrls: [index_1.Config.COMPONENT_ITEMS.CSS],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [service_1.Locator, index_1.RouterExtensions])
], NSMapLocationsComponent);
exports.NSMapLocationsComponent = NSMapLocationsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYmlsZS9tYXAvY29tcG9uZW50cy9sb2NhdGlvbi9jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFtRTtBQUluRSxNQUFNO0FBQ04sNERBQThFO0FBRTlFLDJFQUErRjtBQUkvRix3RUFBdUU7QUFJdkUscUVBQW9IO0FBU3BILElBQWEsdUJBQXVCO0lBSWhDLGlDQUFvQixRQUFpQixFQUFVLFNBQTJCO1FBQTFFLGlCQUVDO1FBRm1CLGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUZuRSxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQU10QyxxQkFBZ0IsR0FBRyxVQUFDLE9BQTJCO1lBQzNDLElBQUksSUFBSSxHQUF1QjtnQkFDM0IsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLEdBQUcsRUFBRSxJQUFJO2dCQUNULEtBQUssRUFBRSxhQUFhO2dCQUNwQixLQUFLLEVBQUUsR0FBRztnQkFDVixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsY0FBYyxFQUFFLENBQUM7Z0JBQ2pCLFFBQVEsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ3BELGNBQWMsRUFBRSxFQUFFO2FBQ3JCLENBQUM7WUFFRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0NBQTJCLEVBQUUsQ0FBQztZQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxjQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUVqQyxNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFB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QXVCIiwiZmlsZSI6Im1vYmlsZS9tYXAvY29tcG9uZW50cy9sb2NhdGlvbi9jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbi8vIGFwcFxyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zLCBDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9hcHAvbW9kdWxlcy9jb3JlL2luZGV4JztcclxuXHJcbmltcG9ydCB7IEFwaVNlcnZpY2VQYXJhbWV0ZXJzT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uLy4uL2FwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvYXBpL21vZGVscyc7XHJcblxyXG5pbXBvcnQgeyBJS2V5VmFsdWUsIElLZXlWYWx1ZURpY3Rpb25hcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9hcHAvbW9kdWxlcy9jb3JlL2NvbGxlY3Rpb25zL2luZGV4JztcclxuXHJcbmltcG9ydCB7IExvY2F0b3IgfSBmcm9tICcuLi8uLi8uLi8uLi9hcHAvbW9kdWxlcy9tYXAvc2VydmljZXMvc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBJTG9jYXRpb25Bcmd1bWVudHMsIElNYXBGZWF0dXJlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2FwcC9tb2R1bGVzL21hcC9pbnRlcmZhY2VzL2ludGVyZmFjZXMnO1xyXG5cclxuaW1wb3J0IHsgTG9jYXRpb24sIGdldEN1cnJlbnRMb2NhdGlvbiwgaXNFbmFibGVkLCBkaXN0YW5jZSwgZW5hYmxlTG9jYXRpb25SZXF1ZXN0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnc2QtbG9jYXRpb25zJyxcclxuICAgIHRlbXBsYXRlVXJsOiBDb25maWcuQ09NUE9ORU5UX0lURU1TLlRFTVBMQVRFLFxyXG4gICAgc3R5bGVVcmxzOiBbQ29uZmlnLkNPTVBPTkVOVF9JVEVNUy5DU1NdLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE5TTWFwTG9jYXRpb25zQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgc2hvd01hcFBsYWNlczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0b3IsIHByaXZhdGUgcm91dGVyZXh0OiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICAgICAgZW5hYmxlTG9jYXRpb25SZXF1ZXN0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmluZEluZHVzdHJpZXMgPSAoa2V5d29yZDogT2JzZXJ2YWJsZTxzdHJpbmc+KTogT2JzZXJ2YWJsZTxJS2V5VmFsdWVEaWN0aW9uYXJ5PiA9PiB7XHJcbiAgICAgICAgbGV0IGFyZ3M6IElMb2NhdGlvbkFyZ3VtZW50cyA9IHtcclxuICAgICAgICAgICAga2V5d29yZDoga2V5d29yZCxcclxuICAgICAgICAgICAga2V5OiAnaWQnLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgZGVsYXk6IDQwMCxcclxuICAgICAgICAgICAgYXBpT3B0aW9uczogbnVsbCxcclxuICAgICAgICAgICAgbWluUXVlcnlMZW5ndGg6IDIsXHJcbiAgICAgICAgICAgIGNhY2hlS2V5OiAnaW5kdXN0cmllcycuY29uY2F0KCdfJykuY29uY2F0KCd7cXVlcnl9JyksXHJcbiAgICAgICAgICAgIERlZXBPYmplY3ROYW1lOiAnJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFyZ3MuYXBpT3B0aW9ucyA9IG5ldyBBcGlTZXJ2aWNlUGFyYW1ldGVyc09wdGlvbnMoKTtcclxuICAgICAgICBhcmdzLmFwaU9wdGlvbnMudXJsID0gQ29uZmlnLkFQSV9FTkRfUE9JTlRTLklORFVTVFJJRVMuY29uY2F0KCd7cXVlcnl9Jyk7XHJcbiAgICAgICAgYXJncy5hcGlPcHRpb25zLnBhcmFtZXRlcnMgPSAnJztcclxuICAgICAgICBhcmdzLmFwaU9wdGlvbnMuY29uY2F0QXBpID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYXRpb24ub25TZWFyY2goYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CaW5kUGxhY2VzID0gKGtleXdvcmQ6IE9ic2VydmFibGU8c3RyaW5nPik6IE9ic2VydmFibGU8SUtleVZhbHVlRGljdGlvbmFyeT4gPT4ge1xyXG4gICAgICAgIGxldCBhcmdzOiBJTG9jYXRpb25Bcmd1bWVudHMgPSB7XHJcbiAgICAgICAgICAgIGtleXdvcmQ6IGtleXdvcmQsXHJcbiAgICAgICAgICAgIGtleTogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIHZhbHVlOiAncGxhY2VfbmFtZScsXHJcbiAgICAgICAgICAgIGRlbGF5OiA0MDAsXHJcbiAgICAgICAgICAgIGFwaU9wdGlvbnM6IG51bGwsXHJcbiAgICAgICAgICAgIG1pblF1ZXJ5TGVuZ3RoOiAyLFxyXG4gICAgICAgICAgICBjYWNoZUtleTogJ3BsYWNlcycuY29uY2F0KCdfJykuY29uY2F0KCd7cXVlcnl9JyksXHJcbiAgICAgICAgICAgIERlZXBPYmplY3ROYW1lOiAnZmVhdHVyZXMnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBhcmdzLmFwaU9wdGlvbnMgPSBuZXcgQXBpU2VydmljZVBhcmFtZXRlcnNPcHRpb25zKCk7XHJcbiAgICAgICAgYXJncy5hcGlPcHRpb25zLnVybCA9IENvbmZpZy5FTlZJUk9OTUVOVCgpLk1BUF9CT1hfQVBJLmNvbmNhdCgne3F1ZXJ5fScpLmNvbmNhdCgnLmpzb24/YWNjZXNzX3Rva2VuPScpLmNvbmNhdChDb25maWcuRU5WSVJPTk1FTlQoKS5NQVBfQk9YX0FQSV9LRVkpOy8vQ29uZmlnLkFQSV9FTkRfUE9JTlRTLklORFVTVFJJRVMuY29uY2F0KCd7cXVlcnl9Jyk7XHJcbiAgICAgICAgYXJncy5hcGlPcHRpb25zLnBhcmFtZXRlcnMgPSAnJztcclxuICAgICAgICBhcmdzLmFwaU9wdGlvbnMuY29uY2F0QXBpID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLm9uU2VhcmNoKGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5kdXN0cnlDaGFuZ2UoYXJnczogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zaG93TWFwUGxhY2VzID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGFyZ3MgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIENvbmZpZy5ST1VURV9QQVJBTUVURVJTLklORFVTVFJZID0gYXJncy5rZXk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd01hcFBsYWNlcyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uUGxhY2VDaGFuZ2UoYXJnczogYW55KSB7XG4gICAgICAgIGlmIChhcmdzICYmIHRoaXMuc2hvd01hcFBsYWNlcykge1xyXG4gICAgICAgICAgICBDb25maWcuUk9VVEVfUEFSQU1FVEVSUy5MT05HSVRVREUgPSBhcmdzWzBdO1xyXG4gICAgICAgICAgICBDb25maWcuUk9VVEVfUEFSQU1FVEVSUy5MQVRJVFVERSA9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgIHRoaXMub25OYXZpZ2F0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNldExvY2F0aW9uKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBnZXRDdXJyZW50TG9jYXRpb24oe1xyXG4gICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IDMsXHJcbiAgICAgICAgICAgIHVwZGF0ZURpc3RhbmNlOiAxLFxyXG4gICAgICAgICAgICBtYXhpbXVtQWdlOiAyMDAwMCxcclxuICAgICAgICAgICAgdGltZW91dDogMjAwMDBcclxuICAgICAgICB9KS50aGVuKChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jIGZvdW5kJyk7XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgQ29uZmlnLlJPVVRFX1BBUkFNRVRFUlMuTE9OR0lUVURFID0gcG9zaXRpb24ubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgICAgICAgQ29uZmlnLlJPVVRFX1BBUkFNRVRFUlMuTEFUSVRVREUgPSBwb3NpdGlvbi5sYXRpdHVkZTtcclxuICAgICAgICAgICAgICAgIHNlbGYub25OYXZpZ2F0ZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5vbk5hdmlnYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgc2VsZi5vbk5hdmlnYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25OYXZpZ2F0ZSgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlcmV4dC5uYXZpZ2F0ZShbQ29uZmlnLlJPVVRFX1JPVVRFUy5NQVBdLCB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBDb25maWcuVFJBTlNJVElPTi5EVVJBVElPTixcclxuICAgICAgICAgICAgICAgIG5hbWU6IENvbmZpZy5UUkFOU0lUSU9OLlNMSURFX1RPUCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSXRlbVRhcChhcmdzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd01hcFBsYWNlcykge1xyXG4gICAgICAgICAgICB2YXIgbGJsID0gPGFueT5hcmdzLnZpZXcuZ2V0Vmlld0J5SWQoJ2xibCcgKyBhcmdzLmluZGV4KTtcclxuICAgICAgICAgICAgQ29uZmlnLlJPVVRFX1BBUkFNRVRFUlMuTE9OR0lUVURFID0gbGJsLmNlbnRlclswXTtcclxuICAgICAgICAgICAgQ29uZmlnLlJPVVRFX1BBUkFNRVRFUlMuTEFUSVRVREUgPSBsYmwuY2VudGVyWzFdO1xyXG4gICAgICAgICAgICB0aGlzLm9uTmF2aWdhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19