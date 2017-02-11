"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Config_1 = require("../Config");
var Controller_1 = require("../lib/Controller");
var Template_1 = require("../lib/Template");
var SnazzyMaps_1 = require("../models/map/SnazzyMaps");
var Google_1 = require("../shims/Google");
var MarkerClusterer_1 = require("../shims/MarkerClusterer");
var InfoBox_1 = require("../shims/InfoBox");
var MapController = (function (_super) {
    __extends(MapController, _super);
    /**
     * Creates an instance of MapController.
     *
     * @param {HTMLElement} element Selected Element from MapController.canvas
     */
    function MapController(element) {
        var _this = _super.call(this, element) || this;
        /**
         * Google Maps Markers Array.
         */
        _this.markers = new Array();
        _this.initMap();
        return _this;
    }
    /**
     * Initialize the current map with default values.
     */
    MapController.prototype.initMap = function () {
        // init Google Maps itself
        this.map = new Google_1.google.maps.Map(this.$(MapController.canvas)[0], {
            center: MapController.center,
            scrollwheel: false,
            styles: MapController.style,
            zoom: 10
        });
        // set to current Location according to IP
        this.initCurrentLocation();
        // initialize markers
        this.initMarkers();
    };
    /**
     * Get Current Markers from Json
     *
     * Test Data generated via: http://beta.json-generator.com/Ey5gAmsMW
     *
     */
    MapController.prototype.initMarkers = function () {
        var _this = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var markerData = JSON.parse(xhttp.responseText);
                _this.setMarkersOnMap(markerData);
            }
        };
        xhttp.open('GET', Config_1.config.project.paths.markers, true);
        xhttp.send();
    };
    /**
     * Transforms the current MarkerData to google maps markers
     * and saves them in the markes array.
     */
    MapController.prototype.setMarkersOnMap = function (markerData) {
        var _this = this;
        var icon = {
            url: '/images/icon.png?v=' + Config_1.config.project.version,
            // This marker is 45 pixels wide by 40 pixels high.
            size: new Google_1.google.maps.Size(45, 40),
            scaledSize: new Google_1.google.maps.Size(45, 40),
            // The origin for this image is (0, 0).
            origin: new Google_1.google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 0).
            anchor: new Google_1.google.maps.Point(0, 0)
        };
        var _loop_1 = function (i, max) {
            var currentMarkerData = markerData[i];
            var markerObject = {
                position: new Google_1.google.maps.LatLng(currentMarkerData.latitude, currentMarkerData.longitude),
                icon: icon,
                map: this_1.map,
                markerData: markerData
            };
            if (InfoBox_1.infoBox) {
                markerObject['infobox'] = this_1.getInfoBox(currentMarkerData);
            }
            var marker = new Google_1.google.maps.Marker(markerObject);
            if (InfoBox_1.infoBox) {
                // add on click handler to the marker itself
                // so it will open our infobox.
                marker.addListener('click', function () {
                    if (_this.openInfoBox) {
                        _this.openInfoBox.close();
                        if (_this.openInfoBox === marker.infobox) {
                            _this.openInfoBox = null;
                            return;
                        }
                    }
                    marker.infobox.open(_this.map, marker);
                    _this.openInfoBox = marker.infobox;
                });
            }
            // add to controllers markers array.
            this_1.markers.push(marker);
        };
        var this_1 = this;
        // iterate over marker data and create a marker
        // also we will append the current marker data to the
        // google marker itself - maybe we will need it later
        for (var i = 0, max = markerData.length; i < max; i++) {
            _loop_1(i, max);
        }
        // initialize MarkerClusterer        
        this.initMarkerClusterer();
        // Resize Event will be triggered once after markers are set.
        Google_1.google.maps.event.trigger(this.map, 'resize');
    };
    /**
     * Get Current Location using freegeoip.net because
     * it's fast and quite accurate
     */
    MapController.prototype.initCurrentLocation = function () {
        var _this = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                _this.currentLocation = JSON.parse(xhttp.responseText);
                _this.map.setCenter(new Google_1.google.maps.LatLng(_this.currentLocation.latitude, _this.currentLocation.longitude));
            }
        };
        xhttp.open('GET', '//freegeoip.net/json/', true);
        xhttp.send();
    };
    /**
     * Generates an InfoBox Element using the InfoBox.JS Library
     * replacing the placeholder from the <script> tag and retrieves it.
     *
     * @param {IMarkerData} markerData current markerData
     * @returns Instance of an InfoBox
     */
    MapController.prototype.getInfoBox = function (markerData) {
        var infoBoxTemplate = this.$(MapController.infoboxTemplate)[0].innerHTML.trim();
        var infoBoxTemplateData = {
            company: markerData.company,
            picture: markerData.picture
        };
        var currentInfoBox = new InfoBox_1.infoBox({
            content: Template_1.template(infoBoxTemplate, infoBoxTemplateData),
            disableAutoPan: false,
            maxWidth: 'auto',
            pixelOffset: new Google_1.google.maps.Size(-102, 40),
            infoBoxClearance: new Google_1.google.maps.Size(1, 1),
            closeBoxURL: '' // removes close button
        });
        return currentInfoBox;
    };
    /**
     * Initialize MarkerClusterer with current Map & Markers
     *
     *
     * @memberOf MapController
     */
    MapController.prototype.initMarkerClusterer = function () {
        if (MarkerClusterer_1.MarkerClusterer) {
            this.markerClusterer = new MarkerClusterer_1.MarkerClusterer(this.map, this.markers, { imagePath: 'https://googlemaps.github.io/js-marker-clusterer/images/m' });
        }
    };
    return MapController;
}(Controller_1.Controller));
/**
 * Snazzy Maps styles included from the
 * SnazzyMaps Map
 *
 * @static
 * @type {*}
 */
MapController.style = SnazzyMaps_1.snazzyMapsStyle;
/**
 * Google Maps API Key from the
 * your google account.
 *
 * @static
 * @type {string} APIKey
 */
MapController.googleMapsApiKey = Config_1.config.google.map.apiKey;
/**
 * Selector for the Controller which contains the
 * google maps canvas
 *
 * @static
 * @type {string} selector
 */
MapController.selector = '[data-google-map-component]';
/**
 * Selector for the Google Map Canvas Container
 *
 * @static
 * @type {string} Canvas Selector
 */
MapController.canvas = '[data-google-map-canvas]';
/**
 * Selector for your infobox Template
 *
 * @static
 * @type {string} Infobox Template Selector
 */
MapController.infoboxTemplate = '[data-google-map-infobox-template]';
/**
 * Default Location for initialization if no
 * current Location was found.
 *
 * @static
 * @type {Object} center
 */
MapController.center = { lat: 153.1010943, lng: -26.7689357 };
exports.MapController = MapController;
