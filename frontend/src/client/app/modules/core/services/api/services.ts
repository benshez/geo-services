import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import * as _ from 'lodash';

import { Config } from '../../utils/index';

import { ApiServiceOptions, ApiServiceParametersOptions } from './models';

import { StorageService, StorageKey } from '../../../core/index';
import { LogService } from '../logging/index';
import { LoaderService } from '../../../shared/components/loader/services/services';
import { IUser } from '../../../../../../../src/client/app/modules/user/components/login/interfaces/interfaces';

@Injectable()
export class ApiService {

	private api: string = Config.ENVIRONMENT().API;
	private user: IUser = this.storage.getItem(StorageKey.USER_DETAIL);

	private headers: Headers = new Headers({
		'Authorization': 'xxxx'
	});
	private options: RequestOptions = new RequestOptions({
		headers: this.headers,
		method: 'Get'
	});

	constructor(private http: Http,
		private logger: LogService,
		private storage: StorageService,
		private apiServiceOptions: ApiServiceOptions,
		private loaderService: LoaderService) { }

	// get(parameters: ApiServiceParametersOptions): Observable<Response> {
	// 	this.showLoader();

	// 	//if (this.storage.hasItem(parameters.url)) {
	// 	//    return (Observable.of(this.storage.getItem(parameters.url))) as any;
	// 	//}

	// 	this.apiServiceOptions.method = RequestMethod.Get;
	// 	this.apiServiceOptions.parameters = parameters;
	// 	this.apiServiceOptions.parameters.url = (parameters.concatApi) ? Config.ENVIRONMENT().API.concat(parameters.url) : parameters.url;
	// 	this.apiServiceOptions.parameters.parameters = parameters.parameters;
	// 	this.apiServiceOptions.parameters.cacheKey = parameters.cacheKey;
	// 	this.apiServiceOptions.headers = new Headers({ 'Content-Type': 'application/json' });
	// 	this.apiServiceOptions.pendingCommandCount = 0;
	// 	this.apiServiceOptions.pendingCommandsSubject = new Subject<number>();
	// 	this.apiServiceOptions.pendingCommands$ = this.apiServiceOptions.pendingCommandsSubject.asObservable();

	// 	return (this.request(this.apiServiceOptions)) as any;
	// }

	// post(parameters: ApiServiceParametersOptions): Observable<Response> {

	// 	this.apiServiceOptions.method = RequestMethod.Post;
	// 	this.apiServiceOptions.parameters = parameters;
	// 	this.apiServiceOptions.parameters.url = Config.ENVIRONMENT().API.concat(parameters.url);
	// 	this.apiServiceOptions.pendingCommandCount = 0;
	// 	this.apiServiceOptions.pendingCommandsSubject = new Subject<number>();
	// 	this.apiServiceOptions.pendingCommands$ = this.apiServiceOptions.pendingCommandsSubject.asObservable();


	// 	let isCommand = (this.apiServiceOptions.method !== RequestMethod.Post);

	// 	if (isCommand) {
	// 		this.apiServiceOptions.pendingCommandsSubject.next(++this.apiServiceOptions.pendingCommandCount);
	// 	}

	// 	return this.request(this.apiServiceOptions);
	// }

	mapper(endpoint: string, params?: any, options: RequestOptionsArgs = {}): Observable<any> {
		this.showLoader();

		//let api: string = (parameters.concatApi) ? Config.ENVIRONMENT().API.concat(parameters.url) : parameters.url;
		//let api: string = (parameters.concatApi) ? 'http://localhost:8000/api/v1/'.concat(parameters.url) : parameters.url;
		params = {};
		if (params) {
			const urlSearchParams: URLSearchParams = new URLSearchParams();
			_.forEach(params, (value: any, key: string): void => urlSearchParams.set(key, value));
			options.search = !options.search ? urlSearchParams : options.search;
			options.url = `${this.api}/${endpoint}`;
			options.method = 'Get';
		}

		//this.logger.info(api);

		return this.http
			.get(`${this.api}/${endpoint}`, this.options.merge(options))
			.catch(this.onCatch)
			.finally(() => {
				this.onEnd();
			});
	}

