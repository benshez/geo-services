"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var _ = require("lodash");
var Rx_1 = require("rxjs/Rx");
var index_1 = require("../../utilities/index");
var index_2 = require("../../interfaces/index");
var index_3 = require("../../../core/services/index");
var ApiService = function () {
    function ApiService(http, logger, storage) {
        this.http = http;
        this.logger = logger;
        this.storage = storage;
        this.api = index_1.Config.ENVIRONMENT().API;
        this.user = null;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Authorization': this.user ? JSON.parse(this.storage.getItem(index_2.StorageKey.USER_DETAIL)).token_char : null
        });
        this.options = new http_1.RequestOptions({
            headers: this.headers,
            method: 'Get'
        });
    }
    ApiService.prototype.get = function (endpoint, params, options) {
        var _this = this;
        if (options === void 0) {
            options = {};
        }
        if (params) {
            var urlSearchParams_1 = new http_1.URLSearchParams();
            _.forEach(params, function (value, key) {
                return urlSearchParams_1.set(key, value);
            });
            options.search = !options.search ? urlSearchParams_1 : options.search;
        }
        return this.http.get(this.api + "/" + endpoint, this.options.merge(options)).map(function (res) {
            return res.json();
        }).catch(this.onCatch).do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        }).finally(function () {
            _this.onEnd();
        });
    };
    ApiService.prototype.post = function (endpoint, body, options) {
        var _this = this;
        return this.http.post(this.api + "/" + endpoint, body, this.options.merge(options)).map(function (res) {
            return res.json();
        }).catch(this.onCatch).do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        }).finally(function () {
            _this.onEnd();
        });
    };
    ApiService.prototype.put = function (endpoint, body, options) {
        var _this = this;
        return this.http.put(this.api + "/" + endpoint, body, this.options.merge(options)).map(function (res) {
            return res.json();
        }).catch(this.onCatch).do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        }).finally(function () {
            _this.onEnd();
        });
    };
    ApiService.prototype.delete = function (endpoint, options) {
        var _this = this;
        return this.http.delete(this.api + "/" + endpoint, this.options.merge(options)).map(function (res) {
            return res.json();
        }).catch(this.onCatch).do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        }).finally(function () {
            _this.onEnd();
        });
    };
    ApiService.prototype.patch = function (endpoint, body, options) {
        var _this = this;
        return this.http.patch(this.api + "/" + endpoint, body, this.options.merge(options)).map(function (res) {
            return res.json();
        }).catch(this.onCatch).do(function (res) {
            _this.onSuccess(res);
        }, function (error) {
            _this.onError(error);
        }).finally(function () {
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
    ApiService = __decorate([core_1.Injectable(), __metadata("design:paramtypes", [http_1.Http, index_3.LogService, index_3.StorageService])], ApiService);
    return ApiService;
}();
exports.ApiService = ApiService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQkFBMkM7QUFDM0MscUJBT3VCO0FBQ3ZCLGdCQUE0QjtBQUM1QixtQkFBcUM7QUFDckMsc0JBQStDO0FBQy9DLHNCQUFvRDtBQUNwRCxzQkFHc0M7QUFHdEM7QUFhRSx3QkFDVSxBQUFVLE1BQ1YsQUFBa0IsUUFDbEIsQUFBdUI7QUFGdkIsYUFBSSxPQUFKLEFBQUksQUFBTTtBQUNWLGFBQU0sU0FBTixBQUFNLEFBQVk7QUFDbEIsYUFBTyxVQUFQLEFBQU8sQUFBZ0I7QUFkekIsYUFBRyxNQUFXLFFBQU0sT0FBQyxBQUFXLEFBQUUsY0FBQyxBQUFHLEFBQUM7QUFDdkMsYUFBSSxPQUFXLEFBQUksQUFBQztBQUNwQixhQUFPLGNBQWdCLE9BQU87QUFDcEMsQUFBYyw0QkFBRSxBQUFrQjtBQUNsQyxBQUFlLDZCQUFHLEFBQUksS0FBQyxBQUFJLEFBQUMsSUFBWCxHQUFjLEFBQUksS0FBQyxBQUFLLE1BQUMsQUFBSSxLQUFDLEFBQU8sUUFBQyxBQUFPLFFBQUMsUUFBVSxXQUFDLEFBQVcsQUFBQyxBQUFDLGNBQUMsQUFBVSxhQUFHLEFBQUksQUFDMUcsQUFBQyxBQUFDO0FBSG9DLFNBQVo7QUFJbkIsYUFBTyxjQUF1QixPQUFjO0FBQ2xELEFBQU8scUJBQUUsQUFBSSxLQUFDLEFBQU87QUFDckIsQUFBTSxvQkFBRSxBQUFLLEFBQ2QsQUFBQyxBQUFDLEFBTUM7QUFUaUQsU0FBbkI7QUFTN0I7QUFFTCx5QkFBRyxNQUFILFVBQ0UsQUFBZ0IsVUFDaEIsQUFBWSxRQUNaLEFBQWdDO0FBSGxDLG9CQXdCQztBQXJCQyxnQ0FBQTtBQUFBLHNCQUFnQzs7QUFHaEMsQUFBRSxBQUFDLFlBQUMsQUFBTSxBQUFDLFFBQUMsQUFBQztBQUNYLGdCQUFNLEFBQWUsb0JBQW9CLElBQUksT0FBZSxBQUFFLEFBQUM7QUFD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QU8sUUFBQztBQUNQLEFBQUksa0JBQUMsQUFBSyxBQUFFLEFBQUMsQUFDZjtBQUFDLEFBQVEsQUFBQyxBQUNkO0FBQUM7QUFFTyx5QkFBTyxVQUFmLFVBQWdCLEFBQVU7QUFDeEIsQUFBTSxlQUFDLEtBQVUsV0FBQyxBQUFLLE1BQUMsQUFBSyxBQUFvQixBQUFDLEFBQ3BEO0FBQUM7QUFFTyx5QkFBUyxZQUFqQixVQUFrQixBQUFjO0FBQzlCLEFBQUksYUFBQyxBQUFNLE9BQUMsQUFBSSxLQUFDLEFBQW9CLEFBQUMsQUFBQyxBQUN6QztBQUFDO0FBRU8seUJBQU8sVUFBZixVQUFnQixBQUFhO0FBQzNCLEFBQUksYUFBQyxBQUFNLE9BQUMsQUFBSyxNQUFDLEFBQXNCLHVCQUFDLEFBQU0sT0FBQyxBQUFHLElBQUMsQUFBTSxPQUFDLEFBQVEsQUFBRSxBQUFDLEFBQUMsQUFBQyxBQUMxRTtBQUFDO0FBRU8seUJBQUssUUFBYjtBQUNFLEFBQXFCLEFBQ3ZCO0FBQUM7QUExSVUsQUFBVSw2QkFEdEIsT0FBVSxBQUFFLCtDQWVLLE9BQUksTUFDRixRQUFVLFlBQ1QsUUFBYyxtQkFoQnRCLEFBQVUsQUFtSnRCO0FBQUQsV0FBQztBQW5KRCxBQW1KQztBQW5KWSxxQkFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBIZWFkZXJzLFxyXG4gIEh0dHAsXHJcbiAgUmVxdWVzdE9wdGlvbnMsXHJcbiAgUmVxdWVzdE9wdGlvbnNBcmdzLFxyXG4gIFJlc3BvbnNlLFxyXG4gIFVSTFNlYXJjaFBhcmFtc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2luZGV4JztcclxuaW1wb3J0IHsgU3RvcmFnZUtleSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnO1xyXG5pbXBvcnQge1xyXG4gIExvZ1NlcnZpY2UsXHJcbiAgU3RvcmFnZVNlcnZpY2VcclxufSBmcm9tICcuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIGFwaTogc3RyaW5nID0gQ29uZmlnLkVOVklST05NRU5UKCkuQVBJO1xyXG4gIHByaXZhdGUgdXNlcjogc3RyaW5nID0gbnVsbDtcclxuICBwcml2YXRlIGhlYWRlcnM6IEhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgJ0F1dGhvcml6YXRpb24nOiAodGhpcy51c2VyKSA/IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldEl0ZW0oU3RvcmFnZUtleS5VU0VSX0RFVEFJTCkpLnRva2VuX2NoYXIgOiBudWxsXHJcbiAgfSk7XHJcbiAgcHJpdmF0ZSBvcHRpb25zOiBSZXF1ZXN0T3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XHJcbiAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICBtZXRob2Q6ICdHZXQnXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2VTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgZ2V0KFxyXG4gICAgZW5kcG9pbnQ6IHN0cmluZyxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM6IFJlcXVlc3RPcHRpb25zQXJncyA9IHt9XHJcbiAgKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG5cclxuICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgY29uc3QgdXJsU2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgIF8uZm9yRWFjaChwYXJhbXMsICh2YWx1ZTogYW55LCBrZXk6IHN0cmluZyk6IHZvaWQgPT4gdXJsU2VhcmNoUGFyYW1zLnNldChrZXksIHZhbHVlKSk7XHJcbiAgICAgIG9wdGlvbnMuc2VhcmNoID0gIW9wdGlvbnMuc2VhcmNoID8gdXJsU2VhcmNoUGFyYW1zIDogb3B0aW9ucy5zZWFyY2g7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KGAke3RoaXMuYXBpfS8ke2VuZHBvaW50fWAsIHRoaXMub3B0aW9ucy5tZXJnZShvcHRpb25zKSlcclxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSBhcyBhbnkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLm9uQ2F0Y2gpXHJcbiAgICAgIC5kbygocmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMub25TdWNjZXNzKHJlcyk7XHJcbiAgICAgIH0sIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkVycm9yKGVycm9yKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25FbmQoKTtcclxuICAgICAgfSkgYXMgYW55O1xyXG4gIH1cclxuXHJcbiAgcG9zdChcclxuICAgIGVuZHBvaW50OiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzXHJcbiAgKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QoYCR7dGhpcy5hcGl9LyR7ZW5kcG9pbnR9YCwgYm9keSwgdGhpcy5vcHRpb25zLm1lcmdlKG9wdGlvbnMpKVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpIGFzIGFueSlcclxuICAgICAgLmNhdGNoKHRoaXMub25DYXRjaClcclxuICAgICAgLmRvKChyZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3MocmVzKTtcclxuICAgICAgfSwgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLm9uRXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkVuZCgpO1xyXG4gICAgICB9KSBhcyBhbnk7XHJcbiAgfVxyXG5cclxuICBwdXQoXHJcbiAgICBlbmRwb2ludDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJnc1xyXG4gICk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5wdXQoYCR7dGhpcy5hcGl9LyR7ZW5kcG9pbnR9YCwgYm9keSwgdGhpcy5vcHRpb25zLm1lcmdlKG9wdGlvbnMpKVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpIGFzIGFueSlcclxuICAgICAgLmNhdGNoKHRoaXMub25DYXRjaClcclxuICAgICAgLmRvKChyZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3MocmVzKTtcclxuICAgICAgfSwgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLm9uRXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkVuZCgpO1xyXG4gICAgICB9KSBhcyBhbnk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoXHJcbiAgICBlbmRwb2ludDogc3RyaW5nLFxyXG4gICAgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJnc1xyXG4gICk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5kZWxldGUoYCR7dGhpcy5hcGl9LyR7ZW5kcG9pbnR9YCwgdGhpcy5vcHRpb25zLm1lcmdlKG9wdGlvbnMpKVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpIGFzIGFueSlcclxuICAgICAgLmNhdGNoKHRoaXMub25DYXRjaClcclxuICAgICAgLmRvKChyZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3MocmVzKTtcclxuICAgICAgfSwgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLm9uRXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkVuZCgpO1xyXG4gICAgICB9KSBhcyBhbnk7XHJcbiAgfVxyXG5cclxuICBwYXRjaChcclxuICAgIGVuZHBvaW50OiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzXHJcbiAgKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLnBhdGNoKGAke3RoaXMuYXBpfS8ke2VuZHBvaW50fWAsIGJvZHksIHRoaXMub3B0aW9ucy5tZXJnZShvcHRpb25zKSlcclxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSBhcyBhbnkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLm9uQ2F0Y2gpXHJcbiAgICAgIC5kbygocmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMub25TdWNjZXNzKHJlcyk7XHJcbiAgICAgIH0sIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkVycm9yKGVycm9yKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25FbmQoKTtcclxuICAgICAgfSkgYXMgYW55O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNhdGNoKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpIGFzIE9ic2VydmFibGU8YW55PjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25TdWNjZXNzKF9yZXM6IFJlc3BvbnNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdSZXF1ZXN0IHN1Y2Nlc3NmdWwnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25FcnJvcihyZXM6IFJlc3BvbnNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ2dlci5lcnJvcignRXJyb3IsIHN0YXR1cyBjb2RlOiAnLmNvbmNhdChyZXMuc3RhdHVzLnRvU3RyaW5nKCkpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25FbmQoKTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLmhpZGVMb2FkZXIoKTtcclxuICB9XHJcblxyXG4gIC8vIHByaXZhdGUgc2hvd0xvYWRlcigpOiB2b2lkIHtcclxuICAvLyAgIC8vdGhpcy5sb2FkZXJTZXJ2aWNlLnNob3coKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHByaXZhdGUgaGlkZUxvYWRlcigpOiB2b2lkIHtcclxuICAvLyAgIHRoaXMubG9hZGVyU2VydmljZS5oaWRlKCk7XHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==