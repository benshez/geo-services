// libs
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LngLat, Map } from 'mapbox-gl';
import * as mapboxgl from 'mapbox-gl';

// app
import { ApiService, Locker } from '../../../core/services/index';
import { User, ApiServiceParametersOptions } from '../../../core/models/index';
import { Config } from '../../../core/index';

//MapBoxModule.forRoot('pk.eyJ1IjoiYmVuc2hleiIsImEiOiJjajFmZ2ludHMwMGx0MzJ0NDJzbW14MWc5In0.3W8kUIEbiliNAEl85DqD-A')
@Component({
    moduleId: module.id,
    selector: 'sd-map',
    templateUrl: 'map.component.html',
    styleUrls: ['map.component.css']
})
export class WebMapComponent implements OnInit {

    private model: any = {};
    private errorMessage: string;
    private returnUrl: string;

    constructor(public apiService: ApiService, private locker: Locker, private fb: FormBuilder,
        private apiOptions: ApiServiceParametersOptions, private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams[Config.ROUTE_URLS.LOGIN_RETURN_URL] || '/';
        (mapboxgl as any).accessToken = 'pk.eyJ1IjoiZHozMTY0MjQiLCJhIjoiNzI3NmNkOTcyNWFlNGQxNzU2OTA1N2EzN2FkNWIwMTcifQ.NS8KWg47FzfLPlKY0JMNiQ';
        let map = new Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v9',
            zoom: 5,
            center: [-78.880453, 42.897852]
        });
    }
}
