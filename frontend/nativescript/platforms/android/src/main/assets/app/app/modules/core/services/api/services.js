Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var index_1 = require("../../utils/index");
var models_1 = require("./models");
var index_2 = require("../../../core/index");
var index_3 = require("../logging/index");
var services_1 = require("../../../shared/components/loader/services/services");
var ApiService = (function () {
    function ApiService(http, logger, storage, apiServiceOptions, loaderService) {
        this.http = http;
        this.logger = logger;
        this.storage = storage;
        this.apiServiceOptions = apiServiceOptions;
        this.loaderService = loaderService;
    }
    ApiService.prototype.get = function (parameters) {
        this.showLoader();
        //if (this.storage.hasItem(parameters.url)) {
        //    return (Observable.of(this.storage.getItem(parameters.url))) as any;
        //}
        this.apiServiceOptions.method = http_1.RequestMethod.Get;
        this.apiServiceOptions.parameters = parameters;
        this.apiServiceOptions.parameters.url = (parameters.concatApi) ? index_1.Config.ENVIRONMENT().API.concat(parameters.url) : parameters.url;
        this.apiServiceOptions.parameters.parameters = parameters.parameters;
        this.apiServiceOptions.parameters.cacheKey = parameters.cacheKey;
        this.apiServiceOptions.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.apiServiceOptions.pendingCommandCount = 0;
        this.apiServiceOptions.pendingCommandsSubject = new Rx_1.Subject();
        this.apiServiceOptions.pendingCommands$ = this.apiServiceOptions.pendingCommandsSubject.asObservable();
        return (this.request(this.apiServiceOptions));
    };
    ApiService.prototype.post = function (parameters) {
        this.apiServiceOptions.method = http_1.RequestMethod.Post;
        this.apiServiceOptions.parameters = parameters;
        this.apiServiceOptions.parameters.url = index_1.Config.ENVIRONMENT().API.concat(parameters.url);
        this.apiServiceOptions.pendingCommandCount = 0;
        this.apiServiceOptions.pendingCommandsSubject = new Rx_1.Subject();
        this.apiServiceOptions.pendingCommands$ = this.apiServiceOptions.pendingCommandsSubject.asObservable();
        var isCommand = (this.apiServiceOptions.method !== http_1.RequestMethod.Post);
        if (isCommand) {
            this.apiServiceOptions.pendingCommandsSubject.next(++this.apiServiceOptions.pendingCommandCount);
        }
        return this.request(this.apiServiceOptions);
    };
    ApiService.prototype.mapper = function (parameters) {
        var _this = this;
        this.showLoader();
        //let api: string = (parameters.concatApi) ? Config.ENVIRONMENT().API.concat(parameters.url) : parameters.url;
        var api = (parameters.concatApi) ? 'http://192.168.0.8:8000/api/industries/Ing' : parameters.url;
        this.logger.info(api);
        return this.http.get(api)
            .catch(this.onCatch)
            .finally(function () {
            _this.onEnd();
        });
    };
    ApiService.prototype.request = function (options) {
        var _this = this;
        var requestOptions = null;
        if (options.parameters.allowRequestOption) {
            requestOptions = new http_1.RequestOptions();
            requestOptions.method = options.method;
            requestOptions.url = options.parameters.url;
            requestOptions.headers = options.headers;
            requestOptions.search = (this.buildUrlSearchParams(options.parameters.parameters));
            requestOptions.body = options.parameters.parameters;
        }
        var isCommand = (options.method !== http_1.RequestMethod.Get);
        if (isCommand) {
            options.pendingCommandsSubject.next(++options.pendingCommandCount);
        }
        return (this.http.request(options.parameters.url, requestOptions)
            .map(function (res) { return res.json(); })
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSuccess(res);
            //if (options.parameters.cacheKey !== '') this.storage.setItem(options.parameters.cacheKey, res);
        }, function (error) {
            _this.onError(error);
        })
            .finally(function () {
            _this.onEnd();
            if (isCommand)
                options.pendingCommandsSubject.next(--options.pendingCommandCount);
        }));
    };
    ApiService.prototype.buildUrlSearchParams = function (params) {
        var searchParams = new http_1.URLSearchParams();
        for (var key in params) {
            searchParams.append(key, params[key]);
        }
        return searchParams;
    };
    ApiService.prototype.onCatch = function (error, caught) {
        return Rx_1.Observable.throw(error);
    };
    ApiService.prototype.onSuccess = function (res) {
        this.logger.info('Request successful');
    };
    ApiService.prototype.onError = function (res) {
        this.logger.error('Error, status code: '.concat(res.status.toString()));
    };
    ApiService.prototype.onEnd = function () {
        this.hideLoader();
    };
    ApiService.prototype.showLoader = function () {
        this.loaderService.show();
    };
    ApiService.prototype.hideLoader = function () {
        this.loaderService.hide();
    };
    return ApiService;
}());
ApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        index_3.LogService,
        index_2.StorageService,
        models_1.ApiServiceOptions,
        services_1.LoaderService])
], ApiService);
exports.ApiService = ApiService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvYXBpL3NlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdHO0FBQ3hHLDhCQUE4QztBQUU5QywyQ0FBMkM7QUFFM0MsbUNBQTBFO0FBRTFFLDZDQUFpRTtBQUNqRSwwQ0FBOEM7QUFDOUMsZ0ZBQW9GO0FBR3BGLElBQWEsVUFBVTtJQUVuQixvQkFBb0IsSUFBVSxFQUNsQixNQUFrQixFQUNsQixPQUF1QixFQUN2QixpQkFBb0MsRUFDcEMsYUFBNEI7UUFKcEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBSSxDQUFDO0lBRTdDLHdCQUFHLEdBQUgsVUFBSSxVQUF1QztRQUN2QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEIsNkNBQTZDO1FBQzdDLDBFQUEwRTtRQUMxRSxHQUFHO1FBRUgsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxvQkFBYSxDQUFDLEdBQUcsQ0FBQztRQUNsRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUMvQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxjQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNsSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENB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a0JBQVU7UUFDVCxzQkFBYztRQUNKLDBCQUFpQjtRQUNyQix3QkFBYTtHQU4vQixVQUFVLENBOEh0QjtBQTlIWSxnQ0FBVSIsImZpbGUiOiJhcHAvbW9kdWxlcy9jb3JlL3NlcnZpY2VzL2FwaS9zZXJ2aWNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXF1ZXN0TWV0aG9kLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXgnO1xyXG5cclxuaW1wb3J0IHsgQXBpU2VydmljZU9wdGlvbnMsIEFwaVNlcnZpY2VQYXJhbWV0ZXJzT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlLCBTdG9yYWdlS2V5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuLi9sb2dnaW5nL2luZGV4JztcclxuaW1wb3J0IHsgTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9zZXJ2aWNlcy9zZXJ2aWNlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2dnZXI6IExvZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGFwaVNlcnZpY2VPcHRpb25zOiBBcGlTZXJ2aWNlT3B0aW9ucyxcclxuICAgICAgICBwcml2YXRlIGxvYWRlclNlcnZpY2U6IExvYWRlclNlcnZpY2UpIHsgfVxyXG5cclxuICAgIGdldChwYXJhbWV0ZXJzOiBBcGlTZXJ2aWNlUGFyYW1ldGVyc09wdGlvbnMpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgdGhpcy5zaG93TG9hZGVyKCk7XHJcblxyXG4gICAgICAgIC8vaWYgKHRoaXMuc3RvcmFnZS5oYXNJdGVtKHBhcmFtZXRlcnMudXJsKSkge1xyXG4gICAgICAgIC8vICAgIHJldHVybiAoT2JzZXJ2YWJsZS5vZih0aGlzLnN0b3JhZ2UuZ2V0SXRlbShwYXJhbWV0ZXJzLnVybCkpKSBhcyBhbnk7XHJcbiAgICAgICAgLy99XHJcblxyXG4gICAgICAgIHRoaXMuYXBpU2VydmljZU9wdGlvbnMubWV0aG9kID0gUmVxdWVzdE1ldGhvZC5HZXQ7XHJcbiAgICAgICAgdGhpcy5hcGlTZXJ2aWNlT3B0aW9ucy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcclxuICAgICAgICB0aGlzLmFwaVNlcnZpY2VPcHRpb25zLnBhcmFtZXRlcnMudXJsID0gKHBhcmFtZXRlcnMuY29uY2F0QXBpKSA/IENvbmZpZy5FTlZJUk9OTUVOVCgpLkFQSS5jb25jYXQocGFyYW1ldGVycy51cmwpIDogcGFyYW1ldGVycy51cmw7XHJcbiAgICAgICAgdGhpcy5hcGlTZXJ2aWNlT3B0aW9ucy5wYXJhbWV0ZXJzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzLnBhcmFtZXRlcnM7XHJcbiAgICAgICAgdGhpcy5hcGlTZXJ2aWNlT3B0aW9ucy5wYXJhbWV0ZXJzLmNhY2hlS2V5ID0gcGFyYW1ldGVycy5jYWNoZUtleTtcclxuICAgICAgICB0aGlzLmFwaVNlcnZpY2VPcHRpb25zLmhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgdGhpcy5hcGlTZXJ2aWNlT3B0aW9ucy5wZW5kaW5nQ29tbWFuZENvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmFwaVNlcnZpY2VPcHRpb25zLnBlbmRpbmdDb21tYW5kc1N1YmplY3QgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5hcGlTZXJ2aWNlT3B0aW9ucy5wZW5kaW5nQ29tbWFuZHMkID0gdGhpcy5hcGlTZXJ2aWNlT3B0aW9ucy5wZW5kaW5nQ29tbWFuZHNTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKHRoaXMucmVxdWVzdCh0aGlzLmFwaVNlcnZpY2VPcHRpb25zKSkgYXMgYW55O1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3QocGFyYW1ldGVyczogQXBpU2VydmljZVBhcmFtZXRlcnNPcHRpb25zKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG5cclxuICAgICAgICB0aGlzLmFwaVNlcnZpY2VPcHRpb25zLm1ldGhvZCA9IFJlcXVlc3RNZXRob2QuUG9zdDtcclxuICAgICAgICB0aGlzLmFwaVNlcnZpY2VPcHRpb25zLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xyXG4gICAgICAgIHRoaXMuYXBpU2VydmljZU9wdGlvbnMucGFyYW1ldGVycy51cmwgPSBDb25maWcuRU5WSVJPTk1FTlQoKS5BUEkuY29uY2F0KHBhcmFtZXRlcnMudXJsKTtcclxuICAgICAgICB0aGlzLmFwaVNlcnZpY2VPcHRpb25zLnBlbmRpbmdDb21tYW5kQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuYXBpU2VydmljZU9wdGlvbnMucGVuZGluZ0NvbW1hbmRzU3ViamVjdCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcclxuICAgICAgICB0aGlzLmFwaVNlcnZpY2VPcHRpb25zLnBlbmRpbmdDb21tYW5kcyQgPSB0aGlzLmFwaVNlcnZpY2VPcHRpb25zLnBlbmRpbmdDb21tYW5kc1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG5cclxuICAgICAgICBsZXQgaXNDb21tYW5kID0gKHRoaXMuYXBpU2VydmljZU9wdGlvbnMubWV0aG9kICE9PSBSZXF1ZXN0TWV0aG9kLlBvc3QpO1xyXG5cclxuICAgICAgICBpZiAoaXNDb21tYW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBpU2VydmljZU9wdGlvbnMucGVuZGluZ0NvbW1hbmRzU3ViamVjdC5uZXh0KCsrdGhpcy5hcGlTZXJ2aWNlT3B0aW9ucy5wZW5kaW5nQ29tbWFuZENvdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QodGhpcy5hcGlTZXJ2aWNlT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFwcGVyKHBhcmFtZXRlcnM6IEFwaVNlcnZpY2VQYXJhbWV0ZXJzT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgdGhpcy5zaG93TG9hZGVyKCk7XHJcblxyXG4gICAgICAgIC8vbGV0IGFwaTogc3RyaW5nID0gKHBhcmFtZXRlcnMuY29uY2F0QXBpKSA/IENvbmZpZy5FTlZJUk9OTUVOVCgpLkFQSS5jb25jYXQocGFyYW1ldGVycy51cmwpIDogcGFyYW1ldGVycy51cmw7XG4gICAgICAgIGxldCBhcGk6IHN0cmluZyA9IChwYXJhbWV0ZXJzLmNvbmNhdEFwaSkgPyAnaHR0cDovLzE5Mi4xNjguMC44OjgwMDAvYXBpL2luZHVzdHJpZXMvSW5nJyA6IHBhcmFtZXRlcnMudXJsO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKGFwaSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGFwaSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMub25DYXRjaClcclxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkVuZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlcXVlc3Qob3B0aW9uczogQXBpU2VydmljZU9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGxldCByZXF1ZXN0T3B0aW9ucyA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLnBhcmFtZXRlcnMuYWxsb3dSZXF1ZXN0T3B0aW9uKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKCk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kO1xyXG4gICAgICAgICAgICByZXF1ZXN0T3B0aW9ucy51cmwgPSBvcHRpb25zLnBhcmFtZXRlcnMudXJsO1xyXG4gICAgICAgICAgICByZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xyXG4gICAgICAgICAgICByZXF1ZXN0T3B0aW9ucy5zZWFyY2ggPSAoKHRoaXMuYnVpbGRVcmxTZWFyY2hQYXJhbXMob3B0aW9ucy5wYXJhbWV0ZXJzLnBhcmFtZXRlcnMpKSBhcyBhbnkpO1xyXG4gICAgICAgICAgICByZXF1ZXN0T3B0aW9ucy5ib2R5ID0gb3B0aW9ucy5wYXJhbWV0ZXJzLnBhcmFtZXRlcnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaXNDb21tYW5kID0gKG9wdGlvbnMubWV0aG9kICE9PSBSZXF1ZXN0TWV0aG9kLkdldCk7XHJcblxyXG4gICAgICAgIGlmIChpc0NvbW1hbmQpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5wZW5kaW5nQ29tbWFuZHNTdWJqZWN0Lm5leHQoKytvcHRpb25zLnBlbmRpbmdDb21tYW5kQ291bnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmh0dHAucmVxdWVzdChvcHRpb25zLnBhcmFtZXRlcnMudXJsLCByZXF1ZXN0T3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMub25DYXRjaClcclxuICAgICAgICAgICAgLmRvKChyZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgLy9pZiAob3B0aW9ucy5wYXJhbWV0ZXJzLmNhY2hlS2V5ICE9PSAnJykgdGhpcy5zdG9yYWdlLnNldEl0ZW0ob3B0aW9ucy5wYXJhbWV0ZXJzLmNhY2hlS2V5LCByZXMpO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkVuZCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzQ29tbWFuZCkgb3B0aW9ucy5wZW5kaW5nQ29tbWFuZHNTdWJqZWN0Lm5leHQoLS1vcHRpb25zLnBlbmRpbmdDb21tYW5kQ291bnQpO1xyXG4gICAgICAgICAgICB9KSkgYXMgYW55O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGRVcmxTZWFyY2hQYXJhbXMocGFyYW1zOiBhbnkpOiBVUkxTZWFyY2hQYXJhbXMge1xyXG4gICAgICAgIGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHBhcmFtcykge1xyXG4gICAgICAgICAgICBzZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgcGFyYW1zW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2VhcmNoUGFyYW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DYXRjaChlcnJvcjogYW55LCBjYXVnaHQ6IE9ic2VydmFibGU8YW55Pik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TdWNjZXNzKHJlczogUmVzcG9uc2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKCdSZXF1ZXN0IHN1Y2Nlc3NmdWwnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRXJyb3IocmVzOiBSZXNwb25zZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdFcnJvciwgc3RhdHVzIGNvZGU6ICcuY29uY2F0KHJlcy5zdGF0dXMudG9TdHJpbmcoKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25FbmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oaWRlTG9hZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93TG9hZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9hZGVyU2VydmljZS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoaWRlTG9hZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9hZGVyU2VydmljZS5oaWRlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
