Object.defineProperty(exports, "__esModule", { value: true });
var ConfigMock = (function () {
    function ConfigMock() {
    }
    ConfigMock.prototype.init = function () {
        return null;
    };
    ConfigMock.prototype.getSettings = function (group, key) {
        return {
            i18n: {
                defaultLanguage: {
                    code: 'en',
                    title: 'English'
                },
                availableLanguages: [
                    {
                        code: 'en',
                        title: 'English'
                    }
                ]
            },
            logging: {
                DEBUG: {
                    LEVEL_1: false,
                    LEVEL_2: false,
                    LEVEL_3: false,
                    LEVEL_4: false
                }
            }
        };
    };
    return ConfigMock;
}());
exports.ConfigMock = ConfigMock;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvdGVzdGluZy9tb2Nrcy9uZzItY29uZmlnLm1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQUE7SUE2QkEsQ0FBQztJQTVCQyx5QkFBSSxHQUFKO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxnQ0FBVyxHQUFYLFVBQVksS0FBYyxFQUFFLEdBQVk7UUFDdEMsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFO2dCQUNKLGVBQWUsRUFBRTtvQkFDZixJQUFJLEVBQUUsSUFBSTtvQkFDVixLQUFLLEVBQUUsU0FBUztpQkFDakI7Z0JBQ0Qsa0JBQWtCLEVBQUU7b0JBQ2xCO3dCQUNFLElBQUksRUFBRSxJQUFJO3dCQUNWLEtBQUssRUFBRSxTQUFTO3FCQUNqQjtpQkFDRjthQUNGO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRTtvQkFDTCxPQUFPLEVBQUUsS0FBSztvQkFDZCxPQUFPLEVBQUUsS0FBSztvQkFDZCxPQUFPLEVBQUUsS0FBSztvQkFDZCxPQUFPLEVBQUUsS0FBSztpQkFDZjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDSCxpQkFBQztBQUFELENBN0JBLEFBNkJDLElBQUE7QUE3QlksZ0NBQVUiLCJmaWxlIjoiYXBwL21vZHVsZXMvY29yZS90ZXN0aW5nL21vY2tzL25nMi1jb25maWcubW9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb25maWdNb2NrIHtcbiAgaW5pdCgpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0U2V0dGluZ3MoZ3JvdXA/OiBzdHJpbmcsIGtleT86IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGkxOG46IHtcbiAgICAgICAgZGVmYXVsdExhbmd1YWdlOiB7XG4gICAgICAgICAgY29kZTogJ2VuJyxcbiAgICAgICAgICB0aXRsZTogJ0VuZ2xpc2gnXG4gICAgICAgIH0sXG4gICAgICAgIGF2YWlsYWJsZUxhbmd1YWdlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvZGU6ICdlbicsXG4gICAgICAgICAgICB0aXRsZTogJ0VuZ2xpc2gnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgbG9nZ2luZzoge1xuICAgICAgICBERUJVRzoge1xuICAgICAgICAgIExFVkVMXzE6IGZhbHNlLFxuICAgICAgICAgIExFVkVMXzI6IGZhbHNlLFxuICAgICAgICAgIExFVkVMXzM6IGZhbHNlLFxuICAgICAgICAgIExFVkVMXzQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=
