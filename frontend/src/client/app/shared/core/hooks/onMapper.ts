import { Observable } from 'rxjs/Observable';

import {
    ICoordinates,
    IMapSetup,
    IMapOptions,
    IMapFeatures,
    IMarker,
    IPopup
} from '../interfaces/index';

export declare abstract class OnMapper {
    abstract onSetLocation(options: IMapSetup): void;
    abstract onMapComponentInit(options: IMapSetup): void;
    abstract onCreateMap(options: IMapSetup): void;
    abstract onSetPosition(options: IMapSetup): void;
    abstract onSetModelSource(keyword: any): Observable<IMapFeatures[]>;
    abstract onPlacesChanged(event: any): void;
    abstract onAddMarker(options: IMarker): void;
    abstract onCreateMarkerPopup(options: IPopup): any;
    abstract onAssign(obj: any, prop: any, value: any): void;
}
