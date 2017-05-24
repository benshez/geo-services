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

    constructor(private location: Location) { }

    onBindIndustries(args: ILocationArguments) {
        args.apiOptions = new ApiServiceParametersOptions();
        args.apiOptions.url = Config.API_END_POINTS.INDUSTRIES.concat('{query}');
        args.apiOptions.parameters = '';
        args.apiOptions.concatApi = true;
        args.minQueryLength = 2;

        return this.location.searchIndustries(args);
    }

}
