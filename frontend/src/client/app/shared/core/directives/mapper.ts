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
    ApiServiceParametersOptions
} from '../index';

import { ApiService } from '../services/api/api.service';
@Directive({
    selector: '[mapper]'
})

export class Mapper {
    public model: IMapQuery;
    private errorMessage: string;
    private apiOptions: ApiServiceParametersOptions;
    constructor(
        private apiService: ApiService,
        private ngZone: NgZone) { }

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

        this.apiOptions = new ApiServiceParametersOptions();
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

            return this.apiService.mapper(this.apiOptions)
                .map(res => {
                let json = res.json();
                debugger;
                return json;
            }) as any;;
            //return data.features.forEach(feature => {
            //    places.push(feature.place_name);
            //});
        } else {
            return Observable.of([]);
        }

    }
}