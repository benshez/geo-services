"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var _ = require("lodash");
var Rx_1 = require("rxjs/Rx");
var index_1 = require("../../utilities/index");
var index_2 = require("../../interfaces/index");
var index_3 = require("../../../core/services/index");
var ApiService = (function () {
    function ApiService(http, logger, storage) {
        this.http = http;
        this.logger = logger;
        this.storage = storage;
        this.api = index_1.Config.ENVIRONMENT().API;
        this.user = null;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Authorization': (this.user) ? JSON.parse(this.storage.getItem(index_2.StorageKey.USER_DETAIL)).token_char : null
        });
        this.options = new http_1.RequestOptions({
            headers: this.headers,
            method: 'Get'
        });
    }
    ApiService.prototype.get = function (endpoint, params, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (params) {
            var urlSearchParams_1 = new http_1.URLSearchParams();
            _.forEach(params, function (value, key) { return urlSearchParams_1.set(key, value); });
            options.search = !options.search ? urlSearchParams_1 : options.search;
        }
        return this.http
            .get(this.api + "/" + endpoint, this.options.merge(options))
            .map(function (res) { return res.json(); })
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        })
            .finally(function () {
            _this.onEnd();
        });
    };
    ApiService.prototype.post = function (endpoint, body, options) {
        var _this = this;
        return this.http
            .post(this.api + "/" + endpoint, body, this.options.merge(options))
            .map(function (res) { return res.json(); })
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        })
            .finally(function () {
            _this.onEnd();
        });
    };
    ApiService.prototype.put = function (endpoint, body, options) {
        var _this = this;
        return this.http
            .put(this.api + "/" + endpoint, body, this.options.merge(options))
            .map(function (res) { return res.json(); })
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        })
            .finally(function () {
            _this.onEnd();
        });
    };
    ApiService.prototype.delete = function (endpoint, options) {
        var _this = this;
        return this.http
            .delete(this.api + "/" + endpoint, this.options.merge(options))
            .map(function (res) { return res.json(); })
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        })
            .finally(function () {
            _this.onEnd();
        });
    };
    ApiService.prototype.patch = function (endpoint, body, options) {
        var _this = this;
        return this.http
            .patch(this.api + "/" + endpoint, body, this.options.merge(options))
            .map(function (res) { return res.json(); })
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        })
            .finally(function () {
            _this.onEnd();
        });
    };
    ApiService.prototype.onCatch = function (error) {
        return Rx_1.Observable.throw(error);
    };
    ApiService.prototype.onSuccess = function (_res) {
        this.logger.info('Request successful');
    };
    ApiService.prototype.onError = function (res) {
        this.logger.error('Error, status code: '.concat(res.status.toString()));
    };
    ApiService.prototype.onEnd = function () {
        // this.hideLoader();
    };
    ApiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            index_3.LogService,
            index_3.StorageService])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FPdUI7QUFDdkIsMEJBQTRCO0FBQzVCLDhCQUFxQztBQUNyQywrQ0FBK0M7QUFDL0MsZ0RBQW9EO0FBQ3BELHNEQUdzQztBQUd0QztJQWFFLG9CQUNVLElBQVUsRUFDVixNQUFrQixFQUNsQixPQUF1QjtRQUZ2QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQWR6QixRQUFHLEdBQVcsY0FBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUN2QyxTQUFJLEdBQVcsSUFBSSxDQUFDO1FBQ3BCLFlBQU8sR0FBWSxJQUFJLGNBQU8sQ0FBQztZQUNyQyxjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSTtTQUMxRyxDQUFDLENBQUM7UUFDSyxZQUFPLEdBQW1CLElBQUkscUJBQWMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDLENBQUM7SUFNQyxDQUFDO0lBRUwsd0JBQUcsR0FBSCxVQUNFLFFBQWdCLEVBQ2hCLE1BQVksRUFDWixPQUFnQztRQUhsQyxpQkF3QkM7UUFyQkMsd0JBQUEsRUFBQSxZQUFnQztRQUdoQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBTSxpQkFBZSxHQUFvQixJQUFJLHNCQUFlLEVBQUUsQ0FBQztZQUMvRCxDQUFDLENB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SyxFQUFFLENBQUM7UUFDZixDQUFDLENBQVEsQ0FBQztJQUNkLENBQUM7SUFFTyw0QkFBTyxHQUFmLFVBQWdCLEtBQVU7UUFDeEIsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFvQixDQUFDO0lBQ3BELENBQUM7SUFFTyw4QkFBUyxHQUFqQixVQUFrQixJQUFjO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLDRCQUFPLEdBQWYsVUFBZ0IsR0FBYTtRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVPLDBCQUFLLEdBQWI7UUFDRSxxQkFBcUI7SUFDdkIsQ0FBQztJQTFJVSxVQUFVO1FBRHRCLGlCQUFVLEVBQUU7eUNBZUssV0FBSTtZQUNGLGtCQUFVO1lBQ1Qsc0JBQWM7T0FoQnRCLFVBQVUsQ0FtSnRCO0lBQUQsaUJBQUM7Q0FBQSxBQW5KRCxJQW1KQztBQW5KWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBIZWFkZXJzLFxyXG4gIEh0dHAsXHJcbiAgUmVxdWVzdE9wdGlvbnMsXHJcbiAgUmVxdWVzdE9wdGlvbnNBcmdzLFxyXG4gIFJlc3BvbnNlLFxyXG4gIFVSTFNlYXJjaFBhcmFtc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2luZGV4JztcclxuaW1wb3J0IHsgU3RvcmFnZUtleSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnO1xyXG5pbXBvcnQge1xyXG4gIExvZ1NlcnZpY2UsXHJcbiAgU3RvcmFnZVNlcnZpY2VcclxufSBmcm9tICcuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIGFwaTogc3RyaW5nID0gQ29uZmlnLkVOVklST05NRU5UKCkuQVBJO1xyXG4gIHByaXZhdGUgdXNlcjogc3RyaW5nID0gbnVsbDtcclxuICBwcml2YXRlIGhlYWRlcnM6IEhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgJ0F1dGhvcml6YXRpb24nOiAodGhpcy51c2VyKSA/IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldEl0ZW0oU3RvcmFnZUtleS5VU0VSX0RFVEFJTCkpLnRva2VuX2NoYXIgOiBudWxsXHJcbiAgfSk7XHJcbiAgcHJpdmF0ZSBvcHRpb25zOiBSZXF1ZXN0T3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XHJcbiAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICBtZXRob2Q6ICdHZXQnXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2VTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgZ2V0KFxyXG4gICAgZW5kcG9pbnQ6IHN0cmluZyxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM6IFJlcXVlc3RPcHRpb25zQXJncyA9IHt9XHJcbiAgKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG5cclxuICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgY29uc3QgdXJsU2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgIF8uZm9yRWFjaChwYXJhbXMsICh2YWx1ZTogYW55LCBrZXk6IHN0cmluZyk6IHZvaWQgPT4gdXJsU2VhcmNoUGFyYW1zLnNldChrZXksIHZhbHVlKSk7XHJcbiAgICAgIG9wdGlvbnMuc2VhcmNoID0gIW9wdGlvbnMuc2VhcmNoID8gdXJsU2VhcmNoUGFyYW1zIDogb3B0aW9ucy5zZWFyY2g7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KGAke3RoaXMuYXBpfS8ke2VuZHBvaW50fWAsIHRoaXMub3B0aW9ucy5tZXJnZShvcHRpb25zKSlcclxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSBhcyBhbnkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLm9uQ2F0Y2gpXHJcbiAgICAgIC5kbygocmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMub25TdWNjZXNzKHJlcyk7XHJcbiAgICAgIH0sIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkVycm9yKGVycm9yKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25FbmQoKTtcclxuICAgICAgfSkgYXMgYW55O1xyXG4gIH1cclxuXHJcbiAgcG9zdChcclxuICAgIGVuZHBvaW50OiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzXHJcbiAgKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QoYCR7dGhpcy5hcGl9LyR7ZW5kcG9pbnR9YCwgYm9keSwgdGhpcy5vcHRpb25zLm1lcmdlKG9wdGlvbnMpKVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpIGFzIGFueSlcclxuICAgICAgLmNhdGNoKHRoaXMub25DYXRjaClcclxuICAgICAgLmRvKChyZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3MocmVzKTtcclxuICAgICAgfSwgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLm9uRXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkVuZCgpO1xyXG4gICAgICB9KSBhcyBhbnk7XHJcbiAgfVxyXG5cclxuICBwdXQoXHJcbiAgICBlbmRwb2ludDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJnc1xyXG4gICk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5wdXQoYCR7dGhpcy5hcGl9LyR7ZW5kcG9pbnR9YCwgYm9keSwgdGhpcy5vcHRpb25zLm1lcmdlKG9wdGlvbnMpKVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpIGFzIGFueSlcclxuICAgICAgLmNhdGNoKHRoaXMub25DYXRjaClcclxuICAgICAgLmRvKChyZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3MocmVzKTtcclxuICAgICAgfSwgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLm9uRXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkVuZCgpO1xyXG4gICAgICB9KSBhcyBhbnk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoXHJcbiAgICBlbmRwb2ludDogc3RyaW5nLFxyXG4gICAgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJnc1xyXG4gICk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5kZWxldGUoYCR7dGhpcy5hcGl9LyR7ZW5kcG9pbnR9YCwgdGhpcy5vcHRpb25zLm1lcmdlKG9wdGlvbnMpKVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpIGFzIGFueSlcclxuICAgICAgLmNhdGNoKHRoaXMub25DYXRjaClcclxuICAgICAgLmRvKChyZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3MocmVzKTtcclxuICAgICAgfSwgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLm9uRXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkVuZCgpO1xyXG4gICAgICB9KSBhcyBhbnk7XHJcbiAgfVxyXG5cclxuICBwYXRjaChcclxuICAgIGVuZHBvaW50OiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzXHJcbiAgKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLnBhdGNoKGAke3RoaXMuYXBpfS8ke2VuZHBvaW50fWAsIGJvZHksIHRoaXMub3B0aW9ucy5tZXJnZShvcHRpb25zKSlcclxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSBhcyBhbnkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLm9uQ2F0Y2gpXHJcbiAgICAgIC5kbygocmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMub25TdWNjZXNzKHJlcyk7XHJcbiAgICAgIH0sIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkVycm9yKGVycm9yKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25FbmQoKTtcclxuICAgICAgfSkgYXMgYW55O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNhdGNoKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpIGFzIE9ic2VydmFibGU8YW55PjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25TdWNjZXNzKF9yZXM6IFJlc3BvbnNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdSZXF1ZXN0IHN1Y2Nlc3NmdWwnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25FcnJvcihyZXM6IFJlc3BvbnNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ2dlci5lcnJvcignRXJyb3IsIHN0YXR1cyBjb2RlOiAnLmNvbmNhdChyZXMuc3RhdHVzLnRvU3RyaW5nKCkpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25FbmQoKTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLmhpZGVMb2FkZXIoKTtcclxuICB9XHJcblxyXG4gIC8vIHByaXZhdGUgc2hvd0xvYWRlcigpOiB2b2lkIHtcclxuICAvLyAgIC8vdGhpcy5sb2FkZXJTZXJ2aWNlLnNob3coKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHByaXZhdGUgaGlkZUxvYWRlcigpOiB2b2lkIHtcclxuICAvLyAgIHRoaXMubG9hZGVyU2VydmljZS5oaWRlKCk7XHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==