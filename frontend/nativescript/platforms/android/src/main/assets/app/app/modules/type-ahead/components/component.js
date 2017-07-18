Object.defineProperty(exports, "__esModule", { value: true });
// libs
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var index_1 = require("../../core/index");
var TypeAheadComponent = (function () {
    function TypeAheadComponent(renderer) {
        var _this = this;
        this.renderer = renderer;
        this.typeAheadPlaceHolder = '';
        this.typeAheadErrorMessage = '';
        this.typeAheadSelectedIndex = -1;
        this.typeAheadShownChange = new core_1.EventEmitter();
        this._keyword = new BehaviorSubject_1.BehaviorSubject('');
        this.minlength = 2;
        this.onTypeAheadIndexChanged = new core_1.EventEmitter();
        this.templateShown = function () {
            var show = (_this.typeAheadSource && _this.typeAheadShown);
            return show;
        };
    }
    Object.defineProperty(TypeAheadComponent.prototype, "typeAheadShown", {
        get: function () {
            return this._typeAheadShown;
        },
        set: function (value) {
            this._typeAheadShown = !!value;
            this.typeAheadShownChange.emit(this.typeAheadShown);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeAheadComponent.prototype, "keyword", {
        get: function () {
            return this._keyword.getValue();
        },
        set: function (value) {
            this._keyword.next(value);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TypeAheadComponent.prototype, "placeholder", {
        get: function () { return this.typeAheadPlaceHolder; },
        set: function (placeholder) {
            this.typeAheadPlaceHolder = (placeholder && placeholder.trim()) || '<no placeholder text set>';
        },
        enumerable: true,
        configurable: true
    });
    TypeAheadComponent.prototype.onKeyDownArrow = function (event) {
        this.typeAheadShown = true;
        this.typeAheadListElementScroll(event);
    };
    TypeAheadComponent.prototype.onTextChange = function (evt) {
        this.subscribeTypeAheadSource(evt.value);
    };
    TypeAheadComponent.prototype.onInput = function (evt) {
        this.subscribeTypeAheadSource(evt.target.value);
    };
    TypeAheadComponent.prototype.subscribeTypeAheadSource = function (value) {
        var _this = this;
        if (value.length <= this.minlength || this.typeAheadShown)
            return;
        this.keyword = value;
        this.source(this._keyword).subscribe(function (results) {
            if (typeof (results) === 'undefined') {
                _this.typeAheadSource = [];
            }
            else {
                _this.typeAheadShown = true;
                _this.typeAheadDictionary = results;
                _this.typeAheadSource = _this.typeAheadDictionary.toArray();
                console.log(JSON.stringify(_this.typeAheadDictionary));
            }
        }).unsubscribe;
    };
    TypeAheadComponent.prototype.onItemTap = function (args) {
        var item = this.typeAheadDictionary.getItemByKey(args.index);
        var input = this.typeAheadInput.nativeElement;
        input.text = item.value;
        input.value = item.value;
        input.focus();
        this.typeAheadShown = false;
        this.onTypeAheadIndexChanged.emit(item.key);
    };
    TypeAheadComponent.prototype.onKeyDownEnter = function (args) {
        var input = this.typeAheadInput.nativeElement;
        this.resetTypeAheadSelectedIndex();
        this.setTypeAheadInputValue(args, input, true);
    };
    TypeAheadComponent.prototype.setTypeAheadInputValue = function (args, input, setFocus) {
        if (setFocus === void 0) { setFocus = false; }
        var item = this.typeAheadDictionary.getItemByKey(args);
        input.value = item.value;
        if (setFocus) {
            input.focus();
            this.typeAheadShown = false;
            this.onTypeAheadIndexChanged.emit(item.key);
        }
    };
    TypeAheadComponent.prototype.typeAheadListElementScroll = function (event) {
        var tal = this.typeAheadList;
        if (typeof (tal) === 'undefined')
            return;
        var ul = tal.nativeElement;
        var elems = ul.getElementsByTagName('li');
        if (elems.length === 0)
            return;
        switch (event) {
            case index_1.Config.EVENTS.ARROW_DOWN:
                if ((this.typeAheadSelectedIndex + 1) >= elems.length)
                    this.resetTypeAheadSelectedIndex();
                this.typeAheadSelectedIndex++;
                break;
            case index_1.Config.EVENTS.ARROW_UP:
                this.typeAheadSelectedIndex--;
                if (this.typeAheadSelectedIndex < 0)
                    this.typeAheadSelectedIndex = (elems.length - 1);
                break;
        }
        var elem = elems[this.typeAheadSelectedIndex];
        this.setTypeAheadInputValue(elem.id, this.typeAheadInput.nativeElement);
        elem.focus();
    };
    TypeAheadComponent.prototype.resetTypeAheadSelectedIndex = function () {
        this.typeAheadSelectedIndex = -1;
    };
    return TypeAheadComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TypeAheadComponent.prototype, "typeAheadShownChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], TypeAheadComponent.prototype, "typeAheadShown", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TypeAheadComponent.prototype, "keyword", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TypeAheadComponent.prototype, "minlength", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TypeAheadComponent.prototype, "source", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TypeAheadComponent.prototype, "placeholder", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TypeAheadComponent.prototype, "onTypeAheadIndexChanged", void 0);
__decorate([
    core_1.ViewChild('typeAheadList'),
    __metadata("design:type", core_1.ElementRef)
], TypeAheadComponent.prototype, "typeAheadList", void 0);
__decorate([
    core_1.ViewChild('typeAheadInput'),
    __metadata("design:type", core_1.ElementRef)
], TypeAheadComponent.prototype, "typeAheadInput", void 0);
TypeAheadComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-typeahead',
        templateUrl: index_1.Config.COMPONENT_ITEMS.TEMPLATE,
        styleUrls: [index_1.Config.COMPONENT_ITEMS.CSS],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [core_1.Renderer])
], TypeAheadComponent);
exports.TypeAheadComponent = TypeAheadComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3R5cGUtYWhlYWQvY29tcG9uZW50cy9jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU87QUFDUCxzQ0FRdUI7QUFHdkIsd0RBQXVEO0FBSXZELDBDQUEwQztBQVkxQyxJQUFhLGtCQUFrQjtJQWlEM0IsNEJBQW9CLFFBQWtCO1FBQXRDLGlCQUEyQztRQUF2QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBM0M5Qix5QkFBb0IsR0FBVyxFQUFFLENBQUM7UUFDbEMsMEJBQXFCLEdBQVcsRUFBRSxDQUFDO1FBRW5DLDJCQUFzQixHQUFXLENBQUMsQ0FBQyxDQUFDO1FBRzNCLHlCQUFvQixHQUEwQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQVkxRSxhQUFRLEdBQUcsSUFBSSxpQ0FBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBVzFDLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFTckIsNEJBQXVCLEdBQVEsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUF3RnJELGtCQUFhLEdBQUc7WUFDbkIsSUFBSSxJQUFJLEdBQVEsQ0FBQyxLQUFJLENBQUMsZUFBZSxJQUFJLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM5RCxNQUFNLENBQVMsSUFBSSxDQUFDO1FBQ3hCLENBQUMsQ0FBQTtJQXRGeUMsQ0FBQztJQWxDM0Msc0JBQVcsOENBQWM7YUFBekI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDO2FBRUQsVUFBMEIsS0FBSztZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEQsQ0FBQzs7O09BTEE7SUFVRCxzQkFBSSx1Q0FBTzthQUlYO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEMs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UUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSxjQUFNLENBQUMsZUFBZSxDQUFDLFFBQVE7UUFDNUMsU0FBUyxFQUFFLENBQUMsY0FBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7UUFDdkMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07S0FDbEQsQ0FBQztxQ0FrRGdDLGVBQVE7R0FqRDdCLGtCQUFrQixDQXdJOUI7QUF4SVksZ0RBQWtCIiwiZmlsZSI6ImFwcC9tb2R1bGVzL3R5cGUtYWhlYWQvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWJzXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbixcclxuICAgIEVsZW1lbnRSZWYsIFF1ZXJ5LCBRdWVyeUxpc3QsXHJcbiAgICBSZW5kZXJlciwgSW5wdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsIE91dHB1dCxcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xyXG5cclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IElMb2NhdGlvbkFyZ3VtZW50cyB9IGZyb20gJy4uLy4uL21hcC9pbmRleCc7XHJcbmltcG9ydCB7IElLZXlWYWx1ZSwgSUtleVZhbHVlRGljdGlvbmFyeSwgSVNlbGVjdGVkS2V5VmFsdWUgfSBmcm9tICcuLi8uLi9jb3JlL2NvbGxlY3Rpb25zL0tleVZhbHVlUGFpcnMvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IEtleVZhbHVlRGljdGlvbmFyeSwgS2V5VmFsdWVBcnJheSB9IGZyb20gJy4uLy4uL2NvcmUvY29sbGVjdGlvbnMvaW5kZXgnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdzZC10eXBlYWhlYWQnLFxyXG4gICAgdGVtcGxhdGVVcmw6IENvbmZpZy5DT01QT05FTlRfSVRFTVMuVEVNUExBVEUsXHJcbiAgICBzdHlsZVVybHM6IFtDb25maWcuQ09NUE9ORU5UX0lURU1TLkNTU10sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHlwZUFoZWFkQ29tcG9uZW50IHtcclxuICAgIFxuICAgIHB1YmxpYyB0eXBlQWhlYWRTb3VyY2U6IEFycmF5PGFueT47XHJcbiAgICBwdWJsaWMgdHlwZUFoZWFkS2V5d29yZDogc3RyaW5nO1xuXHJcbiAgICBwcml2YXRlIHR5cGVBaGVhZERpY3Rpb25hcnk6IEtleVZhbHVlRGljdGlvbmFyeVxyXG4gICAgcHJpdmF0ZSB0eXBlQWhlYWRQbGFjZUhvbGRlcjogc3RyaW5nID0gJyc7XHJcbiAgICBwcml2YXRlIHR5cGVBaGVhZEVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XHJcbiAgICBwcml2YXRlIHR5cGVBaGVhZFZhbHVlQ2hhbmdlOiBTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIHR5cGVBaGVhZFNlbGVjdGVkSW5kZXg6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSBfdHlwZUFoZWFkU2hvd246IGJvb2xlYW47XHJcblxyXG4gICAgQE91dHB1dCgpIHB1YmxpYyB0eXBlQWhlYWRTaG93bkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgZ2V0IHR5cGVBaGVhZFNob3duKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlQWhlYWRTaG93bjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHR5cGVBaGVhZFNob3duKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fdHlwZUFoZWFkU2hvd24gPSAhIXZhbHVlO1xyXG4gICAgICAgIHRoaXMudHlwZUFoZWFkU2hvd25DaGFuZ2UuZW1pdCh0aGlzLnR5cGVBaGVhZFNob3duKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9rZXl3b3JkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IGtleXdvcmQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9rZXl3b3JkLm5leHQodmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXQga2V5d29yZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa2V5d29yZC5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIG1pbmxlbmd0aDogbnVtYmVyID0gMjtcclxuICAgIEBJbnB1dCgpIHNvdXJjZTogYW55O1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgcGxhY2Vob2xkZXIocGxhY2Vob2xkZXI6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudHlwZUFoZWFkUGxhY2VIb2xkZXIgPSAocGxhY2Vob2xkZXIgJiYgcGxhY2Vob2xkZXIudHJpbSgpKSB8fCAnPG5vIHBsYWNlaG9sZGVyIHRleHQgc2V0Pic7XHJcbiAgICB9XHJcbiAgICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudHlwZUFoZWFkUGxhY2VIb2xkZXI7IH1cclxuXHJcbiAgICBAT3V0cHV0KCkgb25UeXBlQWhlYWRJbmRleENoYW5nZWQ6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBAVmlld0NoaWxkKCd0eXBlQWhlYWRMaXN0JykgdHlwZUFoZWFkTGlzdDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ3R5cGVBaGVhZElucHV0JykgdHlwZUFoZWFkSW5wdXQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHsgfVxyXG5cclxuICAgIG9uS2V5RG93bkFycm93KGV2ZW50OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnR5cGVBaGVhZFNob3duID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnR5cGVBaGVhZExpc3RFbGVtZW50U2Nyb2xsKGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBvblRleHRDaGFuZ2UoZXZ0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZVR5cGVBaGVhZFNvdXJjZShldnQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5wdXQoZXZ0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZVR5cGVBaGVhZFNvdXJjZShldnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVUeXBlQWhlYWRTb3VyY2UodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDw9IHRoaXMubWlubGVuZ3RoIHx8IHRoaXMudHlwZUFoZWFkU2hvd24pIHJldHVybjtcclxuICAgICAgICB0aGlzLmtleXdvcmQgPSB2YWx1ZTsgICAgICAgXHJcbiAgICAgICAgdGhpcy5zb3VyY2UodGhpcy5fa2V5d29yZCkuc3Vic2NyaWJlKHJlc3VsdHMgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChyZXN1bHRzKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZUFoZWFkU291cmNlID0gW10gYXMgYW55O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlQWhlYWRTaG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVBaGVhZERpY3Rpb25hcnkgPSByZXN1bHRzO1xuICAgICAgICAgICAgICAgIHRoaXMudHlwZUFoZWFkU291cmNlID0gdGhpcy50eXBlQWhlYWREaWN0aW9uYXJ5LnRvQXJyYXkoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnR5cGVBaGVhZERpY3Rpb25hcnkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnVuc3Vic2NyaWJlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSXRlbVRhcChhcmdzOiBhbnkpIHtcclxuICAgICAgICBsZXQgaXRlbTogSVNlbGVjdGVkS2V5VmFsdWUgPSB0aGlzLnR5cGVBaGVhZERpY3Rpb25hcnkuZ2V0SXRlbUJ5S2V5KGFyZ3MuaW5kZXgpO1xuICAgICAgICBsZXQgaW5wdXQ6IGFueSA9IHRoaXMudHlwZUFoZWFkSW5wdXQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgaW5wdXQudGV4dCA9IGl0ZW0udmFsdWU7XG4gICAgICAgIGlucHV0LnZhbHVlID0gaXRlbS52YWx1ZTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgdGhpcy50eXBlQWhlYWRTaG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uVHlwZUFoZWFkSW5kZXhDaGFuZ2VkLmVtaXQoaXRlbS5rZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bkVudGVyKGFyZ3M6IGFueSkge1xyXG4gICAgICAgIGxldCBpbnB1dDogYW55ID0gdGhpcy50eXBlQWhlYWRJbnB1dC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHRoaXMucmVzZXRUeXBlQWhlYWRTZWxlY3RlZEluZGV4KCk7XHJcbiAgICAgICAgdGhpcy5zZXRUeXBlQWhlYWRJbnB1dFZhbHVlKGFyZ3MsIGlucHV0LCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUeXBlQWhlYWRJbnB1dFZhbHVlKGFyZ3M6IGFueSwgaW5wdXQ6IGFueSwgc2V0Rm9jdXM6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGxldCBpdGVtOiBJU2VsZWN0ZWRLZXlWYWx1ZSA9IHRoaXMudHlwZUFoZWFkRGljdGlvbmFyeS5nZXRJdGVtQnlLZXkoYXJncyk7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIGlmIChzZXRGb2N1cykge1xyXG4gICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVBaGVhZFNob3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMub25UeXBlQWhlYWRJbmRleENoYW5nZWQuZW1pdChpdGVtLmtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHR5cGVBaGVhZExpc3RFbGVtZW50U2Nyb2xsKGV2ZW50OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgdGFsID0gdGhpcy50eXBlQWhlYWRMaXN0O1xyXG4gICAgICAgIGlmICh0eXBlb2YgKHRhbCkgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHVsID0gdGFsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGVsZW1zOiBBcnJheTxIVE1MVUxpc3RFbGVtZW50PiA9IHVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xyXG4gICAgICAgIGlmIChlbGVtcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgc3dpdGNoICg8c3RyaW5nPmV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uZmlnLkVWRU5UUy5BUlJPV19ET1dOOlxyXG4gICAgICAgICAgICAgICAgaWYoKHRoaXMudHlwZUFoZWFkU2VsZWN0ZWRJbmRleCArIDEpID49IGVsZW1zLmxlbmd0aCkgdGhpcy5yZXNldFR5cGVBaGVhZFNlbGVjdGVkSW5kZXgoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZUFoZWFkU2VsZWN0ZWRJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSBDb25maWcuRVZFTlRTLkFSUk9XX1VQOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlQWhlYWRTZWxlY3RlZEluZGV4LS07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlQWhlYWRTZWxlY3RlZEluZGV4IDwgMCkgdGhpcy50eXBlQWhlYWRTZWxlY3RlZEluZGV4ID0gKGVsZW1zLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBlbGVtID0gZWxlbXNbdGhpcy50eXBlQWhlYWRTZWxlY3RlZEluZGV4XTtcclxuICAgICAgICB0aGlzLnNldFR5cGVBaGVhZElucHV0VmFsdWUoZWxlbS5pZCwgdGhpcy50eXBlQWhlYWRJbnB1dC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICBlbGVtLmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRUeXBlQWhlYWRTZWxlY3RlZEluZGV4KCkge1xyXG4gICAgICAgIHRoaXMudHlwZUFoZWFkU2VsZWN0ZWRJbmRleCA9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNob3duID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgbGV0IHNob3c6IGFueSA9ICh0aGlzLnR5cGVBaGVhZFNvdXJjZSAmJiB0aGlzLnR5cGVBaGVhZFNob3duKTtcclxuICAgICAgICByZXR1cm4gPHN0cmluZz5zaG93O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
