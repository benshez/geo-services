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
    return StorageService;
}());
StorageService = __decorate([
    core_1.Injectable()
], StorageService);
exports.StorageService = StorageService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxVQUFVO0FBQ1Ysc0NBQTJDO0FBTTNDLElBQWEsY0FBYztJQUQzQjtRQUFBLGlCQW1CQztRQUhHLFlBQU8sR0FBRyxVQUFDLEdBQWU7WUFDdEIsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDO1FBQ3RDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFoQkcsZ0NBQU8sR0FBUCxVQUFRLEdBQWUsRUFBRSxLQUFVO1FBQy9CLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxLQUFLLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxHQUFlO1FBQ25CLElBQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsR0FBZTtRQUN0QixZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBS0wscUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLGNBQWM7SUFEMUIsaUJBQVUsRUFBRTtHQUNBLGNBQWMsQ0FrQjFCO0FBbEJZLHdDQUFjIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IElTdG9yYWdlLCBTdG9yYWdlS2V5IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pc3RvcmFnZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdG9yYWdlU2VydmljZSBpbXBsZW1lbnRzIElTdG9yYWdlIHtcblxuICAgIHNldEl0ZW0oa2V5OiBTdG9yYWdlS2V5LCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCcnICsga2V5LCB2YWx1ZSA9PT0gbnVsbCA/IG51bGwgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIH1cblxuICAgIGdldEl0ZW0oa2V5OiBTdG9yYWdlS2V5KTogYW55IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnJyArIGtleSk7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IG51bGwgOiBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZW1vdmVJdGVtKGtleTogU3RvcmFnZUtleSk6IHZvaWQge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnJyArIGtleSk7XG4gICAgfVxuXG4gICAgaGFzSXRlbSA9IChrZXk6IFN0b3JhZ2VLZXkpOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbShrZXkpICE9PSBudWxsO1xuICAgIH1cbn1cbiJdfQ==
