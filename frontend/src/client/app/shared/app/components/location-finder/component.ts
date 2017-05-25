// libs
import { Component, ChangeDetectionStrategy } from '@angular/core';

// app
import { RouterExtensions, Config, Location, ILocationArguments, IMapFeatures } from '../../../core/index';

import { ApiServiceParametersOptions } from '../../../core/models/Api';

import { TypeAheadComponent } from '../type-ahead/component';

@Component({
    moduleId: module.id,
    selector: 'sd-locations',
    templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
    styleUrls: [Config.COMPONENT_ITEMS.CSS],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {
    public showMapPlaces: boolean = false;

    constructor(private location: Location, private routerext: RouterExtensions) { }

    onBindIndustries(args: ILocationArguments) {
        args.apiOptions = new ApiServiceParametersOptions();
        args.apiOptions.url = Config.API_END_POINTS.INDUSTRIES.concat('{query}');
        args.apiOptions.parameters = '';
        args.apiOptions.concatApi = true;

        return this.location.onSearch(args);
    }

    onBindPlaces(args: ILocationArguments) {
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
