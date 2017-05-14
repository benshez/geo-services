// libs
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

// app
import { ApiService, Locker } from '../../../core/index';
import { User, ApiServiceParametersOptions } from '../../../core/index';
import { Config, Mapper, RouterExtensions, IMapFeatures, ICoordinates } from '../../../core/index';

@Component({
    moduleId: module.id,
    selector: 'sd-map-places',
    templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
    styleUrls: [Config.COMPONENT_ITEMS.CSS],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebMapPlacesComponent implements OnInit {
    public loading: boolean = false;
    public model: Observable<Array<IMapFeatures>>;

    private errorMessage: string;
    private returnUrl: string;

    constructor(
        public apiService: ApiService,
        private locker: Locker,
        private fb: FormBuilder,
        private apiOptions: ApiServiceParametersOptions,
        private route: ActivatedRoute,
        private router: Router,
        private mapper: Mapper,
        public routerext: RouterExtensions) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams[Config.ROUTE_PARAMETERS.LOGIN_RETURN_URL] || '/';
    }

    onSetModelSource = (keyword: any): Observable<IMapFeatures[]> => {
        this.model = (this.mapper.onMapFeaturesQuery(keyword));
        return this.model;
    }

    onChange(event: any) {
        if (event.value.length < 4) return;
        this.onSetModelSource(event.value);
    }

    onPlacesChanged(event: any) {
        if (event !== '' && event.center) {
            this.onNavigate(<ICoordinates>{ longitude: event.center[0], latitude: event.center[1] });
        }
    }

    onNavigate(coordinates: ICoordinates) {
        this.routerext.navigate([Config.ROUTE_ROUTES.MAP], {
            queryParams: { longitude: coordinates.longitude, latitude: coordinates.latitude },
            transition: {
                duration: Config.TRANSITION.DURATION,
                name: Config.TRANSITION.SLIDE_TOP,
            }
        });
    }
}
