import { IGeolocationHelperFilters, IGeolocationHelperArrays } from '../Interfaces/index';
import { GeolocationHelperHandlers } from '../Handlers/index';
import { LogService, Locker, LockerConfig } from '../../../../shared/Services/index';

class GeolocationHelper implements GeolocationHelperHandlers {


    stddev_accuracy: any = 0;
    stddev_lat: any = 0;
    stddev_lon: any = 0;
    stddev_distance: any = 0;
    med_accuracy: any = 0; med_lat: any = 0;
    med_lon: any = 0;
    avg_accuracy: any = 0;
    avg_distance: any = 0;
    med_distance: any = 0;
    med_speed: any = 0;
    med_timediff: any = 0;

    helperFilter: IGeolocationHelperFilters;
    helperArray: IGeolocationHelperArrays;
    lockerConfig: LockerConfig;

    constructor(private filters: any, private locker?: Locker, private logger?: LogService) {
        filters = filters || {};

        locker = locker || new Locker(this.lockerConfig);

        logger = logger || new LogService();

        this.setInterfaceValues(filters);

        if (!locker) this.logger.error('GeolocationHelper.js requires local storage.');
    }

    setInterfaceValues(filters: any) {
        "UNITS" in filters ? this.helperFilter.UNITS = filters.UNITS : this.helperFilter.UNITS = "M";
        "MAX_ACCURACY" in filters ? this.helperFilter.MAX_ACCURACY = filters.MAX_ACCURACY : this.helperFilter.MAX_ACCURACY = 100;
        "MAX_MEDIAN_ACCURACY" in filters ? this.helperFilter.MAX_MEDIAN_ACCURACY = filters.MAX_MEDIAN_ACCURACY : this.helperFilter.MAX_MEDIAN_ACCURACY = 20;
        "MAX_STDDEVIATION_ACCURACY" in filters ? this.helperFilter.MAX_STDDEVIATION_ACCURACY = filters.MAX_STDDEVIATION_ACCURACY : this.helperFilter.MAX_STDDEVIATION_ACCURACY = 2.5;
        "MAX_STDDEVIATION_LAT" in filters ? this.helperFilter.MAX_STDDEVIATION_LAT = filters.MAX_STDDEVIATION_LAT : this.helperFilter.MAX_STDDEVIATION_LAT = 0.0001;
        "MAX_STDDEVIATION_LON" in filters ? this.helperFilter.MAX_STDDEVIATION_LON = filters.MAX_STDDEVIATION_LON : this.helperFilter.MAX_STDDEVIATION_LON = 0.0001;
        "MAX_ARRAY_SIZE" in filters ? this.helperFilter.MAX_ARRAY_SIZE = filters.MAX_ARRAY_SIZE : this.helperFilter.MAX_ARRAY_SIZE = 25;
    }

    reset() {
        this.helperArray.timeStampArray = [];
        this.helperArray.speedArray = [];
        this.helperArray.accuracyArray = [];
        this.helperArray.distanceArray = [];
        this.helperArray.latArray = [];
        this.helperArray.lonArray = [];
        this.helperArray.latLonArray = [];
    }

    process(accuracy: any, lat: any, lon: any, timestamp: any, callback: any) {
        this.helperArray.accuracyArray.push(accuracy);

        this.avg_accuracy = this.average(this.helperArray.accuracyArray);
        this.med_accuracy = this.median(this.helperArray.accuracyArray);
        this.stddev_accuracy = this.standardDeviation(this.helperArray.accuracyArray);

        this.helperArray.latArray.push(lat);
        this.helperArray.lonArray.push(lon);
        this.helperArray.latLonArray.push({
            latitude: lat,
            longitude: lon
        });

        this.helperArray.timeStampArray.push(timestamp);

        if (this.helperArray.latArray.length > 1) {
            let previous_lat = this.helperArray.latArray[this.helperArray.latArray.length - 1];
            let previous_lon = this.helperArray.lonArray[this.helperArray.lonArray.length - 1];

            let units = this.helperFilter.UNITS;
            let distance = this.distance(previous_lat, previous_lon, lat, lon, units);
            this.helperArray.distanceArray.push(distance);
            let timeDiff = timestamp - this.helperArray.timeStampArray[this.helperArray.timeStampArray.length - 1] / 1000;
            let timeDiffInHours = Math.floor((timeDiff %= 86400) / 3600);
            let speed = distance / timeDiffInHours;
            this.helperArray.speedArray.push(speed);
        };

        this.manageArraySize();

        this.med_lat = this.median(this.helperArray.latArray);
        this.med_lon = this.median(this.helperArray.lonArray);
        this.med_speed = this.median(this.helperArray.speedArray);
        this.med_distance = this.median(this.helperArray.distanceArray);
        this.avg_distance = this.average(this.helperArray.distanceArray);
        this.med_timediff = this.medianTime(this.helperArray.timeStampArray);
        this.stddev_lat = this.standardDeviation(this.helperArray.latArray);
        this.stddev_lon = this.standardDeviation(this.helperArray.lonArray);
        this.stddev_distance = this.standardDeviation(this.helperArray.distanceArray);

        this.filter(accuracy, callback);
    }

