Object.defineProperty(exports, "__esModule", { value: true });
var ConfigMockMultilang = (function () {
    function ConfigMockMultilang() {
    }
    ConfigMockMultilang.prototype.init = function () {
        return null;
    };
    ConfigMockMultilang.prototype.getSettings = function (group, key) {
        return {
            i18n: {
                defaultLanguage: {
                    code: 'en',
                    title: 'English'
                },
                availableLanguages: [
                    { code: 'en', title: 'English' },
                    { code: 'es', title: 'Spanish' },
                    { code: 'fr', title: 'French' },
                    { code: 'ru', title: 'Russian' },
                    { code: 'bg', title: 'Bulgarian' }
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
    return ConfigMockMultilang;
}());
exports.ConfigMockMultilang = ConfigMockMultilang;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vdGVzdGluZy9tb2Nrcy9uZzItY29uZmlnLW11bHRpbGFuZy5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUFBO0lBOEJBLENBQUM7SUE3QkMsa0NBQUksR0FBSjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLEtBQWMsRUFBRSxHQUFZO1FBQ3RDLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRTtnQkFDSixlQUFlLEVBQUU7b0JBQ2YsSUFBSSxFQUFFLElBQUk7b0JBQ1YsS0FBSyxFQUFFLFNBQVM7aUJBQ2pCO2dCQUNELGtCQUFrQixFQUFFO29CQUNsQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtvQkFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7b0JBQ2hDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO29CQUMvQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtvQkFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7aUJBQ25DO2FBQ0Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFO29CQUNMLE9BQU8sRUFBRSxLQUFLO29CQUNkLE9BQU8sRUFBRSxLQUFLO29CQUNkLE9BQU8sRUFBRSxLQUFLO29CQUNkLE9BQU8sRUFBRSxLQUFLO2lCQUNmO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0E5QkEsQUE4QkMsSUFBQTtBQTlCWSxrREFBbUIiLCJmaWxlIjoiYXBwL21vZHVsZXMvaTE4bi90ZXN0aW5nL21vY2tzL25nMi1jb25maWctbXVsdGlsYW5nLm1vY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29uZmlnTW9ja011bHRpbGFuZyB7XG4gIGluaXQoKTogYW55IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFNldHRpbmdzKGdyb3VwPzogc3RyaW5nLCBrZXk/OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBpMThuOiB7XG4gICAgICAgIGRlZmF1bHRMYW5ndWFnZToge1xuICAgICAgICAgIGNvZGU6ICdlbicsXG4gICAgICAgICAgdGl0bGU6ICdFbmdsaXNoJ1xuICAgICAgICB9LFxuICAgICAgICBhdmFpbGFibGVMYW5ndWFnZXM6IFtcbiAgICAgICAgICB7IGNvZGU6ICdlbicsIHRpdGxlOiAnRW5nbGlzaCcgfSxcbiAgICAgICAgICB7IGNvZGU6ICdlcycsIHRpdGxlOiAnU3BhbmlzaCcgfSxcbiAgICAgICAgICB7IGNvZGU6ICdmcicsIHRpdGxlOiAnRnJlbmNoJyB9LFxuICAgICAgICAgIHsgY29kZTogJ3J1JywgdGl0bGU6ICdSdXNzaWFuJyB9LFxuICAgICAgICAgIHsgY29kZTogJ2JnJywgdGl0bGU6ICdCdWxnYXJpYW4nIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGxvZ2dpbmc6IHtcbiAgICAgICAgREVCVUc6IHtcbiAgICAgICAgICBMRVZFTF8xOiBmYWxzZSxcbiAgICAgICAgICBMRVZFTF8yOiBmYWxzZSxcbiAgICAgICAgICBMRVZFTF8zOiBmYWxzZSxcbiAgICAgICAgICBMRVZFTF80OiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19
