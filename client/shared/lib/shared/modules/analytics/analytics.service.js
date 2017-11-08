"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// libs
var _ = require("lodash");
var angulartics2_1 = require("angulartics2");
/**
 * Wrapper for Angulartics2
 */
var AnalyticsService = function () {
    function AnalyticsService(angulartics2, segment) {
        // options
        // https://github.com/angulartics/angulartics2/blob/master/src/core/angulartics2.ts#L90-L104
        // angulartics2.virtualPageviews(value: boolean);
        // angulartics2.excludeRoutes(routes: Array<string>);
        // angulartics2.firstPageview(value: boolean);
        // angulartics2.withBase(value: string);
        this.angulartics2 = angulartics2;
        this.segment = segment;
        this.devMode(false);
    }
    /**
     * Track actions, events, etc.
     **/
    AnalyticsService.prototype.track = function (action, properties) {
        if (!this.devMode()) {
            this.segment.eventTrack(action, properties);
        }
    };
    /**
     * Called automatically by default with Angular 2 Routing
     * However, that can be turned off and this could be used manually
     **/
    AnalyticsService.prototype.pageTrack = function (path, location) {
        if (!this.devMode()) {
            this.segment.pageTrack(path, location);
        }
    };
    /**
     * Identify authenticated users
     **/
    AnalyticsService.prototype.identify = function (properties) {
        if (!this.devMode()) {
            this.segment.setUserProperties(properties);
        }
    };
    /**
     * Control whether analytics are tracked
     * true: dev mode on, therefore do not track anything
     * false: dev mode off, track everything
     **/
    AnalyticsService.prototype.devMode = function (enable) {
        if (typeof enable !== 'undefined') {
            this.angulartics2.developerMode(enable);
        }
        return this.angulartics2.settings.developerMode;
    };
    AnalyticsService = __decorate([core_1.Injectable(), __metadata("design:paramtypes", [angulartics2_1.Angulartics2, angulartics2_1.Angulartics2Segment])], AnalyticsService);
    return AnalyticsService;
}();
exports.AnalyticsService = AnalyticsService;
/**
 * Base class
 * Standardizes tracking actions and categorization
 */
