Object.defineProperty(exports, "__esModule", { value: true });
// libs
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
// app
var index_1 = require("../../modules/core/index");
var index_2 = require("../../modules/ngrx/index");
var index_3 = require("../../modules/sample/index");
var HomeComponent = (function () {
    function HomeComponent(store, routerext) {
        this.store = store;
        this.routerext = routerext;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.names$ = this.store.let(index_2.getNames);
        this.newName = '';
    };
    /*
     * @param newname  any text as input.
     * @returns return false to prevent default form submit behavior to refresh the page.
     */
    HomeComponent.prototype.addName = function () {
        this.store.dispatch(new index_3.NameList.AddAction(this.newName));
        this.newName = '';
        return false;
    };
    HomeComponent.prototype.readAbout = function () {
        // Try this in the {N} app
        // {N} can use these animation options
        this.routerext.navigate(['/about'], {
            transition: {
                duration: 1000,
                name: 'slideTop',
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-home',
        templateUrl: index_1.Config.COMPONENT_ITEMS.TEMPLATE,
        styleUrls: [index_1.Config.COMPONENT_ITEMS.CSS]
    }),
    __metadata("design:paramtypes", [store_1.Store, index_1.RouterExtensions])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPO0FBQ1Asc0NBQXlFO0FBQ3pFLHFDQUFvQztBQUdwQyxNQUFNO0FBQ04sa0RBQW9FO0FBQ3BFLGtEQUErRDtBQUMvRCxvREFBc0Q7QUFRdEQsSUFBYSxhQUFhO0lBSXRCLHVCQUFvQixLQUF1QixFQUFTLFNBQTJCO1FBQTNELFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBSSxDQUFDO0lBRXBGLGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGdCQUFRLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsK0JBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksZ0JBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNJLDBCQUEwQjtRQUMxQixzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoQyxVQUFVLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLFVBQVU7YUFDbkI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBO0FBL0JZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsY0FBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRO1FBQzVDLFNBQVMsRUFBRSxDQUFDLGNBQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDO0tBQzFDLENBQUM7cUNBSzZCLGFBQUssRUFBK0Isd0JBQWdCO0dBSnRFLGFBQWEsQ0ErQnpCO0FBL0JZLHNDQUFhIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2hvbWUvY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGlic1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuLy8gYXBwXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zLCBDb25maWcgfSBmcm9tICcuLi8uLi9tb2R1bGVzL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgSUFwcFN0YXRlLCBnZXROYW1lcyB9IGZyb20gJy4uLy4uL21vZHVsZXMvbmdyeC9pbmRleCc7XG5pbXBvcnQgeyBOYW1lTGlzdCB9IGZyb20gJy4uLy4uL21vZHVsZXMvc2FtcGxlL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxuICAgIHRlbXBsYXRlVXJsOiBDb25maWcuQ09NUE9ORU5UX0lURU1TLlRFTVBMQVRFLFxyXG4gICAgc3R5bGVVcmxzOiBbQ29uZmlnLkNPTVBPTkVOVF9JVEVNUy5DU1NdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBuYW1lcyQ6IE9ic2VydmFibGU8YW55PjtcbiAgICBwdWJsaWMgbmV3TmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8SUFwcFN0YXRlPiwgcHVibGljIHJvdXRlcmV4dDogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5uYW1lcyQgPSB0aGlzLnN0b3JlLmxldChnZXROYW1lcyk7XG4gICAgICAgIHRoaXMubmV3TmFtZSA9ICcnO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQHBhcmFtIG5ld25hbWUgIGFueSB0ZXh0IGFzIGlucHV0LlxuICAgICAqIEByZXR1cm5zIHJldHVybiBmYWxzZSB0byBwcmV2ZW50IGRlZmF1bHQgZm9ybSBzdWJtaXQgYmVoYXZpb3IgdG8gcmVmcmVzaCB0aGUgcGFnZS5cbiAgICAgKi9cbiAgICBhZGROYW1lKCk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBOYW1lTGlzdC5BZGRBY3Rpb24odGhpcy5uZXdOYW1lKSk7XG4gICAgICAgIHRoaXMubmV3TmFtZSA9ICcnO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVhZEFib3V0KCkge1xuICAgICAgICAvLyBUcnkgdGhpcyBpbiB0aGUge059IGFwcFxuICAgICAgICAvLyB7Tn0gY2FuIHVzZSB0aGVzZSBhbmltYXRpb24gb3B0aW9uc1xuICAgICAgICB0aGlzLnJvdXRlcmV4dC5uYXZpZ2F0ZShbJy9hYm91dCddLCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NsaWRlVG9wJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19
