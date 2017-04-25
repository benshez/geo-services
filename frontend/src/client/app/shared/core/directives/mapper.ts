import {
    Directive,
    NgZone,
    ElementRef
} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import {
    Config,
    IListener,
    IMapQuery,
    IMapFeatures
} from '../index';

import { Locker } from '../services/locker/index';

import { ApiService } from '../services/api/api.service';

import { ApiServiceParametersOptions } from '../models/Api';

@Directive({
    selector: '[mapper]'
})

export class Mapper {
    public model: IMapQuery;
    private errorMessage: string;

    constructor(
        private apiService: ApiService,
        private ngZone: NgZone,
        private apiOptions: ApiServiceParametersOptions,
        private locker: Locker) { }

    onListenToKeys(listener: IListener) {
        return this.ngZone.runOutsideAngular(() => {
            Observable.fromEvent<KeyboardEvent>(listener.element, 'keyup')
                .debounceTime(1000)
                .distinctUntilChanged()
                .subscribe(keyboardEvent => {
                    this.onSuggest(listener.value);
                });
        });
    }

    //onListen = (listener: IListener): Observable<IMapQuery[]> =>  {
    //    return this.ngZone.runOutsideAngular(() => {
    //        this.onSuggest(listener.value).
    //    });
    //}

    onSuggest(query: string) {

        this.apiOptions.cacheKey = '';
        this.apiOptions.url = Config.ENVIRONMENT().MAP_BOX_API + query + '.json?access_token=' + Config.ENVIRONMENT().MAP_BOX_API_KEY;
        this.apiOptions.parameters = '';
        this.apiOptions.concatApi = false;

        return this.apiService.get(this.apiOptions)
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(
            (json: any) => { this.model = json; debugger },
            (error: any) => this.errorMessage = <any>error,
            () => { });
    }

    onQuery = (query: string): Observable<IMapQuery[]> => {

        if (query && query.length > 3) {
            this.apiOptions = new ApiServiceParametersOptions();
            this.apiOptions.cacheKey = 'mapper_' + query;
            this.apiOptions.url = Config.ENVIRONMENT().MAP_BOX_API + query + '.json?access_token=' + Config.ENVIRONMENT().MAP_BOX_API_KEY;
            this.apiOptions.parameters = '';
            this.apiOptions.concatApi = false;

            if (this.locker.has(this.apiOptions.cacheKey)) {
                //return (Observable.of(this.locker.get(this.apiOptions.cacheKey))) as any;
            };

            return this.apiService.mapper(this.apiOptions)
                .map((res) => {
                    let x: any = res.json();
                    let ret: IMapQuery[] = <IMapQuery[]>res.json();
                    let features: IMapFeatures[] = <IMapFeatures[]>x.features;
                    debugger
                    if (this.apiOptions.cacheKey !== '') this.locker.set(this.apiOptions.cacheKey, ret.features);
                    return ret.features;
                });
        } else {
            return Observable.of([]);
        }

    }
}