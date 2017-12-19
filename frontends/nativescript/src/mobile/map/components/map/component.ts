// libs
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { isAndroid, isIOS } from 'platform';

// app
import { ApiServiceParametersOptions } from '../../../../app/modules/core/services/api/models';
import { Config } from '../../../../app/modules/core/index';
import { ICoordinates, IMapQuery, IMapFeatures, IMapSetup, IMapOptions, IMarker, IPopup } from '../../../../app/modules/map/interfaces/interfaces';
import { Mapbox, MapStyle } from 'nativescript-mapbox';

class MapFeature {
    constructor(public id: string, public place_name: string, public center: [number, number]) { }
}

@Component({
    moduleId: module.id,
    selector: 'sd-map',
    templateUrl: Config.COMPONENT_ITEMS.TEMPLATE,
    styleUrls: [Config.COMPONENT_ITEMS.CSS],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [Mapbox]
})
export class NSMapComponent implements OnInit {
    public loading: boolean = false;
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
        private apiOptions: ApiServiceParametersOptions,
        private route: ActivatedRoute,
        private router: Router,
        private map: Mapbox) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams[Config.ROUTE_PARAMETERS.LOGIN_RETURN_URL] || '/';
        this.options.options.center = [Config.ROUTE_PARAMETERS.LONGITUDE, Config.ROUTE_PARAMETERS.LATITUDE];
        this.onShow(this.options);
    }

    onShow(options: IMapSetup) {
        let self = this;

        this.map.show({
            accessToken: options.accessToken, // see 'Prerequisites' above 
            style: MapStyle.DARK, // see the mapbox.MapStyle enum for other options, default mapbox.MapStyle.STREETS 
            margins: {
                left: 10,
                right: 10,
                top: 65,
                bottom: 0
            },
            center: { // optional without a default 
                lat: self.options.options.center[1],
                lng: self.options.options.center[0]
            },
            zoomLevel: 13, // 0-20, default 0 
            showUserLocation: true, // default false - requires location permissions on Android which you can remove from AndroidManifest.xml if you don't need them 
            hideAttribution: false, // default true, Mapbox requires `false` if you're on a free plan 
            hideLogo: false, // default false, Mapbox requires this default if you're on a free plan 
            hideCompass: true, // default false 
            disableRotation: false, // default false 
            disableScroll: true, // default false 
            disableZoom: true,
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

        this.map.setCenter({
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
        this.map.removeMarkers();
    }

    onAddMarkers(marker: IMarker) {
        this.map.addMarkers([
            {
                id: marker.id, // can be user in 'removeMarkers()'
                lat: marker.latLang[1], // mandatory
                lng: marker.latLang[0], // mandatory
                title: marker.popup.text, // no popup unless set
                subtitle: 'Infamous subtitle!',
                icon: 'res://marker25_29', // preferred way, otherwise use:
                //icon: 'https://farm9.staticflickr.com/8571/15844010757_63b093d527_n.jpg', // from the internet (see the note at the bottom of this readme), or:
                iconPath: 'res://marker25_29',
                onTap: this.onTap,
                onCalloutTap: this.onCalloutTap
            }
        ])
        this.loading = !this.loading;
    }

    onTap(marker) {
        console.log("Marker tapped with title: '" + marker.title + "'");
    }

    onCalloutTap(marker) {
        console.log("Marker callout tapped with title: '" + marker.title + "'");
    }
}
