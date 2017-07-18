Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// libs
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var Observable_1 = require("rxjs/Observable");
// module
var name_list_service_1 = require("../services/name-list.service");
var index_1 = require("../actions/index");
var SampleEffects = (function () {
    function SampleEffects(store, actions$, nameListService) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.nameListService = nameListService;
        /**
         * This effect makes use of the `startWith` operator to trigger
         * the effect immediately on startup.
         */
        this.init$ = this.actions$
            .ofType(index_1.NameList.ActionTypes.INIT)
            .startWith(new index_1.NameList.InitAction)
            .switchMap(function () { return _this.nameListService.getNames(); })
            .map(function (payload) {
            var names = payload;
            return new index_1.NameList.InitializedAction(names);
        })
            .catch(function () { return Observable_1.Observable.of(new index_1.NameList.InitFailedAction()); });
        this.add$ = this.actions$
            .ofType(index_1.NameList.ActionTypes.ADD)
            .map(function (action) {
            var name = action.payload;
            // analytics
            _this.nameListService.track(index_1.NameList.ActionTypes.NAME_ADDED, { label: name });
            return new index_1.NameList.NameAddedAction(name);
        });
    }
    return SampleEffects;
}());
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], SampleEffects.prototype, "init$", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], SampleEffects.prototype, "add$", void 0);
SampleEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        effects_1.Actions,
        name_list_service_1.NameListService])
], SampleEffects);
exports.SampleEffects = SampleEffects;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NhbXBsZS9lZmZlY3RzL3NhbXBsZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixzQ0FBMkM7QUFFM0MsT0FBTztBQUNQLHFDQUE0QztBQUM1Qyx5Q0FBZ0Q7QUFDaEQsOENBQTZDO0FBRTdDLFNBQVM7QUFDVCxtRUFBZ0U7QUFDaEUsMENBQTRDO0FBRzVDLElBQWEsYUFBYTtJQTBCeEIsdUJBQ1UsS0FBaUIsRUFDakIsUUFBaUIsRUFDakIsZUFBZ0M7UUFIMUMsaUJBSUs7UUFISyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBM0IxQzs7O1dBR0c7UUFDTyxVQUFLLEdBQXVCLElBQUksQ0FBQyxRQUFRO2FBQ2hELE1BQU0sQ0FBQyxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7YUFDakMsU0FBUyxDQUFDLElBQUksZ0JBQVEsQ0FBQyxVQUFVLENBQUM7YUFDbEMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxFQUEvQixDQUErQixDQUFDO2FBQ2hELEdBQUcsQ0FBQyxVQUFBLE9BQU87WUFDVixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDcEIsTUFBTSxDQUFDLElBQUksZ0JBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUM7YUFFRCxLQUFLLENBQUMsY0FBTSxPQUFBLHVCQUFVLENBQUMsRUFBRSxDQUFDLElBQUksZ0JBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FBQztRQUVyRCxTQUFJLEdBQXVCLElBQUksQ0FBQyxRQUFRO2FBQy9DLE1BQU0sQ0FBQyxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7YUFDaEMsR0FBRyxDQUFDLFVBQUEsTUFBTTtZQUNULElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDMUIsWUFBWTtZQUNaLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLGdCQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLE1BQU0sQ0FBQyxJQUFJLGdCQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBTUQsQ0FBQztJQUNQLG9CQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQXpCVztJQUFULGdCQUFNLEVBQUU7OEJBQVEsdUJBQVU7NENBU29DO0FBRXJEO0lBQVQsZ0JBQU0sRUFBRTs4QkFBTyx1QkFBVTsyQ0FPckI7QUF4Qk0sYUFBYTtJQUR6QixpQkFBVSxFQUFFO3FDQTRCTSxhQUFLO1FBQ0YsaUJBQU87UUFDQSxtQ0FBZTtHQTdCL0IsYUFBYSxDQStCekI7QUEvQlksc0NBQWEiLCJmaWxlIjoiYXBwL21vZHVsZXMvc2FtcGxlL2VmZmVjdHMvc2FtcGxlLmVmZmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbGlic1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbmFtZS1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTmFtZUxpc3QgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNhbXBsZUVmZmVjdHMge1xuXG4gIC8qKlxuICAgKiBUaGlzIGVmZmVjdCBtYWtlcyB1c2Ugb2YgdGhlIGBzdGFydFdpdGhgIG9wZXJhdG9yIHRvIHRyaWdnZXJcbiAgICogdGhlIGVmZmVjdCBpbW1lZGlhdGVseSBvbiBzdGFydHVwLlxuICAgKi9cbiAgQEVmZmVjdCgpIGluaXQkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkXG4gICAgLm9mVHlwZShOYW1lTGlzdC5BY3Rpb25UeXBlcy5JTklUKVxuICAgIC5zdGFydFdpdGgobmV3IE5hbWVMaXN0LkluaXRBY3Rpb24pXG4gICAgLnN3aXRjaE1hcCgoKSA9PiB0aGlzLm5hbWVMaXN0U2VydmljZS5nZXROYW1lcygpKVxuICAgIC5tYXAocGF5bG9hZCA9PiB7XG4gICAgICBsZXQgbmFtZXMgPSBwYXlsb2FkO1xuICAgICAgcmV0dXJuIG5ldyBOYW1lTGlzdC5Jbml0aWFsaXplZEFjdGlvbihuYW1lcyk7XG4gICAgfSlcbiAgICAvLyBub3RoaW5nIHJlYWN0aW5nIHRvIGZhaWx1cmUgYXQgbW9tZW50IGJ1dCB5b3UgY291bGQgaWYgeW91IHdhbnQgKGhlcmUgZm9yIGV4YW1wbGUpXG4gICAgLmNhdGNoKCgpID0+IE9ic2VydmFibGUub2YobmV3IE5hbWVMaXN0LkluaXRGYWlsZWRBY3Rpb24oKSkpO1xuXG4gIEBFZmZlY3QoKSBhZGQkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkXG4gICAgLm9mVHlwZShOYW1lTGlzdC5BY3Rpb25UeXBlcy5BREQpXG4gICAgLm1hcChhY3Rpb24gPT4ge1xuICAgICAgbGV0IG5hbWUgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIC8vIGFuYWx5dGljc1xuICAgICAgdGhpcy5uYW1lTGlzdFNlcnZpY2UudHJhY2soTmFtZUxpc3QuQWN0aW9uVHlwZXMuTkFNRV9BRERFRCwgeyBsYWJlbDogbmFtZSB9KTtcbiAgICAgIHJldHVybiBuZXcgTmFtZUxpc3QuTmFtZUFkZGVkQWN0aW9uKG5hbWUpO1xuICAgIH0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG5hbWVMaXN0U2VydmljZTogTmFtZUxpc3RTZXJ2aWNlXG4gICkgeyB9XG59XG4iXX0=
