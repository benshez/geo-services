import { Directive, NgZone } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import {
    Config,
    IDictionary,
    IDictionaryPair,
    ILocationArguments
} from '../index';

import { Locker } from '../services/locker/index';

import { ApiService } from '../services/api/api.service';

import { ApiServiceParametersOptions } from '../models/Api';

import { Dictionary } from '../models/Dictionary';

class Key {
    constructor(public key: number) {
    }
    toString() {
        return this.key;
    }
}

class Value {
    constructor(public value: any) {
    }
    toString() {
        return this.value;
    }
}

@Directive({
    selector: '[location]'
})
export class Location {

    constructor(
        private apiService: ApiService,
        private ngZone: NgZone,
        private apiOptions: ApiServiceParametersOptions,
        private locker: Locker) { }

    searchIndustries(args: ILocationArguments) {
        return args.keyword.debounceTime(args.delay)
            .distinctUntilChanged()
            .switchMap(term => this.onIndustriesQuery(term, args))
            .onErrorResumeNext();
    }

    onIndustriesQuery = (query: string, args: ILocationArguments): Observable<Array<IDictionary>> => {
        args.apiOptions.cacheKey = Config.CACHE_KEYS.INDUSTRIES_KEY.concat(query);
        args.apiOptions.url = args.apiOptions.url.replace('{query}', query);

        if (query && query.length > args.minQueryLength) {
            if (this.locker.has(args.apiOptions.cacheKey)) {
                return Observable.of(this.fillDictionary(this.locker.get(args.apiOptions.cacheKey), args).toList()) as any;
            };

            return this.apiService.mapper(args.apiOptions)
                .map((res) => {
                    if (args.apiOptions.cacheKey !== '') this.locker.set(args.apiOptions.cacheKey, res.json());
                    return this.fillDictionary(res.json(), args).toList();
                })
                .catch((error: any) => {
                    return Observable.of([]);
                });
        } else {
            return Observable.of([]);
        }
    }

    fillDictionary = (suggestions: any[], args: ILocationArguments): Dictionary => {
        let dict = new Dictionary();
        suggestions.forEach((suggestion: any, index: any) => {
            dict.add([], ['key', 'value'], [suggestion[args.key], suggestion[args.value]]);
        });
        return dict;
    }
}