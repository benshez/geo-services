Object.defineProperty(exports, "__esModule", { value: true });
// libs
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var index_1 = require("../../core/index");
var TypeAheadComponent = (function () {
    function TypeAheadComponent(renderer) {
        this.renderer = renderer;
        this.typeAheadPlaceHolder = '';
        this.typeAheadErrorMessage = '';
        this.typeAheadSelectedIndex = -1;
        this.typeAheadShownChange = new core_1.EventEmitter();
        this._keyword = new BehaviorSubject_1.BehaviorSubject('');
        this.minlength = 2;
        this.onTypeAheadIndexChanged = new core_1.EventEmitter();
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
                //console.log(JSON.stringify(this.typeAheadDictionary));
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
        styleUrls: [index_1.Config.COMPONENT_ITEMS.CSS]
    }),
    __metadata("design:paramtypes", [core_1.Renderer])
], TypeAheadComponent);
exports.TypeAheadComponent = TypeAheadComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3R5cGUtYWhlYWQvY29tcG9uZW50cy9jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU87QUFDUCxzQ0FPdUI7QUFHdkIsd0RBQXVEO0FBSXZELDBDQUEwQztBQVcxQyxJQUFhLGtCQUFrQjtJQWlEM0IsNEJBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUEzQzlCLHlCQUFvQixHQUFXLEVBQUUsQ0FBQztRQUNsQywwQkFBcUIsR0FBVyxFQUFFLENBQUM7UUFFbkMsMkJBQXNCLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFHM0IseUJBQW9CLEdBQTBCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBWTFFLGFBQVEsR0FBRyxJQUFJLGlDQUFlLENBQVMsRUFBRSxDQUFDLENBQUM7UUFXMUMsY0FBUyxHQUFXLENBQUMsQ0FBQztRQVNyQiw0QkFBdUIsR0FBUSxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUtsQixDQUFDO0lBbEMzQyxzQkFBVyw4Q0FBYzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2hDLENBQUM7YUFFRCxVQUEwQixLQUFLO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUMvQixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4RCxDQUFDOzs7T0FMQTtJQVVELHNCQUFJLHVDQUFPO2FBSVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQyxDQUFDO2FBTkQsVUFBWSxLQUFLO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFBQSxDQUFDO0lBVUYsc0JBQUksMkNBQVc7YUFHZixjQUE0QixNQUFNLENBQUMsSUFBSSxDQUFD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b2R1bGVzL3R5cGUtYWhlYWQvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWJzXHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbixcclxuICAgIEVsZW1lbnRSZWYsIFF1ZXJ5LCBRdWVyeUxpc3QsXHJcbiAgICBSZW5kZXJlciwgSW5wdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcclxuXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuXHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBJTG9jYXRpb25Bcmd1bWVudHMgfSBmcm9tICcuLi8uLi9tYXAvaW5kZXgnO1xyXG5pbXBvcnQgeyBJS2V5VmFsdWUsIElLZXlWYWx1ZURpY3Rpb25hcnksIElTZWxlY3RlZEtleVZhbHVlIH0gZnJvbSAnLi4vLi4vY29yZS9jb2xsZWN0aW9ucy9LZXlWYWx1ZVBhaXJzL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBLZXlWYWx1ZURpY3Rpb25hcnksIEtleVZhbHVlQXJyYXkgfSBmcm9tICcuLi8uLi9jb3JlL2NvbGxlY3Rpb25zL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnc2QtdHlwZWFoZWFkJyxcclxuICAgIHRlbXBsYXRlVXJsOiBDb25maWcuQ09NUE9ORU5UX0lURU1TLlRFTVBMQVRFLFxyXG4gICAgc3R5bGVVcmxzOiBbQ29uZmlnLkNPTVBPTkVOVF9JVEVNUy5DU1NdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUeXBlQWhlYWRDb21wb25lbnQge1xyXG4gICAgXG4gICAgcHVibGljIHR5cGVBaGVhZFNvdXJjZTogQXJyYXk8YW55PjtcclxuICAgIHB1YmxpYyB0eXBlQWhlYWRLZXl3b3JkOiBzdHJpbmc7XG5cclxuICAgIHByaXZhdGUgdHlwZUFoZWFkRGljdGlvbmFyeTogS2V5VmFsdWVEaWN0aW9uYXJ5XHJcbiAgICBwcml2YXRlIHR5cGVBaGVhZFBsYWNlSG9sZGVyOiBzdHJpbmcgPSAnJztcclxuICAgIHByaXZhdGUgdHlwZUFoZWFkRXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcclxuICAgIHByaXZhdGUgdHlwZUFoZWFkVmFsdWVDaGFuZ2U6IFN1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgdHlwZUFoZWFkU2VsZWN0ZWRJbmRleDogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIF90eXBlQWhlYWRTaG93bjogYm9vbGVhbjtcclxuXHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHR5cGVBaGVhZFNob3duQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBnZXQgdHlwZUFoZWFkU2hvd24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGVBaGVhZFNob3duO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgdHlwZUFoZWFkU2hvd24odmFsdWUpIHtcclxuICAgICAgICB0aGlzLl90eXBlQWhlYWRTaG93biA9ICEhdmFsdWU7XHJcbiAgICAgICAgdGhpcy50eXBlQWhlYWRTaG93bkNoYW5nZS5lbWl0KHRoaXMudHlwZUFoZWFkU2hvd24pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2tleXdvcmQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQga2V5d29yZCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2tleXdvcmQubmV4dCh2YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldCBrZXl3b3JkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9rZXl3b3JkLmdldFZhbHVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgbWlubGVuZ3RoOiBudW1iZXIgPSAyO1xyXG4gICAgQElucHV0KCkgc291cmNlOiBhbnk7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCBwbGFjZWhvbGRlcihwbGFjZWhvbGRlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50eXBlQWhlYWRQbGFjZUhvbGRlciA9IChwbGFjZWhvbGRlciAmJiBwbGFjZWhvbGRlci50cmltKCkpIHx8ICc8bm8gcGxhY2Vob2xkZXIgdGV4dCBzZXQ+JztcclxuICAgIH1cclxuICAgIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy50eXBlQWhlYWRQbGFjZUhvbGRlcjsgfVxyXG5cclxuICAgIEBPdXRwdXQoKSBvblR5cGVBaGVhZEluZGV4Q2hhbmdlZDogYW55ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3R5cGVBaGVhZExpc3QnKSB0eXBlQWhlYWRMaXN0OiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgndHlwZUFoZWFkSW5wdXQnKSB0eXBlQWhlYWRJbnB1dDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikgeyB9XHJcblxyXG4gICAgb25LZXlEb3duQXJyb3coZXZlbnQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudHlwZUFoZWFkU2hvd24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudHlwZUFoZWFkTGlzdEVsZW1lbnRTY3JvbGwoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGV4dENoYW5nZShldnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVHlwZUFoZWFkU291cmNlKGV2dC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnB1dChldnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVHlwZUFoZWFkU291cmNlKGV2dC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZVR5cGVBaGVhZFNvdXJjZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPD0gdGhpcy5taW5sZW5ndGggfHwgdGhpcy50eXBlQWhlYWRTaG93bikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMua2V5d29yZCA9IHZhbHVlOyAgICAgICBcclxuICAgICAgICB0aGlzLnNvdXJjZSh0aGlzLl9rZXl3b3JkKS5zdWJzY3JpYmUocmVzdWx0cyA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHJlc3VsdHMpID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlQWhlYWRTb3VyY2UgPSBbXSBhcyBhbnk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVBaGVhZFNob3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZUFoZWFkRGljdGlvbmFyeSA9IHJlc3VsdHM7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlQWhlYWRTb3VyY2UgPSB0aGlzLnR5cGVBaGVhZERpY3Rpb25hcnkudG9BcnJheSgpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy50eXBlQWhlYWREaWN0aW9uYXJ5KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS51bnN1YnNjcmliZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkl0ZW1UYXAoYXJnczogYW55KSB7XHJcbiAgICAgICAgbGV0IGl0ZW06IElTZWxlY3RlZEtleVZhbHVlID0gdGhpcy50eXBlQWhlYWREaWN0aW9uYXJ5LmdldEl0ZW1CeUtleShhcmdzLmluZGV4KTtcbiAgICAgICAgbGV0IGlucHV0OiBhbnkgPSB0aGlzLnR5cGVBaGVhZElucHV0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlucHV0LnRleHQgPSBpdGVtLnZhbHVlO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IGl0ZW0udmFsdWU7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIHRoaXMudHlwZUFoZWFkU2hvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vblR5cGVBaGVhZEluZGV4Q2hhbmdlZC5lbWl0KGl0ZW0ua2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd25FbnRlcihhcmdzOiBhbnkpIHtcclxuICAgICAgICBsZXQgaW5wdXQ6IGFueSA9IHRoaXMudHlwZUFoZWFkSW5wdXQubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB0aGlzLnJlc2V0VHlwZUFoZWFkU2VsZWN0ZWRJbmRleCgpO1xyXG4gICAgICAgIHRoaXMuc2V0VHlwZUFoZWFkSW5wdXRWYWx1ZShhcmdzLCBpbnB1dCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VHlwZUFoZWFkSW5wdXRWYWx1ZShhcmdzOiBhbnksIGlucHV0OiBhbnksIHNldEZvY3VzOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgaXRlbTogSVNlbGVjdGVkS2V5VmFsdWUgPSB0aGlzLnR5cGVBaGVhZERpY3Rpb25hcnkuZ2V0SXRlbUJ5S2V5KGFyZ3MpO1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gaXRlbS52YWx1ZTtcclxuICAgICAgICBpZiAoc2V0Rm9jdXMpIHtcclxuICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgICAgICAgICAgdGhpcy50eXBlQWhlYWRTaG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm9uVHlwZUFoZWFkSW5kZXhDaGFuZ2VkLmVtaXQoaXRlbS5rZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0eXBlQWhlYWRMaXN0RWxlbWVudFNjcm9sbChldmVudDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHRhbCA9IHRoaXMudHlwZUFoZWFkTGlzdDtcclxuICAgICAgICBpZiAodHlwZW9mICh0YWwpID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG4gICAgICAgIGxldCB1bCA9IHRhbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGxldCBlbGVtczogQXJyYXk8SFRNTFVMaXN0RWxlbWVudD4gPSB1bC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKTtcclxuICAgICAgICBpZiAoZWxlbXMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIHN3aXRjaCAoPHN0cmluZz5ldmVudCkge1xyXG4gICAgICAgICAgICBjYXNlIENvbmZpZy5FVkVOVFMuQVJST1dfRE9XTjpcclxuICAgICAgICAgICAgICAgIGlmKCh0aGlzLnR5cGVBaGVhZFNlbGVjdGVkSW5kZXggKyAxKSA+PSBlbGVtcy5sZW5ndGgpIHRoaXMucmVzZXRUeXBlQWhlYWRTZWxlY3RlZEluZGV4KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVBaGVhZFNlbGVjdGVkSW5kZXgrKztcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgQ29uZmlnLkVWRU5UUy5BUlJPV19VUDpcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZUFoZWFkU2VsZWN0ZWRJbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZUFoZWFkU2VsZWN0ZWRJbmRleCA8IDApIHRoaXMudHlwZUFoZWFkU2VsZWN0ZWRJbmRleCA9IChlbGVtcy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZWxlbSA9IGVsZW1zW3RoaXMudHlwZUFoZWFkU2VsZWN0ZWRJbmRleF07XHJcbiAgICAgICAgdGhpcy5zZXRUeXBlQWhlYWRJbnB1dFZhbHVlKGVsZW0uaWQsIHRoaXMudHlwZUFoZWFkSW5wdXQubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgZWxlbS5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VHlwZUFoZWFkU2VsZWN0ZWRJbmRleCgpIHtcclxuICAgICAgICB0aGlzLnR5cGVBaGVhZFNlbGVjdGVkSW5kZXggPSAtMTtcclxuICAgIH1cclxufVxyXG4iXX0=
