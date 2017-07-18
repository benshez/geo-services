import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

import { Config } from '../../utils/index';

import { ApiServiceOptions, ApiServiceParametersOptions } from './models';

import { StorageService, StorageKey } from '../../../core/index';
import { LogService } from '../logging/index';
import { LoaderService } from '../../../shared/components/loader/services/services';

@Injectable()
export class ApiService {

    constructor(private http: Http,
        private logger: LogService,
        private storage: StorageService,
        private apiServiceOptions: ApiServiceOptions,
        private loaderService: LoaderService) { }

    get(parameters: ApiServiceParametersOptions): Observable<Response> {
        this.showLoader();

        //if (this.storage.hasItem(parameters.url)) {
        //    return (Observable.of(this.storage.getItem(parameters.url))) as any;
        //}

        this.apiServiceOptions.method = RequestMethod.Get;
        this.apiServiceOptions.parameters = parameters;
        this.apiServiceOptions.parameters.url = (parameters.concatApi) ? Config.ENVIRONMENT().API.concat(parameters.url) : parameters.url;
        this.apiServiceOptions.parameters.parameters = parameters.parameters;
        this.apiServiceOptions.parameters.cacheKey = parameters.cacheKey;
        this.apiServiceOptions.headers = new Headers({ 'Content-Type': 'application/json' });
        this.apiServiceOptions.pendingCommandCount = 0;
        this.apiServiceOptions.pendingCommandsSubject = new Subject<number>();
        this.apiServiceOptions.pendingCommands$ = this.apiServiceOptions.pendingCommandsSubject.asObservable();

        return (this.request(this.apiServiceOptions)) as any;
    }

    post(parameters: ApiServiceParametersOptions): Observable<Response> {

        this.apiServiceOptions.method = RequestMethod.Post;
        this.apiServiceOptions.parameters = parameters;
        this.apiServiceOptions.parameters.url = Config.ENVIRONMENT().API.concat(parameters.url);
        this.apiServiceOptions.pendingCommandCount = 0;
        this.apiServiceOptions.pendingCommandsSubject = new Subject<number>();
        this.apiServiceOptions.pendingCommands$ = this.apiServiceOptions.pendingCommandsSubject.asObservable();


        let isCommand = (this.apiServiceOptions.method !== RequestMethod.Post);

        if (isCommand) {
            this.apiServiceOptions.pendingCommandsSubject.next(++this.apiServiceOptions.pendingCommandCount);
        }

        return this.request(this.apiServiceOptions);
    }

    mapper(parameters: ApiServiceParametersOptions): Observable<any> {
        this.showLoader();

        //let api: string = (parameters.concatApi) ? Config.ENVIRONMENT().API.concat(parameters.url) : parameters.url;
        let api: string = (parameters.concatApi) ? 'http://192.168.0.13:8000/api/industries/Ing' : parameters.url;

        this.logger.info(api);

        return this.http.get(api)
            .catch(this.onCatch)
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
        let searchParams = new URLSearchParams();
        for (var key in params) {
            searchParams.append(key, params[key]);
        }
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