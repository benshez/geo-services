"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var StorageService = (function () {
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
    StorageService = __decorate([
        core_1.Injectable()
    ], StorageService);
    return StorageService;
}());
exports.StorageService = StorageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsVUFBVTtBQUNWLHNDQUEyQztBQU0zQztJQURBO1FBQUEsaUJBbUJDO1FBSEMsWUFBTyxHQUFHLFVBQUMsR0FBZTtZQUN4QixNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUM7UUFDcEMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQWhCQyxnQ0FBTyxHQUFQLFVBQVEsR0FBZSxFQUFFLEtBQVU7UUFDakMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLEtBQUssS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsZ0NBQU8sR0FBUCxVQUFRLEdBQWU7UUFDckIsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxHQUFlO1FBQ3hCLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFiVSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7T0FDQSxjQUFjLENBa0IxQjtJQUFELHFCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgSVN0b3JhZ2UsIFN0b3JhZ2VLZXkgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VTZXJ2aWNlIGltcGxlbWVudHMgSVN0b3JhZ2Uge1xuXG4gIHNldEl0ZW0oa2V5OiBTdG9yYWdlS2V5LCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJycgKyBrZXksIHZhbHVlID09PSBudWxsID8gbnVsbCA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH1cblxuICBnZXRJdGVtKGtleTogU3RvcmFnZUtleSk6IGFueSB7XG4gICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnJyArIGtleSk7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsID8gbnVsbCA6IEpTT04ucGFyc2UodmFsdWUpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShrZXk6IFN0b3JhZ2VLZXkpOiB2b2lkIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnJyArIGtleSk7XG4gIH1cblxuICBoYXNJdGVtID0gKGtleTogU3RvcmFnZUtleSk6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiB0aGlzLmdldEl0ZW0oa2V5KSAhPT0gbnVsbDtcbiAgfVxufVxuIl19