// libs
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// app
import { ApiService, Locker } from '../../../core/services/index';
import { User, ApiServiceParametersOptions } from '../../../core/models/index';
import { Config, IMapQuery, IMapFeatures, Mapper } from '../../../core/index';


import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/observable/of';
// map
import * as MapBox from 'mapbox-gl';
import * as MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';

@Component({
    moduleId: module.id,
    selector: 'sd-map',
    templateUrl: 'component.html',
    styleUrls: ['component.css']
})
export class WebMapComponent implements OnInit {

    public map: any;

    private model: any = [];
    private errorMessage: string;
    private returnUrl: string;
    private accessToken: String;
    private options: Object = {
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-79.4512, 43.6568],
        zoom: 13,
        hash: false
    };

    constructor(public apiService: ApiService, private locker: Locker, private fb: FormBuilder,
        private apiOptions: ApiServiceParametersOptions, private route: ActivatedRoute,
        private router: Router,
        public http: Http,
        private mapper: Mapper) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams[Config.ROUTE_URLS.LOGIN_RETURN_URL] || '/';
        this.accessToken = Config.ENVIRONMENT().MAP_BOX_API_KEY;
        this.assign(MapBox, 'accessToken', this.accessToken);

        this.map = new MapBox.Map(this.options);
        //this.map.addControl(new MapBox.NavigationControl());
        //this.map.addControl(new MapBox.GeolocateControl());

        //this.map.addControl(new MapBoxGeocoder({
        //    accessToken: this.accessToken
        //}));

        var el = document.createElement('div');
        el.id = 'marker';

        var popup = new MapBox.Popup({ offset: 25 })
            .setText('Construction on the Washington Monument began in 1848.');

        // create the marker
        new MapBox.Marker(el, { offset: [-25, -25] })
            .setLngLat([-79.4512, 43.6568])
            .setPopup(popup)
            .addTo(this.map);
    }

    onModelSource = (keyword: any): Observable<IMapFeatures[]> => {
        if (keyword.length < 4) return Observable.of([]);

        this.model = (this.mapper.onMapFeaturesQuery(keyword));

        return this.model;
    }

    onValueChanged(event) {
        if (event !== '' && event.center)
            this.map.setCenter(event.center);
    }

    private assign(obj: any, prop: any, value: any) {
        if (typeof prop === "string")
            prop = prop.split(".");

        if (prop.length > 1) {
            var e = prop.shift();
            this.assign(obj[e] =
                Object.prototype.toString.call(obj[e]) === "[object Object]"
                    ? obj[e]
                    : {},
                prop,
                value);
        } else
            obj[prop[0]] = value;
    }
}
