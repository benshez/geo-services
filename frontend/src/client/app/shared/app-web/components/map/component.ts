// libs
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
    templateUrl: 'component.html',
    styleUrls: ['component.css']
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
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-79.4512, 43.6568],
        zoom: 13,
        hash: false
    };
    private marker: IMarker = {
        map: this.options.map,
        id: '',
        offset: [0, 0],
        latLang: [0, 0],
        popup: {
            offset: 0,
            text: ''
        }
    };

    constructor(public apiService: ApiService, private locker: Locker, private fb: FormBuilder,
        private apiOptions: ApiServiceParametersOptions, private route: ActivatedRoute,
        private router: Router,
        private mapper: Mapper) { }

    ngOnInit() {
        this.loading = true;
        this.onMapComponentInit(this.options);
        this.returnUrl = this.route.snapshot.queryParams[Config.ROUTE_URLS.LOGIN_RETURN_URL] || '/'; 
    }

    ngOnDestroy() {
    }

    onSetLocation(options: IMapSetup) {
        let self = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position: Position) => {
                    options.center = [position.coords.longitude, position.coords.latitude];
                    self.onCreateMap(options);
                },
                (error: PositionError) => { self.onCreateMap(options); },
                { maximumAge: 60000, timeout: 10000 }
            );
        } else { self.onCreateMap(options); }
    }

    onMapComponentInit(options: IMapSetup) {
        this.onAssign(MapBox, 'accessToken', options.accessToken);
        this.onSetLocation(options);
    }

    onCreateMap(options: IMapSetup) {
        options.map = new MapBox.Map({
            container: options.container,
            style: options.style,
            center: options.center,
            zoom: options.zoom,
            hash: options.hash
        } as IMapOptions);

        this.marker.map = this.options.map;
        this.marker.id = 'marker';
        this.marker.offset = [-25, -25];
        this.marker.latLang = this.options.center;
        this.marker.popup = { offset: 25, text: 'testing' };

        this.onAddMarker(this.marker);
    }

    onAssign(obj: any, prop: any, value: any) {
        if (typeof prop === "string")
            prop = prop.split(".");

        if (prop.length > 1) {
            var e = prop.shift();
            this.onAssign(obj[e] =
                Object.prototype.toString.call(obj[e]) === "[object Object]"
                    ? obj[e]
                    : {},
                prop,
                value);
        } else
            obj[prop[0]] = value;
    }

    onSetPosition(options: IMapSetup) {
        options.map.setCenter(options.center);
    }

    onSetModelSource = (keyword: any): Observable<IMapFeatures[]> => {
        if (keyword.length < 4) return Observable.of([]);

        this.model = (this.mapper.onMapFeaturesQuery(keyword));

        return this.model;
    }

    onPlacesChanged(event: any) {
        if (event !== '' && event.center) {
            this.options.center = event.center;
            this.onSetPosition(this.options);
        }
    }

    onAddMarker(options: IMarker) {
        let el = document.createElement('div');
        el.id = options.id;

        new MapBox.Marker(el, { offset: options.offset })
            .setLngLat(options.latLang)
            .setPopup(this.onCreateMarkerPopup(options.popup))
            .addTo(this.options.map);
        this.loading = !this.loading;
    }

    onCreateMarkerPopup = (options: IPopup): any => {
        let popup = new MapBox.Popup({ offset: options.offset })
            .setText(options.text);

        return popup;
    }
   
}
