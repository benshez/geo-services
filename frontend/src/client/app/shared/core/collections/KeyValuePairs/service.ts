import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Config, ILocationArguments, } from '../../index';
import { IKeyValueDictionary, KeyValueDictionary } from './index';
import { Locker } from '../../services/locker/index';
import { ApiService } from '../../services/api/api.service';

@Injectable()
export class Location {

    constructor(private locker: Locker,
        private apiService: ApiService) { }

    onSearch(args: ILocationArguments) {
        return args.keyword
            .debounceTime(args.delay)
            .distinctUntilChanged()
            .switchMap(term => this.onQuery(term, args))
            .onErrorResumeNext();
    }

    onQuery = (query: string, args: ILocationArguments): Observable<IKeyValueDictionary> => {
        if (query && query.length > args.minQueryLength) {
            if (args.apiOptions.cacheKey !== '') args.apiOptions.cacheKey = args.cacheKey.replace('{query}', query).concat(query.length.toString());
            args.apiOptions.url = args.apiOptions.url.replace('{query}', query);
            if (this.locker.has(args.apiOptions.cacheKey)) {
                let data: any = this.locker.get(args.apiOptions.cacheKey);
                debugger
                //return Observable.of(data) as any;
            };

            return this.apiService.mapper(args.apiOptions)
                .map((res) => {
                    let data: any = (args.DeepObjectName != '') ? res.json()[args.DeepObjectName] : res.json();

                    let suggestions: KeyValueDictionary = null;

                    data.forEach((suggestion: any, index: any) => {
                        let val: any = { key: suggestion[args.key], value: suggestion[args.value] };
                        if (!suggestions) suggestions = new KeyValueDictionary([{ key: index, value: val }]);
                        else suggestions.add(index, val);
                    });

                    let suggestionsData: IKeyValueDictionary = suggestions.toLookup();

                    if (args.apiOptions.cacheKey !== '') this.locker.set(args.apiOptions.cacheKey, suggestionsData);

                    return suggestionsData;

                }).catch((error: any) => {
                    args.apiOptions.url = args.apiOptions.url.replace(query, '{query}');
                    return Observable.of();
                })
                .finally(() => { args.apiOptions.url = args.apiOptions.url.replace(query, '{query}'); });
        }
        return Observable.of();
    }

}