	get(endpoint: string, params?: any, options: RequestOptionsArgs = {}): Observable<Response> {

		if (params) {
			const urlSearchParams: URLSearchParams = new URLSearchParams();
			_.forEach(params, (value: any, key: string): void => urlSearchParams.set(key, value));
			options.search = !options.search ? urlSearchParams : options.search;
		}

		return this.http
			.get(`${this.api}/${endpoint}`, this.options.merge(options))
			.map((res: Response) => res.json())
			.catch(this.onCatch)
			.do((res: Response) => {
				this.onSuccess(res);
			}, (error: any) => {
				this.onError(error);
			})
			.finally(() => {
				this.onEnd();
			});
	}

	post(endpoint: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		return this.http
			.post(`${this.api}/${endpoint}`, body, this.options.merge(options))
			.map((res: Response) => res.json())
			.catch(this.onCatch)
			.do((res: Response) => {
				this.onSuccess(res);
			}, (error: any) => {
				this.onError(error);
			})
			.finally(() => {
				this.onEnd();
			});
	}

	put(endpoint: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		return this.http
			.put(`${this.api}/${endpoint}`, body, this.options.merge(options))
			.map((res: Response) => res.json())
			.catch(this.onCatch)
			.do((res: Response) => {
				this.onSuccess(res);
			}, (error: any) => {
				this.onError(error);
			})
			.finally(() => {
				this.onEnd();
			});
	}

	delete(endpoint: string, options?: RequestOptionsArgs): Observable<Response> {
		return this.http
			.delete(`${this.api}/${endpoint}`, this.options.merge(options))
			.map((res: Response) => res.json())
			.catch(this.onCatch)
			.do((res: Response) => {
				this.onSuccess(res);
			}, (error: any) => {
				this.onError(error);
			})
			.finally(() => {
				this.onEnd();
			});
	}

	patch(endpoint: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		return this.http
			.patch(`${this.api}/${endpoint}`, body, this.options.merge(options))
			.map((res: Response) => res.json())
			.catch(this.onCatch)
			.do((res: Response) => {
				this.onSuccess(res);
			}, (error: any) => {
				this.onError(error);
			})
			.finally(() => {
				this.onEnd();
			});
	}


	private request(options: ApiServiceOptions): Observable<any> {
		let requestOptions = null;

		if (options.parameters.allowRequestOption) {
			requestOptions = new RequestOptions();
			requestOptions.method = options.method;
			requestOptions.url = options.parameters.url;
			requestOptions.headers = options.headers;
			requestOptions.search = ((this.buildUrlSearchParams(options.parameters.parameters)) as any);
			requestOptions.body = options.parameters.parameters;
		}

		let isCommand = (options.method !== RequestMethod.Get);

		if (isCommand) {
			options.pendingCommandsSubject.next(++options.pendingCommandCount);
		}

		return (this.http.request(options.parameters.url, requestOptions)
			.map((res: Response) => res.json())
			.catch(this.onCatch)
			.do((res: Response) => {
				this.onSuccess(res);
				//if (options.parameters.cacheKey !== '') this.storage.setItem(options.parameters.cacheKey, res);
			}, (error: any) => {
				this.onError(error);
			})
			.finally(() => {
				this.onEnd();
				if (isCommand) options.pendingCommandsSubject.next(--options.pendingCommandCount);
			})) as any;
	}

	private buildUrlSearchParams(params: any): URLSearchParams {
		const searchParams: URLSearchParams = new URLSearchParams();
		_.forEach(params, (value: any, key: string): void => searchParams.append(key, value));
		return searchParams;
	}

	private onCatch(error: any, caught: Observable<any>): Observable<any> {
		return Observable.throw(error);
	}

	private onSuccess(res: Response): void {
		this.logger.info('Request successful');
	}

	private onError(res: Response): void {
		this.logger.error('Error, status code: '.concat(res.status.toString()));
	}

	private onEnd(): void {
		this.hideLoader();
	}

	private showLoader(): void {
		this.loaderService.show();
	}

	private hideLoader(): void {
		this.loaderService.hide();
	}
}
