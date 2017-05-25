import { Directive, NgZone } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import {
    Config,
    IDictionary,
    ILocationArguments,
    IKeyValuePair
} from '../index';

import { Locker } from '../services/locker/index';

import { ApiService } from '../services/api/api.service';

import { ApiServiceParametersOptions } from '../models/Api';

import { Dictionary } from '../models/Dictionary';

@Directive({
    selector: '[sd-location]'
})
export class Location {

    constructor(
        private apiService: ApiService,
        private ngZone: NgZone,
        private apiOptions: ApiServiceParametersOptions,
        private locker: Locker) { }

    onSearch(args: ILocationArguments) {
        return args.keyword.debounceTime(args.delay)
            .distinctUntilChanged()
            .switchMap(term => this.onQuery(term, args))
            .onErrorResumeNext()
    }

    onQuery = (query: string, args: ILocationArguments): Observable<Array<IKeyValuePair[]>> => {
        if (query && query.length > args.minQueryLength) {
            if (args.apiOptions.cacheKey !== '') args.apiOptions.cacheKey = args.cacheKey.replace('{query}', query).concat(query.length.toString());
            args.apiOptions.url = args.apiOptions.url.replace('{query}', query);

            if (this.locker.has(args.apiOptions.cacheKey)) {
                let data: any = this.locker.get(args.apiOptions.cacheKey);
                return Observable.of(this.fillDictionary(data, args).toList()) as any;
            };

            return this.apiService.mapper(args.apiOptions)
                .map((res) => {
                    let data: any = (args.DeepObjectName != '') ? res.json()[args.DeepObjectName] : res.json();
                    if (args.apiOptions.cacheKey !== '') this.locker.set(args.apiOptions.cacheKey, data);
                    return this.fillDictionary(data, args).toList();
                })
                .catch((error: any) => {
                    args.apiOptions.url = args.apiOptions.url.replace(query, '{query}');
                    return Observable.of([]);
                })
                .finally(() => { args.apiOptions.url = args.apiOptions.url.replace(query, '{query}'); });
        } else {
            return Observable.of([]);
        }
    }

    private fillDictionary = (suggestions: any[], args: ILocationArguments): Dictionary<IKeyValuePair> => {
        let dict = new Dictionary();
        suggestions.forEach((suggestion: any, index: any) => {
            dict.add([], [Config.DICTIONAR_KEYS.KEY, Config.DICTIONAR_KEYS.VALUE], [suggestion[args.key], suggestion[args.value]]);
        });
        return dict;
    }
}