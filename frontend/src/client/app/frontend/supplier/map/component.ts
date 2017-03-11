import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Config, IMarker, IFreeGeoIPLocation, ICoordinates, ApiServiceParametersOptions, ApiService } from '../../../shared/index';

@Component({
    moduleId: module.id,
    selector: 'sd-app-supplier-map',
    styleUrls: ['styles.css'],
    templateUrl: 'tmpl.html'
})

export class SupplierMapComponent implements OnInit, AfterViewInit {
    lat: number = 51;
    lng: number = 10;
    zoom: number = 15;

    private errorMessage: string;
    private points: IMarker[] = [];
    private currentLocation: any;

    constructor(private apiService: ApiService, private apiOptions: ApiServiceParametersOptions) { }

    ngOnInit() {

        //Observable
        //    .interval(500)
        //    this.http.get('assets/points.json').subscribe(data => {
        //        this.points = data.json();
        //});

    }

    ngAfterViewInit() {
        this.setCurrentLocation();
    }

    private setCurrentLocation() {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        navigator.geolocation.getCurrentPosition((position) => {
            this.onSuccess(position);
        }, (error) => {
            this.onError(error, this)
        }, options);
    }

    private onSuccess(pos: Position) {
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;
        this.setMarkers();
    }

    private onError(error, context) {
        context.apiOptions.url = Config.GEO_API;
        context.apiOptions.parameters = {};
        context.apiOptions.concatApi = false;

        context.apiService.get(context.apiOptions)
            .subscribe(
            (json: any) => context.currentLocation = <IFreeGeoIPLocation>json,
            (error: any) => context.errorMessage = <any>error,
            () => {
                context.lat = context.currentLocation.latitude;
                context.lng = context.currentLocation.longitude;
                context.setMarkers();
            });
    }

    private setMarkers() {
        Observable
            .interval(500)
  
        this.apiOptions.url = 'supplier/location';
        this.apiOptions.parameters = {};
        this.apiOptions.concatApi = true;

        this.apiService.get(this.apiOptions)
            .subscribe(
            (json: any) => this.points = <any>json,
            (error: any) => this.errorMessage = <any>error,
            () => { });
    }

    clickedMarker(label: string, index: number) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i].isOpen = (i === index)
        }
    }

    mapClicked($event: MouseEvent) {
        //this.markers.push({
        //    lat: $event.coords.lat,
        //    lng: $event.coords.lng
        //});
    }

    markerDragEnd(m: IMarker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }
}
