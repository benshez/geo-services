"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        // google maps zoom level
        this.zoom = 8;
        // initial center position for the map
        this.lat = 51.673858;
        this.lng = 7.815982;
        this.markers = [
            {
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
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    AppComponent.prototype.mapClicked = function ($event) {
        //this.markers.push({
        //    lat: $event.coords.lat,
        //    lng: $event.coords.lng
        //});
    };
    AppComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            styles: ["\n    .sebm-google-map-container {\n       height: 300px;\n     }\n  "],
            templateUrl: 'tmpl.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
