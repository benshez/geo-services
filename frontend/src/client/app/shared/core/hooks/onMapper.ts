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
    abstract onSetCentre(options: IMapSetup): void;
    abstract onSetModelSource(keyword: any): Observable<IMapFeatures[]>;
    abstract onPlacesChanged(event: any): void;
    abstract onCreateMarker(): IMarker;
    abstract onAddMarkers(marker: IMarker): void;
    abstract onRemoveMarker(markers: any[]): void;
    abstract onCreateMarkerPopup(options: IPopup): any;
    abstract onAssign(obj: any, prop: any, value: any): void;
}