    filter(accuracy: any, callback: any) {

        let reject = false;
        let locationObject: any = {};

        if (accuracy > this.helperFilter.MAX_ACCURACY) reject = true;

        if (this.med_accuracy > this.helperFilter.MAX_MEDIAN_ACCURACY) reject = true;

        if (this.stddev_accuracy > this.helperFilter.MAX_STDDEVIATION_ACCURACY) reject = true;

        if (this.stddev_lat > this.helperFilter.MAX_STDDEVIATION_LAT) reject = true;

        if (this.stddev_lon > this.helperFilter.MAX_STDDEVIATION_LON) reject = true;

        locationObject.reject = reject;
        locationObject.count = this.helperArray.latArray.length;
        locationObject.avg_accuracy = this.avg_accuracy;
        locationObject.avg_distance = this.avg_distance;
        locationObject.med_lat = this.med_lat;                  // Median latitude
        locationObject.med_lon = this.med_lon;                  // Median longitude
        locationObject.med_accuracy = this.med_accuracy;        // Median accuracy
        locationObject.med_speed = this.med_speed;              // Median speed
        locationObject.med_distance = this.med_distance;        // Median distance between values in the array
        locationObject.med_time_diff = this.med_timediff;       // Median difference in time between geolocation results
        locationObject.stddev_lat = this.stddev_lat;            // Standard deviation latitude
        locationObject.stddev_lon = this.stddev_lon;            // Standard deviation longitude
        locationObject.stddev_accuracy = this.stddev_accuracy;  // Standard deviation accuracy
        locationObject.stddev_distance = this.stddev_distance;  // Standard deviation distance between values in the array
        locationObject.center_point = this.getCenter(this.helperArray.latLonArray);

        this.locker.set('geolocationObject', JSON.stringify(locationObject));

        callback(locationObject);
    }

    getLocationInfo() {
        return this.locker.get('geolocationObject');
    }

    manageArraySize() {
        if (this.helperArray.accuracyArray.length > this.helperFilter.MAX_ARRAY_SIZE) this.helperArray.accuracyArray.shift();
        if (this.helperArray.distanceArray.length > this.helperFilter.MAX_ARRAY_SIZE) this.helperArray.distanceArray.shift();
        if (this.helperArray.latLonArray.length > this.helperFilter.MAX_ARRAY_SIZE) this.helperArray.latLonArray.shift();
        if (this.helperArray.latArray.length > this.helperFilter.MAX_ARRAY_SIZE) this.helperArray.latArray.shift();
        if (this.helperArray.lonArray.length > this.helperFilter.MAX_ARRAY_SIZE) this.helperArray.lonArray.shift();
    }

    distance(lat1: any, lon1: any, lat2: any, lon2: any, unit: string) {
        let radlat1 = Math.PI * lat1 / 180;
        let radlat2 = Math.PI * lat2 / 180;
        let theta = lon1 - lon2;
        let radtheta = Math.PI * theta / 180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344 * 1000;
        return dist;
    }

    standardDeviation(values: any) {
        let avg = this.average(values);

        let squareDiffs = values.map(function (value) {
            let diff = value - avg;
            let sqrDiff = diff * diff;
            return sqrDiff;
        })

        let avgSquareDiff = this.average(squareDiffs);

        let stdDev = Math.sqrt(avgSquareDiff);
        return stdDev;
    }

    average(data: any) {
        let sum = data.reduce(function (sum, value) {
            return sum + value;
        }, 0)

        let avg = sum / data.length;
        return isNaN(avg) ? 0 : avg;
    }

    median(array: Array<any>) {

        if (array.length == 1) return array[0];

        array.sort(function (a, b) { return a - b; });

        let half = Math.floor(array.length / 2);

        if (array.length % 2) {
            return array[half];
        }
        else {
            return (array[half - 1] + array[half]) / 2.0;
        }
    }

    medianTime(array: Array<any>) {

        if (array.length == 1) return 0;

        let diff = array.map(function (currentVal, index) {
            if (index > 0) {
                return currentVal - array[index - 1];
            }
        })

        return this.median(diff);

    }

    getLargestDistance(array: Array<any>) {
        return array.sort()[array.length];
    }

    getLatLonArray() {
        return this.helperArray.latLonArray;
    }

    getCenter(coordsArray: Array<any>) {

        let x = 0, y = 0, z = 0;
        let radius = 6367; // earth's radius in km

        coordsArray.forEach(function (value) {

            // Convert latitude and longitude to radians
            let latRad = Math.PI * value.latitude / 180;
            let lonRad = Math.PI * value.longitude / 180;

            // Convert to cartesian coords
            x += radius * Math.cos(latRad) * Math.cos(lonRad);
            y += radius * Math.cos(latRad) * Math.sin(lonRad);
            z += radius * Math.sin(latRad);
        });

        // Get our averages
        let xAvg = x / this.helperArray.latLonArray.length;
        let yAvg = y / this.helperArray.latLonArray.length;
        let zAvg = z / this.helperArray.latLonArray.length;

        // Convert cartesian back to radians
        let sphericalLatRads = Math.asin(zAvg / radius);
        let sphericalLonRads = Math.atan2(yAvg, xAvg);

        // Convert radians back to degrees
        return {
            latitude: sphericalLatRads * (180 / Math.PI),
            longitude: sphericalLonRads * (180 / Math.PI)
        }
    }
}
