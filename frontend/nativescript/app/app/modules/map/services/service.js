Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var index_1 = require("../../core/index");
var index_2 = require("../../core/index");
var services_1 = require("../../core/services/api/services");
var Locator = (function () {
    function Locator(storage, apiService) {
        var _this = this;
        this.storage = storage;
        this.apiService = apiService;
        this.onQuery = function (query, args) {
            if (query && query.length > args.minQueryLength) {
                if (args.apiOptions.cacheKey !== '')
                    args.apiOptions.cacheKey = args.cacheKey.replace('{query}', query).concat(query.length.toString());
                args.apiOptions.url = args.apiOptions.url.replace('{query}', query);
                //if (this.storage.hasItem(args.apiOptions.cacheKey)) {
                //    let data: any = this.storage.getItem(args.apiOptions.cacheKey);
                //    debugger
                //    //return Observable.of(data) as any;
                //};
                return _this.apiService.mapper(args.apiOptions)
                    .map(function (res) {
                    var data = (args.DeepObjectName != '') ? res.json()[args.DeepObjectName] : res.json();
                    var suggestions = null;
                    data.forEach(function (suggestion, index) {
                        var val = { key: suggestion[args.key], value: suggestion[args.value] };
                        if (!suggestions)
                            suggestions = new index_1.KeyValueDictionary([{ key: index, value: val }]);
                        else
                            suggestions.add(index, val);
                    });
                    var suggestionsData = suggestions.toLookup();
                    //if (args.apiOptions.cacheKey !== '') this.storage.setItem(args.apiOptions.cacheKey, suggestionsData);
                    return suggestionsData;
                }).catch(function (error) {
                    args.apiOptions.url = args.apiOptions.url.replace(query, '{query}');
                    return Observable_1.Observable.of();
                })
                    .finally(function () { args.apiOptions.url = args.apiOptions.url.replace(query, '{query}'); });
            }
            return Observable_1.Observable.of();
        };
    }
    Locator.prototype.onSearch = function (args) {
        var _this = this;
        return args.keyword
            .debounceTime(args.delay)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.onQuery(term, args); })
            .onErrorResumeNext();
    };
    return Locator;
}());
Locator = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_2.StorageService,
        services_1.ApiService])
], Locator);
exports.Locator = Locator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL21hcC9zZXJ2aWNlcy9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFFM0MsOENBQTZDO0FBRzdDLDBDQUEyRTtBQUMzRSwwQ0FBOEQ7QUFDOUQsNkRBQThEO0FBSTlELElBQWEsT0FBTztJQUVoQixpQkFBb0IsT0FBdUIsRUFDL0IsVUFBc0I7UUFEbEMsaUJBQ3VDO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQy9CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFVbEMsWUFBTyxHQUFHLFVBQUMsS0FBYSxFQUFFLElBQXdCO1lBQzlDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUM7b0JBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBRXhJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRXBFLHVEQUF1RDtnQkFDdkQscUVBQXFFO2dCQUNyRSxjQUFjO2dCQUNkLDBDQUEwQztnQkFDMUMsSUFBSTtnQkFFSixNQUFNLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztxQkFDekMsR0FBRyxDQUFDLFVBQUMsR0FBRztvQkFDTCxJQUFJLElBQUksR0FBUSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBRTNGLElBQUksV0FBVyxHQUF1QixJQUFJLENBQUM7b0JBRTNDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFlLEVBQUUsS0FBVTt3QkFDckMsSUFBSSxHQUFHLEdBQVEsRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO3dCQUM1RSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQzs0QkFBQyxXQUFXLEdBQUcsSUFBSSwwQkFBa0IsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNyRixJQUFJOzRCQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNyQyxDQUFDLENBQUMsQ0FBQztvQkFFSCxJQUFJLGVBQWUsR0FBd0IsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUVsRSx1R0FBdUc7b0JBRXZHLE1BQU0sQ0FBQyxlQUFlLENBQUM7Z0JBRTNCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEtBQVU7b0JBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3BFLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMzQixDQUFDLENBQUM7cUJBQ0QsT0FBTyxDQUFDLGNBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pHLENBQUM7WUFDRCxNQUFNLENBQUMsdUJBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUE7SUEvQ3FDLENBQUM7SUFFdkMsMEJBQVEsR0FBUixVQUFTLElBQXdCO1FBQWpDLGlCQU1DO1FBTEcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPO2FBQ2QsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDeEIsb0JBQW9CLEVBQUU7YUFDdEIsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQXhCLENBQXdCLENBQUM7YUFDM0MsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBeUNMLGNBQUM7QUFBRCxDQXBEQSxBQW9EQyxJQUFBO0FBcERZLE9BQU87SUFEbkIsaUJBQVUsRUFBRTtxQ0FHb0Isc0JBQWM7UUFDbkIscUJBQVU7R0FIekIsT0FBTyxDQW9EbkI7QUFwRFksMEJBQU8iLCJmaWxlIjoiYXBwL21vZHVsZXMvbWFwL3NlcnZpY2VzL3NlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBJS2V5VmFsdWVEaWN0aW9uYXJ5LCBLZXlWYWx1ZURpY3Rpb25hcnkgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UsIFN0b3JhZ2VLZXkgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvYXBpL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgSUxvY2F0aW9uQXJndW1lbnRzIH0gZnJvbSAnLi4vaW5kZXgnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9jYXRvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG9uU2VhcmNoKGFyZ3M6IElMb2NhdGlvbkFyZ3VtZW50cykge1xyXG4gICAgICAgIHJldHVybiBhcmdzLmtleXdvcmRcclxuICAgICAgICAgICAgLmRlYm91bmNlVGltZShhcmdzLmRlbGF5KVxyXG4gICAgICAgICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKVxyXG4gICAgICAgICAgICAuc3dpdGNoTWFwKHRlcm0gPT4gdGhpcy5vblF1ZXJ5KHRlcm0sIGFyZ3MpKVxyXG4gICAgICAgICAgICAub25FcnJvclJlc3VtZU5leHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblF1ZXJ5ID0gKHF1ZXJ5OiBzdHJpbmcsIGFyZ3M6IElMb2NhdGlvbkFyZ3VtZW50cyk6IE9ic2VydmFibGU8SUtleVZhbHVlRGljdGlvbmFyeT4gPT4ge1xyXG4gICAgICAgIGlmIChxdWVyeSAmJiBxdWVyeS5sZW5ndGggPiBhcmdzLm1pblF1ZXJ5TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmdzLmFwaU9wdGlvbnMuY2FjaGVLZXkgIT09ICcnKSBhcmdzLmFwaU9wdGlvbnMuY2FjaGVLZXkgPSBhcmdzLmNhY2hlS2V5LnJlcGxhY2UoJ3txdWVyeX0nLCBxdWVyeSkuY29uY2F0KHF1ZXJ5Lmxlbmd0aC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgICAgIGFyZ3MuYXBpT3B0aW9ucy51cmwgPSBhcmdzLmFwaU9wdGlvbnMudXJsLnJlcGxhY2UoJ3txdWVyeX0nLCBxdWVyeSk7XHJcblxyXG4gICAgICAgICAgICAvL2lmICh0aGlzLnN0b3JhZ2UuaGFzSXRlbShhcmdzLmFwaU9wdGlvbnMuY2FjaGVLZXkpKSB7XHJcbiAgICAgICAgICAgIC8vICAgIGxldCBkYXRhOiBhbnkgPSB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShhcmdzLmFwaU9wdGlvbnMuY2FjaGVLZXkpO1xyXG4gICAgICAgICAgICAvLyAgICBkZWJ1Z2dlclxyXG4gICAgICAgICAgICAvLyAgICAvL3JldHVybiBPYnNlcnZhYmxlLm9mKGRhdGEpIGFzIGFueTtcclxuICAgICAgICAgICAgLy99O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5tYXBwZXIoYXJncy5hcGlPcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGE6IGFueSA9IChhcmdzLkRlZXBPYmplY3ROYW1lICE9ICcnKSA/IHJlcy5qc29uKClbYXJncy5EZWVwT2JqZWN0TmFtZV0gOiByZXMuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3VnZ2VzdGlvbnM6IEtleVZhbHVlRGljdGlvbmFyeSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChzdWdnZXN0aW9uOiBhbnksIGluZGV4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbDogYW55ID0geyBrZXk6IHN1Z2dlc3Rpb25bYXJncy5rZXldLCB2YWx1ZTogc3VnZ2VzdGlvblthcmdzLnZhbHVlXSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN1Z2dlc3Rpb25zKSBzdWdnZXN0aW9ucyA9IG5ldyBLZXlWYWx1ZURpY3Rpb25hcnkoW3sga2V5OiBpbmRleCwgdmFsdWU6IHZhbCB9XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Ugc3VnZ2VzdGlvbnMuYWRkKGluZGV4LCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3VnZ2VzdGlvbnNEYXRhOiBJS2V5VmFsdWVEaWN0aW9uYXJ5ID0gc3VnZ2VzdGlvbnMudG9Mb29rdXAoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiAoYXJncy5hcGlPcHRpb25zLmNhY2hlS2V5ICE9PSAnJykgdGhpcy5zdG9yYWdlLnNldEl0ZW0oYXJncy5hcGlPcHRpb25zLmNhY2hlS2V5LCBzdWdnZXN0aW9uc0RhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VnZ2VzdGlvbnNEYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5hcGlPcHRpb25zLnVybCA9IGFyZ3MuYXBpT3B0aW9ucy51cmwucmVwbGFjZShxdWVyeSwgJ3txdWVyeX0nKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZigpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHsgYXJncy5hcGlPcHRpb25zLnVybCA9IGFyZ3MuYXBpT3B0aW9ucy51cmwucmVwbGFjZShxdWVyeSwgJ3txdWVyeX0nKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKCk7XHJcbiAgICB9XHJcblxyXG59Il19
