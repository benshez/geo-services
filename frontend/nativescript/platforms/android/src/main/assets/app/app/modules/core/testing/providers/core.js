Object.defineProperty(exports, "__esModule", { value: true });
// app
var index_1 = require("../../../analytics/index");
// module
var index_2 = require("../../services/index");
// mocks
var window_mock_1 = require("../mocks/window.mock");
var router_extensions_mock_1 = require("../mocks/router-extensions.mock");
function TEST_CORE_PROVIDERS(options) {
    // options:
    // window:   = custom window mock (mainly for changing out language)
    var providers = [
        { provide: index_2.ConsoleService, useValue: console },
        { provide: index_2.StorageService, useValue: localStorage },
        { provide: index_2.WindowService, useClass: (options && options.window) || window_mock_1.WindowMock },
        {
            provide: index_2.LogTarget,
            deps: [index_2.ConsoleService],
            useFactory: function (c) { return new index_2.ConsoleTarget(c, { minLogLevel: index_2.LogLevel.Debug }); },
            multi: true
        },
        index_2.LogService,
        index_1.ANALYTICS_PROVIDERS,
        { provide: index_2.RouterExtensions, useClass: router_extensions_mock_1.RouterExtensionsMock },
        index_2.AppService
    ];
    return providers;
}
exports.TEST_CORE_PROVIDERS = TEST_CORE_PROVIDERS;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvdGVzdGluZy9wcm92aWRlcnMvY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTTtBQUNOLGtEQUErRDtBQUUvRCxTQUFTO0FBQ1QsOENBQW1LO0FBRW5LLFFBQVE7QUFDUixvREFBa0Q7QUFDbEQsMEVBQXVFO0FBRXZFLDZCQUFvQyxPQUFhO0lBQzdDLFdBQVc7SUFDWCxvRUFBb0U7SUFFcEUsSUFBSSxTQUFTLEdBQUc7UUFDWixFQUFFLE9BQU8sRUFBRSxzQkFBYyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7UUFDOUMsRUFBRSxPQUFPLEVBQUUsc0JBQWMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFO1FBQ25ELEVBQUUsT0FBTyxFQUFFLHFCQUFhLEVBQUUsUUFBUSxFQUFFLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSx3QkFBVSxFQUFFO1FBQy9FO1lBQ0ksT0FBTyxFQUFFLGlCQUFTO1lBQ2xCLElBQUksRUFBRSxDQUFDLHNCQUFjLENBQUM7WUFDdEIsVUFBVSxFQUFFLFVBQUMsQ0FBaUIsSUFBSyxPQUFBLElBQUkscUJBQWEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsZ0JBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFyRCxDQUFxRDtZQUN4RixLQUFLLEVBQUUsSUFBSTtTQUNkO1FBQ0Qsa0JBQVU7UUFDViwyQkFBbUI7UUFDbkIsRUFBRSxPQUFPLEVBQUUsd0JBQWdCLEVBQUUsUUFBUSxFQUFFLDZDQUFvQixFQUFFO1FBQzdELGtCQUFVO0tBQ2IsQ0FBQztJQUVGLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDckIsQ0FBQztBQXJCRCxrREFxQkMiLCJmaWxlIjoiYXBwL21vZHVsZXMvY29yZS90ZXN0aW5nL3Byb3ZpZGVycy9jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwXG5pbXBvcnQgeyBBTkFMWVRJQ1NfUFJPVklERVJTIH0gZnJvbSAnLi4vLi4vLi4vYW5hbHl0aWNzL2luZGV4JztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlLCBTdG9yYWdlU2VydmljZSwgQ29uc29sZVNlcnZpY2UsIExvZ1NlcnZpY2UsIExvZ1RhcmdldCwgQ29uc29sZVRhcmdldCwgTG9nTGV2ZWwsIFJvdXRlckV4dGVuc2lvbnMsIEFwcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5cbi8vIG1vY2tzXG5pbXBvcnQgeyBXaW5kb3dNb2NrIH0gZnJvbSAnLi4vbW9ja3Mvd2luZG93Lm1vY2snO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9uc01vY2sgfSBmcm9tICcuLi9tb2Nrcy9yb3V0ZXItZXh0ZW5zaW9ucy5tb2NrJztcblxuZXhwb3J0IGZ1bmN0aW9uIFRFU1RfQ09SRV9QUk9WSURFUlMob3B0aW9ucz86IGFueSk6IEFycmF5PGFueT4ge1xuICAgIC8vIG9wdGlvbnM6XG4gICAgLy8gd2luZG93OiAgID0gY3VzdG9tIHdpbmRvdyBtb2NrIChtYWlubHkgZm9yIGNoYW5naW5nIG91dCBsYW5ndWFnZSlcblxuICAgIGxldCBwcm92aWRlcnMgPSBbXG4gICAgICAgIHsgcHJvdmlkZTogQ29uc29sZVNlcnZpY2UsIHVzZVZhbHVlOiBjb25zb2xlIH0sXG4gICAgICAgIHsgcHJvdmlkZTogU3RvcmFnZVNlcnZpY2UsIHVzZVZhbHVlOiBsb2NhbFN0b3JhZ2UgfSxcbiAgICAgICAgeyBwcm92aWRlOiBXaW5kb3dTZXJ2aWNlLCB1c2VDbGFzczogKG9wdGlvbnMgJiYgb3B0aW9ucy53aW5kb3cpIHx8IFdpbmRvd01vY2sgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTG9nVGFyZ2V0LFxuICAgICAgICAgICAgZGVwczogW0NvbnNvbGVTZXJ2aWNlXSxcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IChjOiBDb25zb2xlU2VydmljZSkgPT4gbmV3IENvbnNvbGVUYXJnZXQoYywgeyBtaW5Mb2dMZXZlbDogTG9nTGV2ZWwuRGVidWcgfSksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBMb2dTZXJ2aWNlLFxuICAgICAgICBBTkFMWVRJQ1NfUFJPVklERVJTLFxuICAgICAgICB7IHByb3ZpZGU6IFJvdXRlckV4dGVuc2lvbnMsIHVzZUNsYXNzOiBSb3V0ZXJFeHRlbnNpb25zTW9jayB9LFxuICAgICAgICBBcHBTZXJ2aWNlXG4gICAgXTtcblxuICAgIHJldHVybiBwcm92aWRlcnM7XG59XG4iXX0=
