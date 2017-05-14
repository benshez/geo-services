﻿// libs
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import * as Geolocation from 'nativescript-geolocation';

// app
import { ApiService, Locker } from '../../../../app/shared/core/index';
import { User, ApiServiceParametersOptions } from '../../../../app/shared/core/index';
import { Config, Mapper, RouterExtensions, IMapFeatures, ICoordinates } from '../../../../app/shared/core/index';

@Component({
    moduleId: module.id,
    selector: 'sd-map-places',
    templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
    styleUrls: [Config.COMPONENT_ITEMS.CSS],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NSWebMapPlacesComponent implements OnInit {
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

    onSetModelSource = (keyword: any): Observable<IMapFeatures[]> => {
        this.model = (this.mapper.onMapFeaturesQuery(keyword));
        return this.model;
    }

    onChange(event: any) {
        if (event.value.length < 4) return;
        this.onSetModelSource(event.value);
    }

    onItemTap(args) {
        var lbl = <any>args.view.getViewById('lbl' + args.index);
        Config.ROUTE_PARAMETERS.LONGITUDE = lbl.center[0];
        Config.ROUTE_PARAMETERS.LATITUDE = lbl.center[1];
        this.onNavigate();
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
