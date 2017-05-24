// libs
import { Component, ChangeDetectionStrategy } from '@angular/core';

// app
import { Config, Location, ILocationArguments } from '../../../core/index';

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

    constructor(private location: Location) { }

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
}
