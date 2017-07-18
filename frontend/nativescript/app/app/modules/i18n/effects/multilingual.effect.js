Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// libs
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var lodash_1 = require("lodash");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
// module
var multilingual_service_1 = require("../services/multilingual.service");
var multilingual = require("../actions/multilingual.action");
var MultilingualEffects = (function () {
    function MultilingualEffects(store, actions$, multilangService, languages) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.multilangService = multilangService;
        this.languages = languages;
        this.change$ = this.actions$
            .ofType(multilingual.ActionTypes.CHANGE)
            .map(function (action) {
            var lang = action.payload;
            if (lodash_1.includes(lodash_1.map(_this.languages, 'code'), lang)) {
                var langChangedAction = new multilingual.LangChangedAction(lang);
                // track analytics
                _this.multilangService.track(langChangedAction.type, { label: langChangedAction.payload });
                // change state
                return new multilingual.LangChangedAction(lang);
            }
            else {
                // not supported (here for example)
                return new multilingual.LangUnsupportedAction(lang);
            }
        });
    }
    return MultilingualEffects;
}());
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], MultilingualEffects.prototype, "change$", void 0);
MultilingualEffects = __decorate([
    core_1.Injectable(),
    __param(3, core_1.Inject(multilingual_service_1.Languages)),
    __metadata("design:paramtypes", [store_1.Store,
        effects_1.Actions,
        multilingual_service_1.MultilingualService, Object])
], MultilingualEffects);
exports.MultilingualEffects = MultilingualEffects;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vZWZmZWN0cy9tdWx0aWxpbmd1YWwuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxVQUFVO0FBQ1Ysc0NBQW1EO0FBRW5ELE9BQU87QUFDUCxxQ0FBNEM7QUFDNUMseUNBQWdEO0FBQ2hELGlDQUF1QztBQUN2Qyw4Q0FBNkM7QUFDN0MsaUNBQStCO0FBRS9CLFNBQVM7QUFDVCx5RUFBa0Y7QUFDbEYsNkRBQStEO0FBRy9ELElBQWEsbUJBQW1CO0lBa0I5Qiw2QkFDVSxLQUFpQixFQUNqQixRQUFpQixFQUNqQixnQkFBcUMsRUFDbEIsU0FBUztRQUp0QyxpQkFLSztRQUpLLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXFCO1FBQ2xCLGNBQVMsR0FBVCxTQUFTLENBQUE7UUFwQjVCLFlBQU8sR0FBdUIsSUFBSSxDQUFDLFFBQVE7YUFDbEQsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2FBQ3ZDLEdBQUcsQ0FBQyxVQUFBLE1BQU07WUFDVCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQzFCLEVBQUUsQ0FBQyxDQUFDLGlCQUFRLENBQUMsWUFBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLGlCQUFpQixHQUFHLElBQUksWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqRSxrQkFBa0I7Z0JBQ2xCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQzFGLGVBQWU7Z0JBQ2YsTUFBTSxDQUFDLElBQUksWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixtQ0FBbUM7Z0JBQ25DLE1BQU0sQ0FBQyxJQUFJLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0RCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFPRCxDQUFDO0lBQ1AsMEJBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBdEJXO0lBQVQsZ0JBQU0sRUFBRTs4QkFBVSx1QkFBVTtvREFjeEI7QUFoQk0sbUJBQW1CO0lBRC9CLGlCQUFVLEVBQUU7SUF1QlIsV0FBQSxhQUFNLENBQUMsZ0NBQVMsQ0FBQyxDQUFBO3FDQUhILGFBQUs7UUFDRixpQkFBTztRQUNDLDBDQUFtQjtHQXJCcEMsbUJBQW1CLENBd0IvQjtBQXhCWSxrREFBbUIiLCJmaWxlIjoiYXBwL21vZHVsZXMvaTE4bi9lZmZlY3RzL211bHRpbGluZ3VhbC5lZmZlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbGlic1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgaW5jbHVkZXMsIG1hcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxTZXJ2aWNlLCBMYW5ndWFnZXMgfSBmcm9tICcuLi9zZXJ2aWNlcy9tdWx0aWxpbmd1YWwuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBtdWx0aWxpbmd1YWwgZnJvbSAnLi4vYWN0aW9ucy9tdWx0aWxpbmd1YWwuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE11bHRpbGluZ3VhbEVmZmVjdHMge1xuXG4gIEBFZmZlY3QoKSBjaGFuZ2UkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkXG4gICAgLm9mVHlwZShtdWx0aWxpbmd1YWwuQWN0aW9uVHlwZXMuQ0hBTkdFKVxuICAgIC5tYXAoYWN0aW9uID0+IHtcbiAgICAgIGxldCBsYW5nID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBpZiAoaW5jbHVkZXMobWFwKHRoaXMubGFuZ3VhZ2VzLCAnY29kZScpLCBsYW5nKSkge1xuICAgICAgICBsZXQgbGFuZ0NoYW5nZWRBY3Rpb24gPSBuZXcgbXVsdGlsaW5ndWFsLkxhbmdDaGFuZ2VkQWN0aW9uKGxhbmcpO1xuICAgICAgICAvLyB0cmFjayBhbmFseXRpY3NcbiAgICAgICAgdGhpcy5tdWx0aWxhbmdTZXJ2aWNlLnRyYWNrKGxhbmdDaGFuZ2VkQWN0aW9uLnR5cGUsIHsgbGFiZWw6IGxhbmdDaGFuZ2VkQWN0aW9uLnBheWxvYWQgfSk7XG4gICAgICAgIC8vIGNoYW5nZSBzdGF0ZVxuICAgICAgICByZXR1cm4gbmV3IG11bHRpbGluZ3VhbC5MYW5nQ2hhbmdlZEFjdGlvbihsYW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgKGhlcmUgZm9yIGV4YW1wbGUpXG4gICAgICAgIHJldHVybiBuZXcgbXVsdGlsaW5ndWFsLkxhbmdVbnN1cHBvcnRlZEFjdGlvbihsYW5nKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBtdWx0aWxhbmdTZXJ2aWNlOiBNdWx0aWxpbmd1YWxTZXJ2aWNlLFxuICAgIEBJbmplY3QoTGFuZ3VhZ2VzKSBwcml2YXRlIGxhbmd1YWdlc1xuICApIHsgfVxufVxuIl19
