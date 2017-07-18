Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../core/utils/index");
/**
 * Each action should be namespaced
 * this allows the interior to have similar typed names as other actions
 * however still allow index exports
 */
var NameList;
(function (NameList) {
    // Category to uniquely identify the actions
    NameList.CATEGORY = 'NameList';
    NameList.ActionTypes = {
        INIT: index_1.type(NameList.CATEGORY + " Init"),
        INITIALIZED: index_1.type(NameList.CATEGORY + " Initialized"),
        INIT_FAILED: index_1.type(NameList.CATEGORY + " Init Failed"),
        ADD: index_1.type(NameList.CATEGORY + " Add"),
        NAME_ADDED: index_1.type(NameList.CATEGORY + " Name Added")
    };
    /**
     * Every action is comprised of at least a type and an optional
     * payload. Expressing actions as classes enables powerful
     * type checking in reducer functions.
     *
     * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
     */
    var InitAction = (function () {
        function InitAction() {
            this.type = NameList.ActionTypes.INIT;
            this.payload = null;
        }
        return InitAction;
    }());
    NameList.InitAction = InitAction;
    var InitializedAction = (function () {
        function InitializedAction(payload) {
            this.payload = payload;
            this.type = NameList.ActionTypes.INITIALIZED;
        }
        return InitializedAction;
    }());
    NameList.InitializedAction = InitializedAction;
    var InitFailedAction = (function () {
        function InitFailedAction() {
            this.type = NameList.ActionTypes.INIT_FAILED;
            this.payload = null;
        }
        return InitFailedAction;
    }());
    NameList.InitFailedAction = InitFailedAction;
    var AddAction = (function () {
        function AddAction(payload) {
            this.payload = payload;
            this.type = NameList.ActionTypes.ADD;
        }
        return AddAction;
    }());
    NameList.AddAction = AddAction;
    var NameAddedAction = (function () {
        function NameAddedAction(payload) {
            this.payload = payload;
            this.type = NameList.ActionTypes.NAME_ADDED;
        }
        return NameAddedAction;
    }());
    NameList.NameAddedAction = NameAddedAction;
})(NameList = exports.NameList || (exports.NameList = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NhbXBsZS9hY3Rpb25zL25hbWUtbGlzdC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdEQUE4QztBQUU5Qzs7OztHQUlHO0FBQ0gsSUFBaUIsUUFBUSxDQXlFeEI7QUF6RUQsV0FBaUIsUUFBUTtJQUN2Qiw0Q0FBNEM7SUFDL0IsaUJBQVEsR0FBVyxVQUFVLENBQUM7SUFrQjlCLG9CQUFXLEdBQXFCO1FBQzNDLElBQUksRUFBRSxZQUFJLENBQUksU0FBQSxRQUFRLFVBQU8sQ0FBQztRQUM5QixXQUFXLEVBQUUsWUFBSSxDQUFJLFNBQUEsUUFBUSxpQkFBYyxDQUFDO1FBQzVDLFdBQVcsRUFBRSxZQUFJLENBQUksU0FBQSxRQUFRLGlCQUFjLENBQUM7UUFDNUMsR0FBRyxFQUFFLFlBQUksQ0FBSSxTQUFBLFFBQVEsU0FBTSxDQUFDO1FBQzVCLFVBQVUsRUFBRSxZQUFJLENBQUksU0FBQSxRQUFRLGdCQUFhLENBQUM7S0FDM0MsQ0FBQztJQUVGOzs7Ozs7T0FNRztJQUNIO1FBQUE7WUFDRSxTQUFJLEdBQUcsU0FBQSxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ3hCLFlBQU8sR0FBVyxJQUFJLENBQUM7UUFDekIsQ0FBQztRQUFELGlCQUFDO0lBQUQsQ0FIQSxBQUdDLElBQUE7SUFIWSxtQkFBVSxhQUd0QixDQUFBO0lBRUQ7UUFHRSwyQkFBbUIsT0FBc0I7WUFBdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtZQUZ6QyxTQUFJLEdBQUcsU0FBQSxXQUFXLENBQUMsV0FBVyxDQUFDO1FBRWMsQ0FBQztRQUNoRCx3QkFBQztJQUFELENBSkEsQUFJQyxJQUFBO0lBSlksMEJBQWlCLG9CQUk3QixDQUFBO0lBRUQ7UUFBQTtZQUNFLFNBQUksR0FBRyxTQUFBLFdBQVcsQ0FBQyxXQUFXLENBQUM7WUFDL0IsWUFBTyxHQUFXLElBQUksQ0FBQztRQUN6QixDQUFDO1FBQUQsdUJBQUM7SUFBRCxDQUhBLEFBR0MsSUFBQTtJQUhZLHlCQUFnQixtQkFHNUIsQ0FBQTtJQUVEO1FBR0UsbUJBQW1CLE9BQWU7WUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1lBRmxDLFNBQUksR0FBRyxTQUFBLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFFZSxDQUFDO1FBQ3pDLGdCQUFDO0lBQUQsQ0FKQSxBQUlDLElBQUE7SUFKWSxrQkFBUyxZQUlyQixDQUFBO0lBRUQ7UUFHRSx5QkFBbUIsT0FBZTtZQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7WUFGbEMsU0FBSSxHQUFHLFNBQUEsV0FBVyxDQUFDLFVBQVUsQ0FBQztRQUVRLENBQUM7UUFDekMsc0JBQUM7SUFBRCxDQUpBLEFBSUMsSUFBQTtJQUpZLHdCQUFlLGtCQUkzQixDQUFBO0FBWUgsQ0FBQyxFQXpFZ0IsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUF5RXhCIiwiZmlsZSI6ImFwcC9tb2R1bGVzL3NhbXBsZS9hY3Rpb25zL25hbWUtbGlzdC5hY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscy9pbmRleCc7XG5cbi8qKlxuICogRWFjaCBhY3Rpb24gc2hvdWxkIGJlIG5hbWVzcGFjZWRcbiAqIHRoaXMgYWxsb3dzIHRoZSBpbnRlcmlvciB0byBoYXZlIHNpbWlsYXIgdHlwZWQgbmFtZXMgYXMgb3RoZXIgYWN0aW9uc1xuICogaG93ZXZlciBzdGlsbCBhbGxvdyBpbmRleCBleHBvcnRzXG4gKi9cbmV4cG9ydCBuYW1lc3BhY2UgTmFtZUxpc3Qge1xuICAvLyBDYXRlZ29yeSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGUgYWN0aW9uc1xuICBleHBvcnQgY29uc3QgQ0FURUdPUlk6IHN0cmluZyA9ICdOYW1lTGlzdCc7XG5cbiAgLyoqXG4gICAqIEZvciBlYWNoIGFjdGlvbiB0eXBlIGluIGFuIGFjdGlvbiBncm91cCwgbWFrZSBhIHNpbXBsZVxuICAgKiBlbnVtIG9iamVjdCBmb3IgYWxsIG9mIHRoaXMgZ3JvdXAncyBhY3Rpb24gdHlwZXMuXG4gICAqXG4gICAqIFRoZSAndHlwZScgdXRpbGl0eSBmdW5jdGlvbiBjb2VyY2VzIHN0cmluZ3MgaW50byBzdHJpbmdcbiAgICogbGl0ZXJhbCB0eXBlcyBhbmQgcnVucyBhIHNpbXBsZSBjaGVjayB0byBndWFyYW50ZWUgYWxsXG4gICAqIGFjdGlvbiB0eXBlcyBpbiB0aGUgYXBwbGljYXRpb24gYXJlIHVuaXF1ZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgSU5hbWVMaXN0QWN0aW9ucyB7XG4gICAgSU5JVDogc3RyaW5nO1xuICAgIElOSVRJQUxJWkVEOiBzdHJpbmc7XG4gICAgSU5JVF9GQUlMRUQ6IHN0cmluZztcbiAgICBBREQ6IHN0cmluZztcbiAgICBOQU1FX0FEREVEOiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgY29uc3QgQWN0aW9uVHlwZXM6IElOYW1lTGlzdEFjdGlvbnMgPSB7XG4gICAgSU5JVDogdHlwZShgJHtDQVRFR09SWX0gSW5pdGApLFxuICAgIElOSVRJQUxJWkVEOiB0eXBlKGAke0NBVEVHT1JZfSBJbml0aWFsaXplZGApLFxuICAgIElOSVRfRkFJTEVEOiB0eXBlKGAke0NBVEVHT1JZfSBJbml0IEZhaWxlZGApLFxuICAgIEFERDogdHlwZShgJHtDQVRFR09SWX0gQWRkYCksXG4gICAgTkFNRV9BRERFRDogdHlwZShgJHtDQVRFR09SWX0gTmFtZSBBZGRlZGApXG4gIH07XG5cbiAgLyoqXG4gICAqIEV2ZXJ5IGFjdGlvbiBpcyBjb21wcmlzZWQgb2YgYXQgbGVhc3QgYSB0eXBlIGFuZCBhbiBvcHRpb25hbFxuICAgKiBwYXlsb2FkLiBFeHByZXNzaW5nIGFjdGlvbnMgYXMgY2xhc3NlcyBlbmFibGVzIHBvd2VyZnVsXG4gICAqIHR5cGUgY2hlY2tpbmcgaW4gcmVkdWNlciBmdW5jdGlvbnMuXG4gICAqXG4gICAqIFNlZSBEaXNjcmltaW5hdGVkIFVuaW9uczogaHR0cHM6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svYWR2YW5jZWQtdHlwZXMuaHRtbCNkaXNjcmltaW5hdGVkLXVuaW9uc1xuICAgKi9cbiAgZXhwb3J0IGNsYXNzIEluaXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICAgIHR5cGUgPSBBY3Rpb25UeXBlcy5JTklUO1xuICAgIHBheWxvYWQ6IHN0cmluZyA9IG51bGw7XG4gIH1cblxuICBleHBvcnQgY2xhc3MgSW5pdGlhbGl6ZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICAgIHR5cGUgPSBBY3Rpb25UeXBlcy5JTklUSUFMSVpFRDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBcnJheTxzdHJpbmc+KSB7IH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBJbml0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgICB0eXBlID0gQWN0aW9uVHlwZXMuSU5JVF9GQUlMRUQ7XG4gICAgcGF5bG9hZDogc3RyaW5nID0gbnVsbDtcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBBZGRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICAgIHR5cGUgPSBBY3Rpb25UeXBlcy5BREQ7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7IH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBOYW1lQWRkZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICAgIHR5cGUgPSBBY3Rpb25UeXBlcy5OQU1FX0FEREVEO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykgeyB9XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IGEgdHlwZSBhbGlhcyBvZiBhbGwgYWN0aW9ucyBpbiB0aGlzIGFjdGlvbiBncm91cFxuICAgKiBzbyB0aGF0IHJlZHVjZXJzIGNhbiBlYXNpbHkgY29tcG9zZSBhY3Rpb24gdHlwZXNcbiAgICovXG4gIGV4cG9ydCB0eXBlIEFjdGlvbnNcbiAgICA9IEluaXRBY3Rpb25cbiAgICB8IEluaXRpYWxpemVkQWN0aW9uXG4gICAgfCBJbml0RmFpbGVkQWN0aW9uXG4gICAgfCBBZGRBY3Rpb25cbiAgICB8IE5hbWVBZGRlZEFjdGlvbjtcbn1cbiJdfQ==
