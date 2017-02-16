import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { IMarker } from '../../../shared/models/index';

@Component({
    moduleId: module.id,
    selector: 'sd-app-map',
    styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `],
    templateUrl: 'tmpl.html'
})

export class MapComponent implements OnInit {

    // google maps zoom level
    zoom: number = 8;

    // initial center position for the map
    lat: number = 51.673858;
    lng: number = 7.815982;

    markers: IMarker[] = [];

    ngOnInit() {
        this.markers.push({
            lat: 51.673858,
            lng: 7.815982,
            label: 'A',
            draggable: true
        },
            {
                lat: 51.373858,
                lng: 7.215982,
                label: 'B',
                draggable: false
            },
            {
                lat: 51.723858,
                lng: 7.895982,
                label: 'C',
                draggable: true
            });
    }

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
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
