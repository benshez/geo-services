export interface ICoordinates {
    longitude: number;
    latitude: number;
}

export interface IMapMarkers {
    image: string;
    coordinates: ICoordinates;
    popup: any;
    data: any;
}

interface IMapCoordinates {
    0: number;
    1: number;
}

interface IMapFeatures {
    center: IMapCoordinates;
    place_name: string;
}

interface IMapValue {
    features: IMapFeatures;
}

export interface IMapQuery {
    value: IMapValue;
}
