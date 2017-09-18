import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Config } from '../../core/index';
import { IKeyValueDictionary, KeyValueDictionary } from '../../core/index';
import { StorageService, StorageKey } from '../../core/index';
import { ApiService } from '../../core/services/api/services';
import { ILocationArguments } from '../index';

@Injectable()
export class Locator {
	private store: Store<any>;

	constructor(
		private storage: StorageService,
		private apiService: ApiService
	) { }

	onSearch(args: ILocationArguments) {
		return args.keyword
			.debounceTime(args.delay)
			.distinctUntilChanged()
			.switchMap(term => this.onQuery(term, args))
			.onErrorResumeNext();
	}

	onQuery = (
		query: string,
		args: ILocationArguments
	): Observable<IKeyValueDictionary> => {
		if (query && query.length > args.minQueryLength) {
			if (args.apiOptions.cacheKey !== '')
				args.apiOptions.cacheKey = args.cacheKey
					.replace('{query}', query)
					.concat(query.length.toString());

			args.apiOptions.url = args.apiOptions.url.replace('{query}', query);

			return this.query(args, query) as Observable<IKeyValueDictionary>;
		}
		return Observable.of();
	}

	private query(args: ILocationArguments, query: string) {
		//if (this.storage.hasItem(args.apiOptions.cacheKey)) {
		//    let data: any = this.storage.getItem(args.apiOptions.cacheKey);
		//    debugger
		//    //return Observable.of(data) as any;
		//};

		return this.apiService
			.mapper(args.apiOptions.url)
			.map(res => {
				let data: any =
					args.DeepObjectName !== ''
						? res.json()[args.DeepObjectName]
						: res.json();
				let suggestions: KeyValueDictionary = null;
				data.forEach((suggestion: any, index: any) => {
					let val: any = {
						key: suggestion[args.key],
						value: suggestion[args.value]
					};
					if (!suggestions)
						suggestions = new KeyValueDictionary([{ key: index, value: val }]);
					else suggestions.add(index, val);
				});
				let suggestionsData: IKeyValueDictionary = suggestions.toLookup();
				//if (args.apiOptions.cacheKey !== '') this.storage.setItem(args.apiOptions.cacheKey, suggestionsData);
				return suggestionsData as IKeyValueDictionary;
			})
			.catch((error: any) => {
				args.apiOptions.url = args.apiOptions.url.replace(query, '{query}');
				return Observable.of();
			})
			.finally(() => {
				args.apiOptions.url = args.apiOptions.url.replace(query, '{query}');
			});
	}
}
