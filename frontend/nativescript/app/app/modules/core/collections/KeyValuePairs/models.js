Object.defineProperty(exports, "__esModule", { value: true });
var dictionary_1 = require("./dictionary");
var KeyValueDictionary = (function (_super) {
    __extends(KeyValueDictionary, _super);
    function KeyValueDictionary(init) {
        return _super.call(this, init) || this;
    }
    KeyValueDictionary.prototype.values = function () {
        return this._values;
    };
    KeyValueDictionary.prototype.toLookup = function () {
        return this;
    };
    return KeyValueDictionary;
}(dictionary_1.Dictionary));
exports.KeyValueDictionary = KeyValueDictionary;
var KeyValueArray = (function () {
    function KeyValueArray(key, value) {
    }
    return KeyValueArray;
}());
exports.KeyValueArray = KeyValueArray;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvY29sbGVjdGlvbnMvS2V5VmFsdWVQYWlycy9tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJDQUEwQztBQUcxQztJQUF3QyxzQ0FBVTtJQUM5Qyw0QkFBWSxJQUEwQztlQUNsRCxrQkFBTSxJQUFJLENBQUM7SUFDZixDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLElBQVcsQ0FBQztJQUN2QixDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQVpBLEFBWUMsQ0FadUMsdUJBQVUsR0FZakQ7QUFaWSxnREFBa0I7QUFjL0I7SUFDSSx1QkFBWSxHQUFRLEVBQUUsS0FBVTtJQUFJLENBQUM7SUFDekMsb0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHNDQUFhIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2NvcmUvY29sbGVjdGlvbnMvS2V5VmFsdWVQYWlycy9tb2RlbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSAnLi9kaWN0aW9uYXJ5JztcclxuaW1wb3J0IHsgSUtleVZhbHVlLCBJS2V5VmFsdWVEaWN0aW9uYXJ5IH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBLZXlWYWx1ZURpY3Rpb25hcnkgZXh0ZW5kcyBEaWN0aW9uYXJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ6IHsga2V5OiBudW1iZXI7IHZhbHVlOiBJS2V5VmFsdWU7IH1bXSkge1xyXG4gICAgICAgIHN1cGVyKGluaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlcygpOiBJS2V5VmFsdWVbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICB0b0xvb2t1cCgpOiBJS2V5VmFsdWVEaWN0aW9uYXJ5IHtcclxuICAgICAgICByZXR1cm4gdGhpcyBhcyBhbnk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBLZXlWYWx1ZUFycmF5IHtcclxuICAgIGNvbnN0cnVjdG9yKGtleTogYW55LCB2YWx1ZTogYW55KSB7IH1cclxufVxyXG4iXX0=
