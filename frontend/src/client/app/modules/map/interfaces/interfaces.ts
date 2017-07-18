import { ApiServiceParametersOptions } from '../../core/index';
import { Observable } from 'rxjs/Observable';

export interface ILocationArguments {
    keyword: Observable<string>;
    key: any;
    value: any;
    delay: number;
    minQueryLength: number;
    cacheKey: string;
    apiOptions: ApiServiceParametersOptions;
    DeepObjectName: string;
}

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

export interface IMapFeatures {
    center: IMapCoordinates;
    place_name: string;
    id: string;
}

interface IMapValue {
    features: IMapFeatures;
}

export interface IMapQuery {
    attribution: string;
    features: Array<IMapFeatures>;
    query: Array<string>;
    type: string;
}

export interface IMapOptions {
    container: string;
    style: string;
    center: [number, number];
    zoom: number;
    hash: boolean;
    interactive: boolean;
}

export interface IMapSetup {
    accessToken: string;
    map: any;
    options: IMapOptions;
}

export interface IPopup {
    offset: number;
    text: string;
}

export interface IMarker {
    id: string;
    offset: [number, number];
    latLang: [number, number];
    popup: IPopup;
}
