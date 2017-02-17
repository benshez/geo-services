import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IMarker, IApiServiceParametersOptions, IFreeGeoIPLocation } from '../../../shared/models/index';
import { ApiService } from '../../../shared/services/api/index';
import { DomService } from '../../../shared/services/dom/index';
import { Observable } from 'rxjs/Observable';
import { MapsAPILoader, GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { GoogleMap, Marker } from 'angular2-google-maps/core/services/google-maps-types';

declare var google: any;

@Component({
    moduleId: module.id,
    selector: 'sd-app-map',
    styles: [`
    .sebm-google-map-container {
        height: 300px;
     }
  `],
    template: `
    <sebm-google-map 
      [latitude]="latitude"
      [longitude]="longitude"
      [zoom]="zoom"
      [disableDefaultUI]="false"
      [zoomControl]="false"
      (mapClick)="mapClicked($event)">
    
      <sebm-google-map-marker 
          *ngFor="let m of markers; let i = index"
          (markerClick)="clickedMarker(m.company, i)"
          [latitude]="m.latitude"
          [longitude]="m.longitude"
          [label]="m.company"
          [markerDraggable]="m.draggable"
          (dragEnd)="markerDragEnd(m, $event)">
          
        <sebm-google-map-info-window>
          <strong>InfoWindow content</strong>
        </sebm-google-map-info-window>
        
      </sebm-google-map-marker>
      
      <sebm-google-map-circle [latitude]="latitude + 0.3" [longitude]="longitude" 
          [radius]="5000"
          [fillColor]="'red'"
          [circleDraggable]="true"
          [editable]="true">
      </sebm-google-map-circle>

    </sebm-google-map>
`
})

export class MapComponent implements OnInit {

    private errorMessage: string;
    public latitude: number;
    public longitude: number;
    public markers: IMarker[] = [];
    public zoom: number;
    private currentLocation: any;

    constructor(private apiService: ApiService, private apiOptions: IApiServiceParametersOptions,
        private mapsApiLoader: MapsAPILoader, private mapsApiWrapper: GoogleMapsAPIWrapper,
        private domService: DomService) { }

    ngOnInit() {
        this.zoom = 18;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        this.initCurrentLocation();
    }

    private initCurrentLocation() {
        this.apiOptions.url = 'http://freegeoip.net/json/';
        this.apiOptions.parameters = {};
        this.apiService.get(this.apiOptions)
            .subscribe(
            (json: any) => this.currentLocation = <IFreeGeoIPLocation>json,
            (error: any) => this.errorMessage = <any>error,
            () => {
                this.latitude = this.currentLocation.latitude;
                this.longitude = this.currentLocation.longitude;
                this.zoom = 11;
                this.initMarkers();
            });
    }

    private initMarkers() {
        this.apiOptions.url = 'data/markers.json';
        this.apiOptions.concatApi = true;
        this.apiOptions.parameters = {};
        this.apiService.get(this.apiOptions)
            .subscribe(
            (json: any) => this.markers.push(<any>json),
            (error: any) => this.errorMessage = <any>error,
            () => {
                this.gmapsApi.getNativeMap().then(map => {

                    let markerIcon = {
                        url: "assets/marker.png", // url
                        scaledSize: new google.maps.Size(35, 35)
                    }


                    let style = {
                        url: "assets/cluster.png",
                        height: 40,
                        width: 40,
                        textColor: '#FFF',
                        textSize: 11,
                        backgroundPosition: "center center"
                    };

                    let options = {
                        imagePath: "/assets/cluster",
                        gridSize: 70,
                        styles: [style, style, style]
                    };

                    let markers = [];


                    Observable
                        .interval(500)
                        .skipWhile((s) => this.points == null || this.points.length <= 0)
                        .take(1)
                        .subscribe(() => {
                            for (let point of this.points) {
                                let marker = new google.maps.Marker({
                                    position: new google.maps.LatLng(point.Latitude, point.Longitude),
                                    icon: markerIcon
                                });
                                markers.push(marker);
                            }

                            var markerCluster = new MarkerClusterer(map, markers, options);

                        })
                });
                });
    }
}
