// libs
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

// app
import { ApiService, Locker } from '../../../core/index';
import { User, ApiServiceParametersOptions } from '../../../core/index';
import { Config, Mapper, RouterExtensions, IMapFeatures, ICoordinates, IIndustries } from '../../../core/index';

@Component({
    moduleId: module.id,
    selector: 'sd-map-places',
    templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
    styleUrls: [Config.COMPONENT_ITEMS.CSS],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebMapPlacesComponent implements OnInit {
    public loading: boolean = false;
    public showMapPlaces: boolean = false;
    public showIndustries: boolean = false;
    public mapPlaces: Observable<Array<IMapFeatures>>;
    public industries: Observable<Array<IIndustries>>;

    private errorMessage: string;
    private returnUrl: string;
    private industriesSearch = new FormControl();
    private mapPlacesSearch = new FormControl();

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

        this.industries = this.industriesSearch.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => {
                this.showIndustries = true;
                return this.mapper.onIndustriesQuery(term);
            })
            .onErrorResumeNext();

        this.mapPlaces = this.mapper.searchMapFeatures(this.mapPlacesSearch.valueChanges);
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

    onIndustriesChanged(args: IIndustries) {
        this.showMapPlaces = false;
        if (args && args.id) {
            this.industriesSearch.setValue(args.description, {
                onlySelf: true,
                emitEvent: false,
                emitModelToViewChange: true,
                emitViewToModelChange: true
            });
            Config.ROUTE_PARAMETERS.INDUSTRY = args.id;
            this.showIndustries = false;
            this.showMapPlaces = true;
        }
    }

    onPlacesChanged(args: IMapFeatures) {
        if (args && args.center && this.showMapPlaces) {
            Config.ROUTE_PARAMETERS.LONGITUDE = args.center[0];
            Config.ROUTE_PARAMETERS.LATITUDE = args.center[1];
            this.onNavigate();
        }
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
