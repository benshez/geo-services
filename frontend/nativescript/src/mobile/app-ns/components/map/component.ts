// libs
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { isAndroid, isIOS } from 'platform';

// app
import { ApiService, Locker } from '../../../../app/shared/core/index';
import { User, ApiServiceParametersOptions } from '../../../../app/shared/core/index';
import { Config, ICoordinates, IMapQuery, IMapFeatures, Mapper, IMapSetup, IMapOptions, IMarker, IPopup } from '../../../../app/shared/core/index';

let mapbox = require('nativescript-mapbox');


@Component({
    moduleId: module.id,
    selector: 'sd-map',
    templateUrl: 'component.html',
    styleUrls: ['component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NSMapComponent implements OnInit {
    public list: any = {
        name: 'w',
        description: 'wood'
    };
    //['work', 'wood', 'man', 'wow', 'wonderful1'];
    //public viewModel: Observable<T>;
    public model: any = [];
    private errorMessage: string;
    private returnUrl: string;

    constructor(
        public apiService: ApiService,
        private locker: Locker,
        private fb: FormBuilder,
        private apiOptions: ApiServiceParametersOptions,
        private route: ActivatedRoute,
        private router: Router,
        private mapper: Mapper) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams[Config.ROUTE_URLS.LOGIN_RETURN_URL] || '/';
    }

    itemTapped(ev) {
        console.log(ev); //your code
    }

    doCreateTnsMap() {
        mapbox.show({
            accessToken: Config.ENVIRONMENT().MAP_BOX_API_KEY, // see 'Prerequisites' above 
            style: mapbox.MapStyle.DARK, // see the mapbox.MapStyle enum for other options, default mapbox.MapStyle.STREETS 
            margins: {
                left: 10, // default 0 
                right: 10, // default 0 
                top: 10, // default 0 
                bottom: isIOS ? 10 : 10 // default 0, this shows how to override the style for iOS 
            },
            center: { // optional without a default 
                lat: 52.3702160,
                lng: 4.8951680
            },
            zoomLevel: 9.25, // 0-20, default 0 
            showUserLocation: true, // default false - requires location permissions on Android which you can remove from AndroidManifest.xml if you don't need them 
            hideAttribution: false, // default true, Mapbox requires `false` if you're on a free plan 
            hideLogo: false, // default false, Mapbox requires this default if you're on a free plan 
            hideCompass: false, // default false 
            disableRotation: false, // default false 
            disableScroll: false, // default false 
            disableZoom: false
        });
    }

    onSetModelSource(keyword: any) {
        this.model = (this.mapper.onSuggest(keyword));
        for (let i = 0; i < this.model.length; i++) {
            console.log(this.model.place_name[i]);
        };

        //return this.model;
    }

    onChange(event: any) {
        if (event.value.length < 4) return;
        //if (event && event.value && event.value.length > 3) {
        this.onSetModelSource(event.value);
        //if (event !== '') {
        //console.log(event.value); //your code
        //this.options.options.center = event.center;
        //this.onSetCentre(this.options);
        //}
        //}
    }
}
