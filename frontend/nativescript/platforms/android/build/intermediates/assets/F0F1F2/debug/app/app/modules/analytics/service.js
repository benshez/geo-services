Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// libs
var _ = require("lodash");
var angulartics2_1 = require("angulartics2");
/**
 * Wrapper for Angulartics2
 */
var AnalyticsService = (function () {
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
    return AnalyticsService;
}());
AnalyticsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [angulartics2_1.Angulartics2, angulartics2_1.Angulartics2Segment])
], AnalyticsService);
exports.AnalyticsService = AnalyticsService;
/**
 * Base class
 * Standardizes tracking actions and categorization
 */
var Analytics = (function () {
    function Analytics(analytics) {
        this.analytics = analytics;
    }
    /**
     * Track actions, events, etc.
     **/
    Analytics.prototype.track = function (action, properties) {
        this.analytics.track(action, _.extend(properties, { category: this.category }));
    };
    return Analytics;
}());
Analytics = __decorate([
    __param(0, core_1.Inject(AnalyticsService)),
    __metadata("design:paramtypes", [AnalyticsService])
], Analytics);
exports.Analytics = Analytics;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FuYWx5dGljcy9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxVQUFVO0FBQ1Ysc0NBQW1EO0FBRW5ELE9BQU87QUFDUCwwQkFBNEI7QUFDNUIsNkNBQWlFO0FBWWpFOztHQUVHO0FBRUgsSUFBYSxnQkFBZ0I7SUFFM0IsMEJBQW9CLFlBQTBCLEVBQVUsT0FBNEI7UUFDbEYsVUFBVTtRQUNWLDRGQUE0RjtRQUM1RixpREFBaUQ7UUFDakQscURBQXFEO1FBQ3JELDhDQUE4QztRQUM5Qyx3Q0FBd0M7UUFOdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQVFsRixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7UUFFSTtJQUNHLGdDQUFLLEdBQVosVUFBYSxNQUFjLEVBQUUsVUFBZ0M7UUFDM0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM5QyxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7UUFHSTtJQUNHLG9DQUFTLEdBQWhCLFVBQWlCLElBQVksRUFBRSxRQUFhO1FBQzFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDekMsQ0FBQztJQUNILENBQUM7SUFFRDs7UUFFSTtJQUNHLG1DQUFRLEdBQWYsVUFBZ0IsVUFBZTtRQUM3QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QyxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7O1FBSUk7SUFDRyxrQ0FBTyxHQUFkLFVBQWUsTUFBZ0I7UUFDN0IsRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztJQUNsRCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQXBEQSxBQW9EQyxJQUFBO0FBcERZLGdCQUFnQjtJQUQ1QixpQkFBVSxFQUFFO3FDQUd1QiwyQkFBWSxFQUFtQixrQ0FBbUI7R0FGekUsZ0JBQWdCLENBb0Q1QjtBQXBEWSw0Q0FBZ0I7QUFzRDdCOzs7R0FHRztBQUNILElBQWEsU0FBUztJQUlwQixtQkFBNkMsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFFeEUsQ0FBQztJQUVEOztRQUVJO0lBQ0oseUJBQUssR0FBTCxVQUFNLE1BQWMsRUFBRSxVQUFnQztRQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLFNBQVM7SUFJUCxXQUFBLGFBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO3FDQUFtQixnQkFBZ0I7R0FKN0QsU0FBUyxDQWNyQjtBQWRZLDhCQUFTIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2FuYWx5dGljcy9zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGxpYnNcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiwgQW5ndWxhcnRpY3MyU2VnbWVudCB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFuYWx5dGljc1Byb3BlcnRpZXMge1xuICBjYXRlZ29yeT86IHN0cmluZztcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIHZhbHVlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBbmFseXRpY3Mge1xuICB0cmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogSUFuYWx5dGljc1Byb3BlcnRpZXMpOiB2b2lkO1xufVxuXG4vKipcbiAqIFdyYXBwZXIgZm9yIEFuZ3VsYXJ0aWNzMlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5hbHl0aWNzU2VydmljZSBpbXBsZW1lbnRzIElBbmFseXRpY3Mge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsIHByaXZhdGUgc2VnbWVudDogQW5ndWxhcnRpY3MyU2VnbWVudCkge1xuICAgIC8vIG9wdGlvbnNcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhcnRpY3MvYW5ndWxhcnRpY3MyL2Jsb2IvbWFzdGVyL3NyYy9jb3JlL2FuZ3VsYXJ0aWNzMi50cyNMOTAtTDEwNFxuICAgIC8vIGFuZ3VsYXJ0aWNzMi52aXJ0dWFsUGFnZXZpZXdzKHZhbHVlOiBib29sZWFuKTtcbiAgICAvLyBhbmd1bGFydGljczIuZXhjbHVkZVJvdXRlcyhyb3V0ZXM6IEFycmF5PHN0cmluZz4pO1xuICAgIC8vIGFuZ3VsYXJ0aWNzMi5maXJzdFBhZ2V2aWV3KHZhbHVlOiBib29sZWFuKTtcbiAgICAvLyBhbmd1bGFydGljczIud2l0aEJhc2UodmFsdWU6IHN0cmluZyk7XG5cbiAgICB0aGlzLmRldk1vZGUoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrIGFjdGlvbnMsIGV2ZW50cywgZXRjLlxuICAgKiovXG4gIHB1YmxpYyB0cmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogSUFuYWx5dGljc1Byb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGV2TW9kZSgpKSB7XG4gICAgICB0aGlzLnNlZ21lbnQuZXZlbnRUcmFjayhhY3Rpb24sIHByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgYXV0b21hdGljYWxseSBieSBkZWZhdWx0IHdpdGggQW5ndWxhciAyIFJvdXRpbmdcbiAgICogSG93ZXZlciwgdGhhdCBjYW4gYmUgdHVybmVkIG9mZiBhbmQgdGhpcyBjb3VsZCBiZSB1c2VkIG1hbnVhbGx5XG4gICAqKi9cbiAgcHVibGljIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcsIGxvY2F0aW9uOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuZGV2TW9kZSgpKSB7XG4gICAgICB0aGlzLnNlZ21lbnQucGFnZVRyYWNrKHBhdGgsIGxvY2F0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSWRlbnRpZnkgYXV0aGVudGljYXRlZCB1c2Vyc1xuICAgKiovXG4gIHB1YmxpYyBpZGVudGlmeShwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuZGV2TW9kZSgpKSB7XG4gICAgICB0aGlzLnNlZ21lbnQuc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRyb2wgd2hldGhlciBhbmFseXRpY3MgYXJlIHRyYWNrZWRcbiAgICogdHJ1ZTogZGV2IG1vZGUgb24sIHRoZXJlZm9yZSBkbyBub3QgdHJhY2sgYW55dGhpbmdcbiAgICogZmFsc2U6IGRldiBtb2RlIG9mZiwgdHJhY2sgZXZlcnl0aGluZ1xuICAgKiovXG4gIHB1YmxpYyBkZXZNb2RlKGVuYWJsZT86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIGVuYWJsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuYW5ndWxhcnRpY3MyLmRldmVsb3Blck1vZGUoZW5hYmxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmRldmVsb3Blck1vZGU7XG4gIH1cbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzXG4gKiBTdGFuZGFyZGl6ZXMgdHJhY2tpbmcgYWN0aW9ucyBhbmQgY2F0ZWdvcml6YXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEFuYWx5dGljcyBpbXBsZW1lbnRzIElBbmFseXRpY3Mge1xuICAvLyBzdWItY2xhc3NlcyBzaG91bGQgZGVmaW5lIHRoZWlyIGNhdGVnb3J5XG4gIHB1YmxpYyBjYXRlZ29yeTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQW5hbHl0aWNzU2VydmljZSkgcHVibGljIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSkge1xuXG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgYWN0aW9ucywgZXZlbnRzLCBldGMuXG4gICAqKi9cbiAgdHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IElBbmFseXRpY3NQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgdGhpcy5hbmFseXRpY3MudHJhY2soYWN0aW9uLCBfLmV4dGVuZChwcm9wZXJ0aWVzLCB7IGNhdGVnb3J5OiB0aGlzLmNhdGVnb3J5IH0pKTtcbiAgfVxufVxuIl19
