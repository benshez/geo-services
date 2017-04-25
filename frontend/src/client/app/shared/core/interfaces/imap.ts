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
    center: Array<ICoordinates>;
    place_name: string;
    id: string;
}

interface IMapValue {
    features: IMapFeatures;
}

export interface IMapQuery {
    attribution: string;
    features: IMapFeatures;
    query: Array<string>;
    type: string;
}
