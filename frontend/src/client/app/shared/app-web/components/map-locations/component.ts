// libs
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, Config, ILocationArguments, IMapFeatures } from '../../../core/index';

import { ApiServiceParametersOptions } from '../../../core/models/Api';

import { IKeyValue, IKeyValueDictionary, Location } from '../../../core/collections/index';

@Component({
    moduleId: module.id,
    selector: 'sd-locations',
    templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
    styleUrls: [Config.COMPONENT_ITEMS.CSS]
})
export class WebMapLocationComponent {
    public showMapPlaces: boolean = false;

    constructor(private location: Location, private routerext: RouterExtensions) { }

    onBindIndustries = (keyword: Observable<string>): Observable<IKeyValueDictionary> => {

        let args: ILocationArguments = {
            keyword: keyword,
            key: 'id',
            value: 'description',
            delay: 400,
            apiOptions: null,
            minQueryLength: 2,
            cacheKey: 'industries'.concat('_').concat('{query}'),
            DeepObjectName: ''
        };

        args.apiOptions = new ApiServiceParametersOptions();
        args.apiOptions.url = Config.API_END_POINTS.INDUSTRIES.concat('{query}');
        args.apiOptions.parameters = '';
        args.apiOptions.concatApi = true;

        return this.location.onSearch(args);
    }

    onBindPlaces = (keyword: Observable<string>): Observable<IKeyValueDictionary> => {

        let args: ILocationArguments = {
            keyword: keyword,
            key: 'center',
            value: 'place_name',
            delay: 400,
            apiOptions: null,
            minQueryLength: 2,
            cacheKey: 'places'.concat('_').concat('{query}'),
            DeepObjectName: 'features'
        };
        args.apiOptions = new ApiServiceParametersOptions();
        args.apiOptions.url = Config.ENVIRONMENT().MAP_BOX_API.concat('{query}').concat('.json?access_token=').concat(Config.ENVIRONMENT().MAP_BOX_API_KEY);//Config.API_END_POINTS.INDUSTRIES.concat('{query}');
        args.apiOptions.parameters = '';
        args.apiOptions.concatApi = false;

        return this.location.onSearch(args);
    }

    onIndustryChange(args: any) {
        this.showMapPlaces = false;
        if (args !== '') {
            Config.ROUTE_PARAMETERS.INDUSTRY = args;
            this.showMapPlaces = true;
        }
    }

    onPlaceChange(args: any) {
        if (args && this.showMapPlaces) {
            Config.ROUTE_PARAMETERS.LONGITUDE = args[0];
            Config.ROUTE_PARAMETERS.LATITUDE = args[1];
            this.onNavigate();
        }
    }

    onSetLocation() {
        let self = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position: Position) => {
                    Config.ROUTE_PARAMETERS.LONGITUDE = position.coords.longitude;
                    Config.ROUTE_PARAMETERS.LATITUDE = position.coords.latitude;
                    self.onNavigate();
                },
                (error: PositionError) => { self.onNavigate(); },
                { maximumAge: 60000, timeout: 10000 }
            );
        } else { self.onNavigate(); }
    }

    onNavigate() {
        this.routerext.navigate([Config.ROUTE_ROUTES.MAP], {
            transition: {
                duration: Config.TRANSITION.DURATION,
                name: Config.TRANSITION.SLIDE_TOP,
            }
        });
    }
}
