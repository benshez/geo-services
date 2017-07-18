Object.defineProperty(exports, "__esModule", { value: true });
var WindowMock = (function () {
    function WindowMock() {
        this.navigator = {
            language: 'en-US',
            userAgent: 'testing'
        };
        this.location = {};
    }
    WindowMock.prototype.alert = function (msg) {
        return;
    };
    WindowMock.prototype.confirm = function (msg) {
        return;
    };
    return WindowMock;
}());
exports.WindowMock = WindowMock;
var WindowMockFrench = (function (_super) {
    __extends(WindowMockFrench, _super);
    function WindowMockFrench() {
        var _this = _super.call(this) || this;
        _this.navigator.language = 'fr-US';
        return _this;
    }
    return WindowMockFrench;
}(WindowMock));
exports.WindowMockFrench = WindowMockFrench;
var WindowMockNoLanguage = (function (_super) {
    __extends(WindowMockNoLanguage, _super);
    function WindowMockNoLanguage() {
        var _this = _super.call(this) || this;
        _this.navigator.language = undefined;
        return _this;
    }
    return WindowMockNoLanguage;
}(WindowMock));
exports.WindowMockNoLanguage = WindowMockNoLanguage;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvdGVzdGluZy9tb2Nrcy93aW5kb3cubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtRQUNTLGNBQVMsR0FBUTtZQUN0QixRQUFRLEVBQUUsT0FBTztZQUNqQixTQUFTLEVBQUUsU0FBUztTQUNyQixDQUFDO1FBQ0ssYUFBUSxHQUFRLEVBQUUsQ0FBQztJQU81QixDQUFDO0lBTlEsMEJBQUssR0FBWixVQUFhLEdBQVc7UUFDdEIsTUFBTSxDQUFDO0lBQ1QsQ0FBQztJQUNNLDRCQUFPLEdBQWQsVUFBZSxHQUFXO1FBQ3hCLE1BQU0sQ0FBQztJQUNULENBQUM7SUFDSCxpQkFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksZ0NBQVU7QUFjdkI7SUFBc0Msb0NBQVU7SUFDOUM7UUFBQSxZQUNFLGlCQUFPLFNBRVI7UUFEQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7O0lBQ3BDLENBQUM7SUFDSCx1QkFBQztBQUFELENBTEEsQUFLQyxDQUxxQyxVQUFVLEdBSy9DO0FBTFksNENBQWdCO0FBTzdCO0lBQTBDLHdDQUFVO0lBQ2xEO1FBQUEsWUFDRSxpQkFBTyxTQUVSO1FBREMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDOztJQUN0QyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUxBLEFBS0MsQ0FMeUMsVUFBVSxHQUtuRDtBQUxZLG9EQUFvQiIsImZpbGUiOiJhcHAvbW9kdWxlcy9jb3JlL3Rlc3RpbmcvbW9ja3Mvd2luZG93Lm1vY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgV2luZG93TW9jayB7XG4gIHB1YmxpYyBuYXZpZ2F0b3I6IGFueSA9IHtcbiAgICBsYW5ndWFnZTogJ2VuLVVTJyxcbiAgICB1c2VyQWdlbnQ6ICd0ZXN0aW5nJ1xuICB9O1xuICBwdWJsaWMgbG9jYXRpb246IGFueSA9IHt9O1xuICBwdWJsaWMgYWxlcnQobXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcHVibGljIGNvbmZpcm0obXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpbmRvd01vY2tGcmVuY2ggZXh0ZW5kcyBXaW5kb3dNb2NrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm5hdmlnYXRvci5sYW5ndWFnZSA9ICdmci1VUyc7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpbmRvd01vY2tOb0xhbmd1YWdlIGV4dGVuZHMgV2luZG93TW9jayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5uYXZpZ2F0b3IubGFuZ3VhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==
