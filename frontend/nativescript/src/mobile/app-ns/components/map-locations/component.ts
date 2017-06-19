import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, Config, ILocationArguments, IMapFeatures } from '../../../../app/shared/core/index';

import { ApiServiceParametersOptions } from '../../../../app/shared/core/models/Api';

import { IKeyValue, IKeyValueDictionary, Location } from '../../../../app/shared/core/collections/index';

import * as Geolocation from 'nativescript-geolocation';

@Component({
    moduleId: module.id,
    selector: 'sd-locations',
    templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
    styleUrls: [Config.COMPONENT_ITEMS.CSS],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NSMapLocationsComponent {

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
        if (args && args.key) {
            Config.ROUTE_PARAMETERS.INDUSTRY = args.key;
            this.showMapPlaces = true;
        }
    }

    onPlaceChange(args: any) {
        if (args && args.key && this.showMapPlaces) {
            Config.ROUTE_PARAMETERS.LONGITUDE = args.key[0];
            Config.ROUTE_PARAMETERS.LATITUDE = args.key[1];
            this.onNavigate();
        }
    }

    onSetLocation() {
        let self = this;
        Geolocation.getCurrentLocation({
            desiredAccuracy: 3,
            updateDistance: 1,
            maximumAge: 20000,
            timeout: 20000
        }).then((position) => {
            console.log('loc found');
            if (position) {
                Config.ROUTE_PARAMETERS.LONGITUDE = position.longitude;
                Config.ROUTE_PARAMETERS.LATITUDE = position.latitude;
                self.onNavigate();
            } else {
                self.onNavigate();
            }
        }).catch(function (response) {
            self.onNavigate();
        });
    }

    onNavigate() {
        this.routerext.navigate([Config.ROUTE_ROUTES.MAP], {
            transition: {
                duration: Config.TRANSITION.DURATION,
                name: Config.TRANSITION.SLIDE_TOP,
            }
        });
    }

    onItemTap(args) {
        if (this.showMapPlaces) {
            var lbl = <any>args.view.getViewById('lbl' + args.index);
            Config.ROUTE_PARAMETERS.LONGITUDE = lbl.center[0];
            Config.ROUTE_PARAMETERS.LATITUDE = lbl.center[1];
            this.onNavigate();
        }
    }
}
