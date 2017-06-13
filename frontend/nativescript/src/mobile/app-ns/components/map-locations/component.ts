import { Component, ChangeDetectionStrategy } from '@angular/core';

// app
import { RouterExtensions, Config, Location, ILocationArguments, IMapFeatures } from '../../../../app/shared/core/index';

import { ApiServiceParametersOptions } from '../../../../app/shared/core/models/Api';

import { NSTypeAheadComponent } from '../type-ahead/component';

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

    onBindIndustries(args: ILocationArguments) {
        args.apiOptions = new ApiServiceParametersOptions();
        args.apiOptions.url = Config.API_END_POINTS.INDUSTRIES.concat('{query}');
        args.apiOptions.parameters = '';
        args.apiOptions.concatApi = true;
        //return this.location.onSearcher(args);
        return this.location.onSearch(args);//.map((res) => { return res; });
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
