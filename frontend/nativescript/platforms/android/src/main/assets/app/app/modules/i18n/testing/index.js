Object.defineProperty(exports, "__esModule", { value: true });
// libs
var core_1 = require("@ngx-translate/core");
// module
var index_1 = require("../services/index");
// mocks
var ng2_translate_mock_1 = require("./mocks/ng2-translate.mock");
var ng2_translate_loader_mock_1 = require("./mocks/ng2-translate-loader.mock");
function TEST_MULTILINGUAL_PROVIDERS() {
    var providers = [
        { provide: core_1.TranslateLoader, useClass: ng2_translate_loader_mock_1.TranslateLoaderMock },
        { provide: core_1.TranslateService, useClass: ng2_translate_mock_1.TranslateMock },
        index_1.MultilingualService
    ];
    return providers;
}
exports.TEST_MULTILINGUAL_PROVIDERS = TEST_MULTILINGUAL_PROVIDERS;
function getLanguages() {
    return [
        { code: 'en', title: 'English' },
        { code: 'es', title: 'Spanish' },
        { code: 'fr', title: 'French' },
        { code: 'ru', title: 'Russian' },
        { code: 'bg', title: 'Bulgarian' }
    ];
}
exports.getLanguages = getLanguages;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vdGVzdGluZy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTztBQUNQLDRDQUF3RTtBQUV4RSxTQUFTO0FBQ1QsMkNBQXdEO0FBRXhELFFBQVE7QUFDUixpRUFBMkQ7QUFDM0QsK0VBQXdFO0FBRXhFO0lBRUUsSUFBSSxTQUFTLEdBQWU7UUFDMUIsRUFBRSxPQUFPLEVBQUUsc0JBQWUsRUFBRSxRQUFRLEVBQUUsK0NBQW1CLEVBQUU7UUFDM0QsRUFBRSxPQUFPLEVBQUUsdUJBQWdCLEVBQUUsUUFBUSxFQUFFLGtDQUFhLEVBQUU7UUFDdEQsMkJBQW1CO0tBQ3BCLENBQUM7SUFFRixNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFURCxrRUFTQztBQUVEO0lBQ0UsTUFBTSxDQUFDO1FBQ0wsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7UUFDL0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7S0FDbkMsQ0FBQztBQUNKLENBQUM7QUFSRCxvQ0FRQyIsImZpbGUiOiJhcHAvbW9kdWxlcy9pMThuL3Rlc3RpbmcvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWJzXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlLCBUcmFuc2xhdGVMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaW5kZXgnO1xuXG4vLyBtb2Nrc1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9jayB9IGZyb20gJy4vbW9ja3MvbmcyLXRyYW5zbGF0ZS5tb2NrJztcbmltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlck1vY2sgfSBmcm9tICcuL21vY2tzL25nMi10cmFuc2xhdGUtbG9hZGVyLm1vY2snO1xuXG5leHBvcnQgZnVuY3Rpb24gVEVTVF9NVUxUSUxJTkdVQUxfUFJPVklERVJTKCk6IEFycmF5PGFueT4ge1xuXG4gIGxldCBwcm92aWRlcnM6IEFycmF5PGFueT4gPSBbXG4gICAgeyBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVMb2FkZXJNb2NrIH0sXG4gICAgeyBwcm92aWRlOiBUcmFuc2xhdGVTZXJ2aWNlLCB1c2VDbGFzczogVHJhbnNsYXRlTW9jayB9LFxuICAgIE11bHRpbGluZ3VhbFNlcnZpY2VcbiAgXTtcblxuICByZXR1cm4gcHJvdmlkZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZ3VhZ2VzKCk6IEFycmF5PGFueT4ge1xuICByZXR1cm4gW1xuICAgIHsgY29kZTogJ2VuJywgdGl0bGU6ICdFbmdsaXNoJyB9LFxuICAgIHsgY29kZTogJ2VzJywgdGl0bGU6ICdTcGFuaXNoJyB9LFxuICAgIHsgY29kZTogJ2ZyJywgdGl0bGU6ICdGcmVuY2gnIH0sXG4gICAgeyBjb2RlOiAncnUnLCB0aXRsZTogJ1J1c3NpYW4nIH0sXG4gICAgeyBjb2RlOiAnYmcnLCB0aXRsZTogJ0J1bGdhcmlhbicgfVxuICBdO1xufVxuIl19
