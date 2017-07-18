Object.defineProperty(exports, "__esModule", { value: true });
// libs
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
// app
var index_1 = require("../../core/index");
var index_2 = require("../../electron/index");
var multilingual = require("../actions/index");
var index_3 = require("../services/index");
var LangSwitcherComponent = (function () {
    function LangSwitcherComponent(store, log, languages, viewHelper) {
        var _this = this;
        this.store = store;
        this.log = log;
        this.languages = languages;
        this.viewHelper = viewHelper;
        store.take(1).subscribe(function (s) {
            // s && s.18n - ensures testing works in all cases (since some tests dont use i18n state)
            _this.lang = s && s.i18n ? s.i18n.lang : '';
        });
        if (index_1.Config.IS_DESKTOP()) {
            // allow electron menu to talk to component
            index_2.ElectronEventService.on('changeLang').subscribe(function (e) {
                _this.changeLang({ target: { value: e.detail.value } });
            });
        }
    }
    LangSwitcherComponent.prototype.changeLang = function (e) {
        var lang = this.supportedLanguages[0].code; // fallback to default 'en'
        if (index_1.Config.IS_MOBILE_NATIVE()) {
            if (e) {
                lang = this.supportedLanguages[e.newIndex].code;
            }
        }
        else if (e && e.target) {
            lang = e.target.value;
        }
        this.log.debug("Language change: " + lang);
        this.store.dispatch(new multilingual.ChangeAction(lang));
    };
    LangSwitcherComponent.prototype.ngOnInit = function () {
        this.supportedLanguages = this.languages;
        if (index_1.Config.IS_MOBILE_NATIVE() && this.viewHelper) {
            // {N} 3.0 requires SegmentedBarItem class for items
            // when binding to SegmentedBar
            this.supportedLanguages = this.viewHelper;
        }
    };
    return LangSwitcherComponent;
}());
LangSwitcherComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'lang-switcher',
        templateUrl: 'lang-switcher.component.html',
        styleUrls: ['lang-switcher.component.css'],
    }),
    __param(2, core_1.Inject(index_3.Languages)),
    __param(3, core_1.Inject(index_3.LanguageViewHelper)),
    __metadata("design:paramtypes", [store_1.Store,
        index_1.LogService, Object, Object])
], LangSwitcherComponent);
exports.LangSwitcherComponent = LangSwitcherComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vY29tcG9uZW50cy9sYW5nLXN3aXRjaGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTztBQUNQLHNDQUFrRDtBQUNsRCxxQ0FBb0M7QUFFcEMsTUFBTTtBQUNOLDBDQUE2RDtBQUU3RCw4Q0FBNEQ7QUFDNUQsK0NBQWlEO0FBQ2pELDJDQUF1RjtBQVF2RixJQUFhLHFCQUFxQjtJQUtoQywrQkFDVSxLQUF1QixFQUN2QixHQUFlLEVBQ0ksU0FBUyxFQUNBLFVBQVU7UUFKaEQsaUJBaUJDO1FBaEJTLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDSSxjQUFTLEdBQVQsU0FBUyxDQUFBO1FBQ0EsZUFBVSxHQUFWLFVBQVUsQ0FBQTtRQUU5QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU07WUFDN0IseUZBQXlGO1lBQ3pGLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLENBQUMsY0FBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QiwyQ0FBMkM7WUFDM0MsNEJBQW9CLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU07Z0JBQ3JELEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVELDBDQUFVLEdBQVYsVUFBVyxDQUFNO1FBQ2YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLDJCQUEyQjtRQUV2RSxFQUFFLENBQUMsQ0FBQyxjQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDTixJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEQsQ0FBQztRQUNILENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN4QixDQUFDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsc0JBQW9CLElBQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDekMsRUFBRSxDQUFDLENBQUMsY0FBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDakQsb0RBQW9EO1lBQ3BELCtCQUErQjtZQUMvQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM1QyxDQUFDO0lBQ0gsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0E5Q0EsQUE4Q0MsSUFBQTtBQTlDWSxxQkFBcUI7SUFOakMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO0tBQzNDLENBQUM7SUFTRyxXQUFBLGFBQU0sQ0FBQyxpQkFBUyxDQUFDLENBQUE7SUFDakIsV0FBQSxhQUFNLENBQUMsMEJBQWtCLENBQUMsQ0FBQTtxQ0FIWixhQUFLO1FBQ1Asa0JBQVU7R0FQZCxxQkFBcUIsQ0E4Q2pDO0FBOUNZLHNEQUFxQiIsImZpbGUiOiJhcHAvbW9kdWxlcy9pMThuL2NvbXBvbmVudHMvbGFuZy1zd2l0Y2hlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWJzXG5pbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbi8vIGFwcFxuaW1wb3J0IHsgQ29uZmlnLCBJTGFuZywgTG9nU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgSUFwcFN0YXRlIH0gZnJvbSAnLi4vLi4vbmdyeC9pbmRleCc7XG5pbXBvcnQgeyBFbGVjdHJvbkV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2VsZWN0cm9uL2luZGV4JztcbmltcG9ydCAqIGFzIG11bHRpbGluZ3VhbCBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IE11bHRpbGluZ3VhbFNlcnZpY2UsIExhbmd1YWdlcywgTGFuZ3VhZ2VWaWV3SGVscGVyIH0gZnJvbSAnLi4vc2VydmljZXMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdsYW5nLXN3aXRjaGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdsYW5nLXN3aXRjaGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2xhbmctc3dpdGNoZXIuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBMYW5nU3dpdGNoZXJDb21wb25lbnQge1xuXG4gIHB1YmxpYyBsYW5nOiBzdHJpbmc7XG4gIHB1YmxpYyBzdXBwb3J0ZWRMYW5ndWFnZXM6IEFycmF5PElMYW5nPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxJQXBwU3RhdGU+LFxuICAgIHByaXZhdGUgbG9nOiBMb2dTZXJ2aWNlLFxuICAgIEBJbmplY3QoTGFuZ3VhZ2VzKSBwcml2YXRlIGxhbmd1YWdlcyxcbiAgICBASW5qZWN0KExhbmd1YWdlVmlld0hlbHBlcikgcHJpdmF0ZSB2aWV3SGVscGVyXG4gICkge1xuICAgIHN0b3JlLnRha2UoMSkuc3Vic2NyaWJlKChzOiBhbnkpID0+IHtcbiAgICAgIC8vIHMgJiYgcy4xOG4gLSBlbnN1cmVzIHRlc3Rpbmcgd29ya3MgaW4gYWxsIGNhc2VzIChzaW5jZSBzb21lIHRlc3RzIGRvbnQgdXNlIGkxOG4gc3RhdGUpXG4gICAgICB0aGlzLmxhbmcgPSBzICYmIHMuaTE4biA/IHMuaTE4bi5sYW5nIDogJyc7XG4gICAgfSk7XG5cbiAgICBpZiAoQ29uZmlnLklTX0RFU0tUT1AoKSkge1xuICAgICAgLy8gYWxsb3cgZWxlY3Ryb24gbWVudSB0byB0YWxrIHRvIGNvbXBvbmVudFxuICAgICAgRWxlY3Ryb25FdmVudFNlcnZpY2Uub24oJ2NoYW5nZUxhbmcnKS5zdWJzY3JpYmUoKGU6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZUxhbmcoeyB0YXJnZXQ6IHsgdmFsdWU6IGUuZGV0YWlsLnZhbHVlIH0gfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VMYW5nKGU6IGFueSkge1xuICAgIGxldCBsYW5nID0gdGhpcy5zdXBwb3J0ZWRMYW5ndWFnZXNbMF0uY29kZTsgLy8gZmFsbGJhY2sgdG8gZGVmYXVsdCAnZW4nXG5cbiAgICBpZiAoQ29uZmlnLklTX01PQklMRV9OQVRJVkUoKSkge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgbGFuZyA9IHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzW2UubmV3SW5kZXhdLmNvZGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlICYmIGUudGFyZ2V0KSB7XG4gICAgICBsYW5nID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuICAgIHRoaXMubG9nLmRlYnVnKGBMYW5ndWFnZSBjaGFuZ2U6ICR7bGFuZ31gKTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBtdWx0aWxpbmd1YWwuQ2hhbmdlQWN0aW9uKGxhbmcpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzID0gdGhpcy5sYW5ndWFnZXM7XG4gICAgaWYgKENvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkgJiYgdGhpcy52aWV3SGVscGVyKSB7XG4gICAgICAvLyB7Tn0gMy4wIHJlcXVpcmVzIFNlZ21lbnRlZEJhckl0ZW0gY2xhc3MgZm9yIGl0ZW1zXG4gICAgICAvLyB3aGVuIGJpbmRpbmcgdG8gU2VnbWVudGVkQmFyXG4gICAgICB0aGlzLnN1cHBvcnRlZExhbmd1YWdlcyA9IHRoaXMudmlld0hlbHBlcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