var Analytics = function () {
    function Analytics(analytics) {
        this.analytics = analytics;
    }
    /**
     * Track actions, events, etc.
     **/
    Analytics.prototype.track = function (action, properties) {
        this.analytics.track(action, _.extend(properties, { category: this.category }));
    };
    Analytics = __decorate([__param(0, core_1.Inject(AnalyticsService)), __metadata("design:paramtypes", [AnalyticsService])], Analytics);
    return Analytics;
}();
exports.Analytics = Analytics;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmFseXRpY3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxBQUFVO0FBQ1YscUJBQW1EO0FBRW5ELEFBQU87QUFDUCxnQkFBNEI7QUFDNUIsNkJBQWlFO0FBWWpFLEFBRUc7OztBQUVIO0FBRUUsOEJBQW9CLEFBQTBCLGNBQVUsQUFBNEI7QUFDbEYsQUFBVTtBQUNWLEFBQTRGO0FBQzVGLEFBQWlEO0FBQ2pELEFBQXFEO0FBQ3JELEFBQThDO0FBQzlDLEFBQXdDO0FBTnRCLGFBQVksZUFBWixBQUFZLEFBQWM7QUFBVSxhQUFPLFVBQVAsQUFBTyxBQUFxQjtBQVFsRixBQUFJLGFBQUMsQUFBTyxRQUFDLEFBQUssQUFBQyxBQUFDLEFBQ3RCO0FBQUM7QUFFRCxBQUVJOzs7QUFDRywrQkFBSyxRQUFaLFVBQWEsQUFBYyxRQUFFLEFBQWdDO0FBQzNELEFBQUUsQUFBQyxZQUFDLENBQUMsQUFBSSxLQUFDLEFBQU8sQUFBRSxBQUFDLFdBQUMsQUFBQztBQUNwQixBQUFJLGlCQUFDLEFBQU8sUUFBQyxBQUFVLFdBQUMsQUFBTSxRQUFFLEFBQVUsQUFBQyxBQUFDLEFBQzlDO0FBQUMsQUFDSDtBQUFDO0FBRUQsQUFHSTs7OztBQUNHLCtCQUFTLFlBQWhCLFVBQWlCLEFBQVksTUFBRSxBQUFhO0FBQzFDLEFBQUUsQUFBQyxZQUFDLENBQUMsQUFBSSxLQUFDLEFBQU8sQUFBRSxBQUFDLFdBQUMsQUFBQztBQUNwQixBQUFJLGlCQUFDLEFBQU8sUUFBQyxBQUFTLFVBQUMsQUFBSSxNQUFFLEFBQVEsQUFBQyxBQUFDLEFBQ3pDO0FBQUMsQUFDSDtBQUFDO0FBRUQsQUFFSTs7O0FBQ0csK0JBQVEsV0FBZixVQUFnQixBQUFlO0FBQzdCLEFBQUUsQUFBQyxZQUFDLENBQUMsQUFBSSxLQUFDLEFBQU8sQUFBRSxBQUFDLFdBQUMsQUFBQztBQUNwQixBQUFJLGlCQUFDLEFBQU8sUUFBQyxBQUFpQixrQkFBQyxBQUFVLEFBQUMsQUFBQyxBQUM3QztBQUFDLEFBQ0g7QUFBQztBQUVELEFBSUk7Ozs7O0FBQ0csK0JBQU8sVUFBZCxVQUFlLEFBQWdCO0FBQzdCLEFBQUUsQUFBQyxZQUFDLE9BQU8sQUFBTSxXQUFLLEFBQVcsQUFBQyxhQUFDLEFBQUM7QUFDbEMsQUFBSSxpQkFBQyxBQUFZLGFBQUMsQUFBYSxjQUFDLEFBQU0sQUFBQyxBQUFDLEFBQzFDO0FBQUM7QUFDRCxBQUFNLGVBQUMsQUFBSSxLQUFDLEFBQVksYUFBQyxBQUFRLFNBQUMsQUFBYSxBQUFDLEFBQ2xEO0FBQUM7QUFuRFUsQUFBZ0IsbUNBRDVCLE9BQVUsQUFBRSwrQ0FHdUIsZUFBWSxjQUFtQixlQUFtQix3QkFGekUsQUFBZ0IsQUFvRDVCO0FBQUQsV0FBQztBQXBERCxBQW9EQztBQXBEWSwyQkFBZ0I7QUFzRDdCLEFBR0c7Ozs7QUFDSDtBQUlFLHVCQUE2QyxBQUEyQjtBQUEzQixhQUFTLFlBQVQsQUFBUyxBQUFrQixBQUV4RTtBQUFDO0FBRUQsQUFFSTs7O0FBQ0osd0JBQUssUUFBTCxVQUFNLEFBQWMsUUFBRSxBQUFnQztBQUNwRCxBQUFJLGFBQUMsQUFBUyxVQUFDLEFBQUssTUFBQyxBQUFNLFFBQUUsQUFBQyxFQUFDLEFBQU0sT0FBQyxBQUFVLFlBQUUsRUFBRSxBQUFRLFVBQUUsQUFBSSxLQUFDLEFBQVEsQUFBRSxBQUFDLEFBQUMsQUFBQyxBQUNsRjtBQUFDO0FBYlUsQUFBUyw0QkFJUCxXQUFBLE9BQU0sT0FBQyxBQUFnQixBQUFDLHFEQUFtQixBQUFnQixxQkFKN0QsQUFBUyxBQWNyQjtBQUFELFdBQUM7QUFkRCxBQWNDO0FBZFksb0JBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbGlic1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgQW5ndWxhcnRpY3MyLCBBbmd1bGFydGljczJTZWdtZW50IH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcblxuZXhwb3J0IGludGVyZmFjZSBJQW5hbHl0aWNzUHJvcGVydGllcyB7XG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xuICBsYWJlbD86IHN0cmluZztcbiAgdmFsdWU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFuYWx5dGljcyB7XG4gIHRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBJQW5hbHl0aWNzUHJvcGVydGllcyk6IHZvaWQ7XG59XG5cbi8qKlxuICogV3JhcHBlciBmb3IgQW5ndWxhcnRpY3MyXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NTZXJ2aWNlIGltcGxlbWVudHMgSUFuYWx5dGljcyB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMiwgcHJpdmF0ZSBzZWdtZW50OiBBbmd1bGFydGljczJTZWdtZW50KSB7XG4gICAgLy8gb3B0aW9uc1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFydGljcy9hbmd1bGFydGljczIvYmxvYi9tYXN0ZXIvc3JjL2NvcmUvYW5ndWxhcnRpY3MyLnRzI0w5MC1MMTA0XG4gICAgLy8gYW5ndWxhcnRpY3MyLnZpcnR1YWxQYWdldmlld3ModmFsdWU6IGJvb2xlYW4pO1xuICAgIC8vIGFuZ3VsYXJ0aWNzMi5leGNsdWRlUm91dGVzKHJvdXRlczogQXJyYXk8c3RyaW5nPik7XG4gICAgLy8gYW5ndWxhcnRpY3MyLmZpcnN0UGFnZXZpZXcodmFsdWU6IGJvb2xlYW4pO1xuICAgIC8vIGFuZ3VsYXJ0aWNzMi53aXRoQmFzZSh2YWx1ZTogc3RyaW5nKTtcblxuICAgIHRoaXMuZGV2TW9kZShmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgYWN0aW9ucywgZXZlbnRzLCBldGMuXG4gICAqKi9cbiAgcHVibGljIHRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBJQW5hbHl0aWNzUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kZXZNb2RlKCkpIHtcbiAgICAgIHRoaXMuc2VnbWVudC5ldmVudFRyYWNrKGFjdGlvbiwgcHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBhdXRvbWF0aWNhbGx5IGJ5IGRlZmF1bHQgd2l0aCBBbmd1bGFyIDIgUm91dGluZ1xuICAgKiBIb3dldmVyLCB0aGF0IGNhbiBiZSB0dXJuZWQgb2ZmIGFuZCB0aGlzIGNvdWxkIGJlIHVzZWQgbWFudWFsbHlcbiAgICoqL1xuICBwdWJsaWMgcGFnZVRyYWNrKHBhdGg6IHN0cmluZywgbG9jYXRpb246IGFueSkge1xuICAgIGlmICghdGhpcy5kZXZNb2RlKCkpIHtcbiAgICAgIHRoaXMuc2VnbWVudC5wYWdlVHJhY2socGF0aCwgbG9jYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJZGVudGlmeSBhdXRoZW50aWNhdGVkIHVzZXJzXG4gICAqKi9cbiAgcHVibGljIGlkZW50aWZ5KHByb3BlcnRpZXM6IGFueSkge1xuICAgIGlmICghdGhpcy5kZXZNb2RlKCkpIHtcbiAgICAgIHRoaXMuc2VnbWVudC5zZXRVc2VyUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbCB3aGV0aGVyIGFuYWx5dGljcyBhcmUgdHJhY2tlZFxuICAgKiB0cnVlOiBkZXYgbW9kZSBvbiwgdGhlcmVmb3JlIGRvIG5vdCB0cmFjayBhbnl0aGluZ1xuICAgKiBmYWxzZTogZGV2IG1vZGUgb2ZmLCB0cmFjayBldmVyeXRoaW5nXG4gICAqKi9cbiAgcHVibGljIGRldk1vZGUoZW5hYmxlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgZW5hYmxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5hbmd1bGFydGljczIuZGV2ZWxvcGVyTW9kZShlbmFibGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZGV2ZWxvcGVyTW9kZTtcbiAgfVxufVxuXG4vKipcbiAqIEJhc2UgY2xhc3NcbiAqIFN0YW5kYXJkaXplcyB0cmFja2luZyBhY3Rpb25zIGFuZCBjYXRlZ29yaXphdGlvblxuICovXG5leHBvcnQgY2xhc3MgQW5hbHl0aWNzIGltcGxlbWVudHMgSUFuYWx5dGljcyB7XG4gIC8vIHN1Yi1jbGFzc2VzIHNob3VsZCBkZWZpbmUgdGhlaXIgY2F0ZWdvcnlcbiAgcHVibGljIGNhdGVnb3J5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChBbmFseXRpY3NTZXJ2aWNlKSBwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFjayBhY3Rpb25zLCBldmVudHMsIGV0Yy5cbiAgICoqL1xuICB0cmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogSUFuYWx5dGljc1Byb3BlcnRpZXMpOiB2b2lkIHtcbiAgICB0aGlzLmFuYWx5dGljcy50cmFjayhhY3Rpb24sIF8uZXh0ZW5kKHByb3BlcnRpZXMsIHsgY2F0ZWdvcnk6IHRoaXMuY2F0ZWdvcnkgfSkpO1xuICB9XG59XG4iXX0=