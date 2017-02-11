var GeolocationHelper = function (filters) {
    this.UNITS;
    this.MAX_ACCURACY;
    this.MAX_MEDIAN_ACCURACY;
    this.MAX_STDDEVIATION_ACCURACY;
    this.MAX_STDDEVIATION_LAT;
    this.MAX_STDDEVIATION_LON;
    this.MAX_ARRAY_SIZE;
    if (!filters) {
        filters = {};
    }
    "UNITS" in filters ? this.UNITS = filters.UNITS : this.UNITS = "M";
    "MAX_ACCURACY" in filters ? this.MAX_ACCURACY = filters.MAX_ACCURACY : this.MAX_ACCURACY = 100;
    "MAX_MEDIAN_ACCURACY" in filters ? this.MAX_MEDIAN_ACCURACY = filters.MAX_MEDIAN_ACCURACY : this.MAX_MEDIAN_ACCURACY = 20;
    "MAX_STDDEVIATION_ACCURACY" in filters ? this.MAX_STDDEVIATION_ACCURACY = filters.MAX_STDDEVIATION_ACCURACY : this.MAX_STDDEVIATION_ACCURACY = 2.5;
    "MAX_STDDEVIATION_LAT" in filters ? this.MAX_STDDEVIATION_LAT = filters.MAX_STDDEVIATION_LAT : this.MAX_STDDEVIATION_LAT = 0.0001;
    "MAX_STDDEVIATION_LON" in filters ? this.MAX_STDDEVIATION_LON = filters.MAX_STDDEVIATION_LON : this.MAX_STDDEVIATION_LON = 0.0001;
    "MAX_ARRAY_SIZE" in filters ? this.MAX_ARRAY_SIZE = filters.MAX_ARRAY_SIZE : this.MAX_ARRAY_SIZE = 25;
    var stddev_accuracy = 0, stddev_lat = 0, stddev_lon = 0, stddev_distance = 0;
    var med_accuracy = 0, med_lat = 0, med_lon = 0, avg_accuracy = 0, avg_distance = 0;
    var med_distance = 0, med_speed = 0, med_timediff = 0;
    var accuracyArray = [];
    var timeStampArray = [];
    var speedArray = [];
    var latArray = [];
    var lonArray = [];
    var latLonArray = [];
    var distanceArray = []; // an array of distances between each successive lat and lon
    if (!window.localStorage) {
        console.error("WARNING: GeolocationHelper.js requires local storage.");
    }
};
