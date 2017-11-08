"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var StorageService = function () {
    function StorageService() {
        var _this = this;
        this.hasItem = function (key) {
            return _this.getItem(key) !== null;
        };
    }
    StorageService.prototype.setItem = function (key, value) {
        localStorage.setItem('' + key, value === null ? null : JSON.stringify(value));
    };
    StorageService.prototype.getItem = function (key) {
        var value = localStorage.getItem('' + key);
        return value === null ? null : JSON.parse(value);
    };
    StorageService.prototype.removeItem = function (key) {
        localStorage.removeItem('' + key);
    };
    StorageService = __decorate([core_1.Injectable()], StorageService);
    return StorageService;
}();
exports.StorageService = StorageService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLEFBQVU7QUFDVixxQkFBMkM7QUFNM0M7QUFEQTtBQUFBLG9CQW1CQztBQUhDLGFBQU8sVUFBRyxVQUFDLEFBQWU7QUFDeEIsQUFBTSxtQkFBQyxBQUFJLE1BQUMsQUFBTyxRQUFDLEFBQUcsQUFBQyxTQUFLLEFBQUksQUFBQyxBQUNwQztBQUFDLEFBQ0g7QUFBQztBQWhCQyw2QkFBTyxVQUFQLFVBQVEsQUFBZSxLQUFFLEFBQVU7QUFDakMsQUFBWSxxQkFBQyxBQUFPLFFBQUMsQUFBRSxLQUFHLEFBQUcsS0FBRSxBQUFLLFVBQUssQUFBSSxPQUFHLEFBQUksT0FBRyxBQUFJLEtBQUMsQUFBUyxVQUFDLEFBQUssQUFBQyxBQUFDLEFBQUMsQUFDaEY7QUFBQztBQUVELDZCQUFPLFVBQVAsVUFBUSxBQUFlO0FBQ3JCLFlBQU0sQUFBSyxRQUFHLEFBQVksYUFBQyxBQUFPLFFBQUMsQUFBRSxLQUFHLEFBQUcsQUFBQyxBQUFDO0FBQzdDLEFBQU0sZUFBQyxBQUFLLFVBQUssQUFBSSxPQUFHLEFBQUksT0FBRyxBQUFJLEtBQUMsQUFBSyxNQUFDLEFBQUssQUFBQyxBQUFDLEFBQ25EO0FBQUM7QUFFRCw2QkFBVSxhQUFWLFVBQVcsQUFBZTtBQUN4QixBQUFZLHFCQUFDLEFBQVUsV0FBQyxBQUFFLEtBQUcsQUFBRyxBQUFDLEFBQUMsQUFDcEM7QUFBQztBQWJVLEFBQWMsaUNBRDFCLE9BQVUsQUFBRSxlQUNBLEFBQWMsQUFrQjFCO0FBQUQsV0FBQztBQWxCRCxBQWtCQztBQWxCWSx5QkFBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBJU3RvcmFnZSwgU3RvcmFnZUtleSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RvcmFnZVNlcnZpY2UgaW1wbGVtZW50cyBJU3RvcmFnZSB7XG5cbiAgc2V0SXRlbShrZXk6IFN0b3JhZ2VLZXksIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnJyArIGtleSwgdmFsdWUgPT09IG51bGwgPyBudWxsIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfVxuXG4gIGdldEl0ZW0oa2V5OiBTdG9yYWdlS2V5KTogYW55IHtcbiAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCcnICsga2V5KTtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgPyBudWxsIDogSlNPTi5wYXJzZSh2YWx1ZSk7XG4gIH1cblxuICByZW1vdmVJdGVtKGtleTogU3RvcmFnZUtleSk6IHZvaWQge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCcnICsga2V5KTtcbiAgfVxuXG4gIGhhc0l0ZW0gPSAoa2V5OiBTdG9yYWdlS2V5KTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SXRlbShrZXkpICE9PSBudWxsO1xuICB9XG59XG4iXX0=