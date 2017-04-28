﻿// libs
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// app
import { ApiService, Locker } from '../../../core/services/index';
import { User, ApiServiceParametersOptions } from '../../../core/models/index';
import { Config, ICoordinates, IMapQuery, IMapFeatures, Mapper, IMapSetup, IMapOptions, IMarker, IPopup } from '../../../core/index';
import { OnMapper } from '../../../core/hooks/onMapper';

import { Observable } from 'rxjs/Observable';

// map
import * as MapBox from 'mapbox-gl';
import * as MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';

@Component({
    moduleId: module.id,
    selector: 'sd-map',
    templateUrl: 'component.html'
})
export class WebMapComponent implements OnInit, OnMapper, OnDestroy {

    public map: any;
    public loading: boolean = true;

    private model: any = [];
    private errorMessage: string;
    private returnUrl: string;
    private options: IMapSetup = {
        accessToken: Config.ENVIRONMENT().MAP_BOX_API_KEY,
        map: '',
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

    constructor(public apiService: ApiService, private locker: Locker, private fb: FormBuilder,
        private apiOptions: ApiServiceParametersOptions, private route: ActivatedRoute,
        private router: Router,
        private mapper: Mapper) { }

    ngOnInit() {
        this.loading = true;
        this.onSetLocation(this.options);
        this.returnUrl = this.route.snapshot.queryParams[Config.ROUTE_URLS.LOGIN_RETURN_URL] || '/'; 
    }

    ngOnDestroy() {
    }

    onSetLocation(options: IMapSetup) {
        let self = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position: Position) => {
                    options.options.center = [position.coords.longitude, position.coords.latitude];
                    options.options.zoom = 13;
                    self.onMapComponentInit(options);
                },
                (error: PositionError) => { self.onMapComponentInit(options); },
                { maximumAge: 60000, timeout: 10000 }
            );
        } else { self.onMapComponentInit(options); }
    }

    onMapComponentInit(options: IMapSetup) {
        this.onAssign(MapBox, 'accessToken', options.accessToken);
        options.map = new MapBox.Map(options.options);
        this.onSetCentre(options);
    }

    onSetCentre(options: IMapSetup) {
        this.loading = true;
        options.map.setCenter(options.options.center);
        this.onRemoveMarker(this.markers);
        this.onAddMarkers(this.onCreateMarker());
    }

    onCreateMarker = (): IMarker => {
        this.marker.latLang = this.options.options.center;
        this.marker.popup.text = 'testing';

        return this.marker;
    }

    onRemoveMarker(markers: any[]) {
        let self = this;
        markers.forEach((mark: any, index: number) => {
            mark.remove();
            markers.splice(index, 1);
        }, this);      
    }

    onAddMarkers(marker: IMarker) {
        let el = document.createElement('div');
        el.id = marker.id;

        this.markers.push(new MapBox.Marker(el, { offset: marker.offset })
            .setLngLat(marker.latLang)
            .setPopup(this.onCreateMarkerPopup(marker.popup))
            .addTo(this.options.map));

        this.loading = !this.loading;
    }

    onCreateMarkerPopup = (options: IPopup): any => {
        let popup = new MapBox.Popup({ offset: options.offset })
            .setText(options.text);

        return popup;
    }

    onAssign(obj: any, prop: any, value: any) {
        if (typeof prop === 'string')
            prop = prop.split('.');

        if (prop.length > 1) {
            var e = prop.shift();
            this.onAssign(obj[e] =
                Object.prototype.toString.call(obj[e]) === '[object Object]'
                    ? obj[e]
                    : {},
                prop,
                value);
        } else
            obj[prop[0]] = value;
    }

    onSetModelSource = (keyword: any): Observable<IMapFeatures[]> => {
        if (keyword.length < 4) return Observable.of([]);

        this.model = (this.mapper.onMapFeaturesQuery(keyword));

        return this.model;
    }

    onPlacesChanged(event: any) {
        if (event !== '' && event.center) {
            this.options.options.center = event.center;
            this.onSetCentre(this.options);
        }
    }
}
