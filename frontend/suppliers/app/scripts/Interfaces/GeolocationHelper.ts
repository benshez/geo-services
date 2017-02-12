
export interface IGeolocationHelperFilters {
    UNITS: string;
    MAX_ACCURACY: any;
    MAX_MEDIAN_ACCURACY: any;
    MAX_STDDEVIATION_ACCURACY: any;
    MAX_STDDEVIATION_LAT: any;
    MAX_STDDEVIATION_LON: any;
    MAX_ARRAY_SIZE: number;
}

export interface IGeolocationHelperArrays {
    accuracyArray: Array<any>;
    timeStampArray: Array<any>;
    speedArray: Array<any>;
    latArray: Array<any>;
    lonArray: Array<any>;
    latLonArray: Array<any>;
    distanceArray: Array<any>;
}