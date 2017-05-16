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
    IMapFeatures,
    IIndustries
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

    onListenToTextChanges(listener: IListener) {
        return this.ngZone.runOutsideAngular(() => {
            Observable.fromEvent(listener.element, 'text')
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

    onSuggest = (query: string): Observable<IMapFeatures[]> => {

        this.apiOptions.cacheKey = '';
        this.apiOptions.url = Config.ENVIRONMENT().MAP_BOX_API + query + '.json?access_token=' + Config.ENVIRONMENT().MAP_BOX_API_KEY;
        this.apiOptions.parameters = '';
        this.apiOptions.concatApi = false;

        return this.apiService.get(this.apiOptions)
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(
            (json: any) => {
                //let x: any = json;
                //let features: IMapFeatures[] = <IMapFeatures[]>x.features;
                //this.model = features;
                return <IMapFeatures[]>json.features;
            },
            (error: any) => this.errorMessage = <any>error,
            () => { }) as any;
    }

    searchMapFeatures(terms: Observable<string>, debounceDuration = 400) {
        return terms.debounceTime(debounceDuration)
            .distinctUntilChanged()
            .switchMap(term => this.onMapFeaturesQuery(term));
    }

    onMapFeaturesQuery = (query: string): Observable<IMapFeatures[]> => {

        if (query && query.length > 3) {
            this.apiOptions = new ApiServiceParametersOptions();
            this.apiOptions.cacheKey = Config.CACHE_KEYS.MAP_KEY.concat(query);
            this.apiOptions.url = Config.ENVIRONMENT().MAP_BOX_API + query + '.json?access_token=' + Config.ENVIRONMENT().MAP_BOX_API_KEY;
            this.apiOptions.parameters = '';
            this.apiOptions.concatApi = false;

            if (this.locker.has(this.apiOptions.cacheKey)) {
                return (Observable.of(this.locker.get(this.apiOptions.cacheKey))) as any;
            };

            return this.apiService.mapper(this.apiOptions)
                .map((res) => {
                    let x: any = res.json();
                    let features: IMapFeatures[] = <IMapFeatures[]>x.features;
                    if (this.apiOptions.cacheKey !== '') this.locker.set(this.apiOptions.cacheKey, features);
                    return features;
                });
        } else {
            return Observable.of([]);
        }
    }

    onIndustriesQuery = (query: string): Observable<IIndustries[]> => {
        if (query && query.length > 2) {
            this.apiOptions = new ApiServiceParametersOptions();
            this.apiOptions.cacheKey = Config.CACHE_KEYS.INDUSTRIES_KEY.concat(query);
            this.apiOptions.url = Config.API_END_POINTS.INDUSTRIES.concat(query);
            this.apiOptions.parameters = '';
            this.apiOptions.concatApi = true;

            if (this.locker.has(this.apiOptions.cacheKey)) {
                return (Observable.of(<IIndustries[]>this.locker.get(this.apiOptions.cacheKey)));
            };

            return this.apiService.mapper(this.apiOptions)
                .map((res) => {
                    if (this.apiOptions.cacheKey !== '') this.locker.set(this.apiOptions.cacheKey, <IIndustries[]>res.json());
                    return <IIndustries[]>res.json();
                });
        } else {
            return Observable.of([]);
        }
    }
}