﻿// libs
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

//import { Observable as RxObservable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Observable';

import { isAndroid, isIOS } from 'platform';

// app
import { ApiService, Locker } from '../../../../app/shared/core/index';
import { User, ApiServiceParametersOptions } from '../../../../app/shared/core/index';
import { Config, ICoordinates, IMapQuery, IMapFeatures, Mapper, IMapSetup, IMapOptions, IMarker, IPopup } from '../../../../app/shared/core/index';

import * as Geolocation from 'nativescript-geolocation';

let mapbox = require('nativescript-mapbox');

class MapFeature {
    constructor(public id: string, public place_name: string, public center: [number, number]) { }
}

@Component({
    moduleId: module.id,
    selector: 'sd-map',
    templateUrl: 'component.html',
    styleUrls: ['component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NSMapComponent implements OnInit {
    public loading: boolean = false;
    public model: Observable<Array<IMapFeatures>>;
    public features: any = [];

    private errorMessage: string;
    private returnUrl: string;
    private options: IMapSetup = {
        accessToken: Config.ENVIRONMENT().MAP_BOX_API_KEY,
        map: null,
        options: {
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v9',
            center: [152.994306, -26.612273],
            zoom: 1,
            hash: false,
            interactive: false
        }
    };
    private marker: IMarker = {
        id: 'marker',
        offset: [-25, -25],
        latLang: [0, 0],
        popup: {
            offset: 25,
            text: ''
        }
    };
    private markers: IMarker[] = [];

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
        this.onSetLocation(this.options);
    }

    onSetLocation(options: IMapSetup) {
        let self = this;

        Geolocation.getCurrentLocation({
            desiredAccuracy: 3,
            updateDistance: 1,
            maximumAge: 20000,
            timeout: 20000
        }).then((loc) => {
            console.log('loc found');
            if (loc) {
                options.options.center[1] = loc.latitude;
                options.options.center[0] = loc.longitude;
                self.onShow(self.options);
            }
        }).catch(function (response) {
            //self.onShow(self.options);
        });
    }

    onShow(options: IMapSetup) {
        this.options.map = mapbox;

        let self = this;

        options.map.show({
            accessToken: options.accessToken, // see 'Prerequisites' above 
            style: mapbox.MapStyle.LIGHT, // see the mapbox.MapStyle enum for other options, default mapbox.MapStyle.STREETS 
            center: { // optional without a default 
                lat: options.options.center[1],
                lng: options.options.center[0]
            },
            zoomLevel: 13, // 0-20, default 0 
            showUserLocation: true, // default false - requires location permissions on Android which you can remove from AndroidManifest.xml if you don't need them 
            hideAttribution: false, // default true, Mapbox requires `false` if you're on a free plan 
            hideLogo: false, // default false, Mapbox requires this default if you're on a free plan 
            hideCompass: true, // default false 
            disableRotation: false, // default false 
            disableScroll: true, // default false 
            disableZoom: true
        }).then(
            function (result) {
                self.onMapComponentInit(self.options);
            },
            function (error) {
                console.log("mapbox show error: " + error);
            });
    }

    onMapComponentInit(options: IMapSetup) {
        this.onSetCentre(options);
    }

    onSetCentre(options: IMapSetup) {
        this.loading = true;

        options.map.setCenter({
            lat: options.options.center[1],
            lng: options.options.center[0],
            animated: false
        });

        this.onRemoveMarker();

        this.marker.latLang = this.options.options.center;
        this.marker.popup.text = 'testing';
        this.onAddMarkers(this.marker);
    }

    onRemoveMarker() {
        this.options.map.removeMarkers();
    }

    onAddMarkers(marker: IMarker) {
        this.options.map.addMarkers([
            {
                id: marker.id, // can be user in 'removeMarkers()'
                lat: marker.latLang[1], // mandatory
                lng: marker.latLang[0], // mandatory
                title: marker.popup.text, // no popup unless set
                subtitle: 'Infamous subtitle!',
                icon: 'res://marker', // preferred way, otherwise use:
                //icon: 'https://farm9.staticflickr.com/8571/15844010757_63b093d527_n.jpg', // from the internet (see the note at the bottom of this readme), or:
                iconPath: 'res://marker',
                onTap: this.onTap,
                onCalloutTap: this.onCalloutTap
            },
            {}
        ])
        this.loading = !this.loading;
    }

    onItemTap(args) {
        var lbl = <any>args.view.getViewById("lbl" + args.index);
        this.options.options.center = lbl.center;
        if (!this.options.map) this.onShow(this.options);
        else this.onSetCentre(this.options);
        //if (this.options.map) this.options.map.destroy();
        //this.onShow(this.options);
    }

    onSetModelSource = (keyword: any): Observable<IMapFeatures[]> => {
        this.model = (this.mapper.onMapFeaturesQuery(keyword));
        return this.model;
    }

    onTap(marker) {
        console.log("Marker tapped with title: '" + marker.title + "'");
    }

    onCalloutTap(marker) {
        console.log("Marker callout tapped with title: '" + marker.title + "'");
    }

    onChange(event: any) {
        if (event.value.length < 4) return;
        this.onSetModelSource(event.value);
    }
}
