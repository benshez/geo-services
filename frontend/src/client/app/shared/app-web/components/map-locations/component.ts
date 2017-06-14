// libs
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, Config, Location, ILocationArguments, IMapFeatures } from '../../../core/index';

import { ApiServiceParametersOptions } from '../../../core/models/Api';

import { TypeAheadComponent } from '../type-ahead/component';

import { IKeyValue, IKeyValueDictionary } from '../../../core/collections/KeyValuePairs/interfaces';
@Component({
    moduleId: module.id,
    selector: 'sd-locations',
    templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
    styleUrls: [Config.COMPONENT_ITEMS.CSS]
})
export class WebMapLocationComponent {
    public showMapPlaces: boolean = false;
    public iData: IKeyValueDictionary;
    public mData: IKeyValueDictionary;

    constructor(private location: Location, private routerext: RouterExtensions) { }

    onBindIndustries(args: ILocationArguments) {
        args.apiOptions = new ApiServiceParametersOptions();
        args.apiOptions.url = Config.API_END_POINTS.INDUSTRIES.concat('{query}');
        args.apiOptions.parameters = '';
        args.apiOptions.concatApi = true;

        this.location.onSearch(args).subscribe(results => this.iData = results as any);
    }

    onBindPlaces(args: ILocationArguments) {
        args.apiOptions = new ApiServiceParametersOptions();
        args.apiOptions.url = Config.ENVIRONMENT().MAP_BOX_API.concat('{query}').concat('.json?access_token=').concat(Config.ENVIRONMENT().MAP_BOX_API_KEY);//Config.API_END_POINTS.INDUSTRIES.concat('{query}');
        args.apiOptions.parameters = '';
        args.apiOptions.concatApi = false;

        this.location.onSearch(args).subscribe(results => this.mData = results as any);
    }

    onIndustryChange(args: any) {
        this.showMapPlaces = false;
        if (args !== '') {
            Config.ROUTE_PARAMETERS.INDUSTRY = args;
            this.showMapPlaces = true;
        }
    }

    onPlaceChange(args: any) {
        debugger
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
