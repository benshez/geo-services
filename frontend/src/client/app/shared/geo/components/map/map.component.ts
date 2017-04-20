// libs
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MAPBOX } from '../../index';
//import { LngLat, Map } from 'mapbox-gl';
//import * as mapboxgl from 'mapbox-gl';

// app
import { ApiService, Locker } from '../../../core/services/index';
import { User, ApiServiceParametersOptions } from '../../../core/models/index';
import { Config } from '../../../core/index';

if (!Config.PLATFORMS.WEB) {
    debugger
    //var mapbox = require("nativescript-mapbox");
}

//MapBoxModule.forRoot('pk.eyJ1IjoiYmVuc2hleiIsImEiOiJjajFmZ2ludHMwMGx0MzJ0NDJzbW14MWc5In0.3W8kUIEbiliNAEl85DqD-A')
@Component({
    moduleId: module.id,
    selector: 'sd-map',
    templateUrl: 'map.component.html',
    styleUrls: ['map.component.css'],
    providers: []
})
export class MapComponent implements OnInit {

    private model: any = {};
    private errorMessage: string;
    private returnUrl: string;

    constructor( @Inject(MAPBOX) mapbox:any, public apiService: ApiService,
        private locker: Locker,
        private fb: FormBuilder,
        private apiOptions: ApiServiceParametersOptions,
        private route: ActivatedRoute,
        private router: Router) { debugger }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams[Config.ROUTE_URLS.LOGIN_RETURN_URL] || '/';

        if (Config.PLATFORMS.WEB) {
            this.doCreateWebMap();
        } else {
            this.doCreateTnsMap();
        }
    }

    doCreateWebMap() {
        
        //(mapboxgl as any).accessToken = 'pk.eyJ1IjoiZHozMTY0MjQiLCJhIjoiNzI3NmNkOTcyNWFlNGQxNzU2OTA1N2EzN2FkNWIwMTcifQ.NS8KWg47FzfLPlKY0JMNiQ';
        //let map = new Map({
        //    container: 'map',
        //    style: 'mapbox://styles/mapbox/light-v9',
        //    zoom: 5,
        //    center: [-78.880453, 42.897852]
        //});

        //this.mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuc2hleiIsImEiOiJjajFmZ2ludHMwMGx0MzJ0NDJzbW14MWc5In0.3W8kUIEbiliNAEl85DqD-A';
        //debugger
        //let map = new mapboxgl.Map({
        //    container: 'map', // container id
        //    style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
        //    center: [-74.50, 40], // starting position
        //    zoom: 9 // starting zoom
        //});
    }

    doCreateTnsMap() {
        //(mapboxgl as any).accessToken = 'pk.eyJ1IjoiZHozMTY0MjQiLCJhIjoiNzI3NmNkOTcyNWFlNGQxNzU2OTA1N2EzN2FkNWIwMTcifQ.NS8KWg47FzfLPlKY0JMNiQ';
        //let map = new Map({
        //    container: 'map',
        //    style: 'mapbox://styles/mapbox/light-v9',
        //    zoom: 5,
        //    center: [-78.880453, 42.897852]
        //});
        //mapbox.show({
        //    accessToken: 'pk.eyJ1IjoiYmVuc2hleiIsImEiOiJjajFmZ2ludHMwMGx0MzJ0NDJzbW14MWc5In0.3W8kUIEbiliNAEl85DqD-A', // see 'Prerequisites' above 
        //    style: mapbox.MapStyle.DARK, // see the mapbox.MapStyle enum for other options, default mapbox.MapStyle.STREETS 
        //    margins: {
        //        left: 40, // default 0 
        //        right: 40, // default 0 
        //        top: 450, // default 0 
        //        //bottom: isIOS ? 50 : 0 // default 0, this shows how to override the style for iOS 
        //    },
        //    center: { // optional without a default 
        //        lat: 52.3702160,
        //        lng: 4.8951680
        //    },
        //    zoomLevel: 9.25, // 0-20, default 0 
        //    showUserLocation: true, // default false - requires location permissions on Android which you can remove from AndroidManifest.xml if you don't need them 
        //    hideAttribution: false, // default true, Mapbox requires `false` if you're on a free plan 
        //    hideLogo: false, // default false, Mapbox requires this default if you're on a free plan 
        //    hideCompass: false, // default false 
        //    disableRotation: false, // default false 
        //    disableScroll: false, // default false 
        //    disableZoom: false
        //});
    }
}
