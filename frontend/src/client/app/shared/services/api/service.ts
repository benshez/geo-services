import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

import { Config } from '../../index';

import { Locker } from '../locker/index';
import { MessageEvent } from '../message/service';
import { LogService } from '../log/index';
import { IApiServiceOptions, IApiServiceParametersOptions } from '../../models/index';

@Injectable()
export class ApiService {
    _url: string = '';

    constructor(private http: Http, private logger: LogService, private message: MessageEvent,
        private locker: Locker, private apiServiceOptions: IApiServiceOptions) { }

    get(parameters: IApiServiceParametersOptions): Observable<Response> {
        this.message.fire(true);

        if (this.locker.has(parameters.url)) {
            this.message.fire(false);
            return Observable.of(this.locker.get(parameters.url));
        }

        this.apiServiceOptions.method = RequestMethod.Get;
        this.apiServiceOptions.parameters = parameters;
        this.apiServiceOptions.parameters.url = Config.API.concat(parameters.url);
        this.apiServiceOptions.parameters.parameters = parameters.parameters;
        this.apiServiceOptions.parameters.cacheKey = parameters.cacheKey;
        this.apiServiceOptions.pendingCommandCount = 0;
        this.apiServiceOptions.pendingCommandsSubject = new Subject<number>();
        this.apiServiceOptions.pendingCommands$ = this.apiServiceOptions.pendingCommandsSubject.asObservable();

        return this.request(this.apiServiceOptions);
    }

    put(parameters: IApiServiceParametersOptions): Observable<Response> {
        this.message.fire(true);

        let headers = new Headers({ 'Content-Type': 'application/json' });

        let options = new RequestOptions({ headers: headers });


        //if (!(parameters.parameters instanceof String) && typeof (parameters.parameters) !== 'String') {
        //    parameters.parameters = JSON.stringify(parameters.parameters);
        //}

        this.apiServiceOptions.headers = { 'Content-Type': 'application/json' };
        this.apiServiceOptions.method = RequestMethod.Post;
        this.apiServiceOptions.parameters = parameters;
        this.apiServiceOptions.parameters.url = Config.API.concat(parameters.url);
        this.apiServiceOptions.parameters.parameters = parameters.parameters;
        this.apiServiceOptions.parameters.cacheKey = parameters.cacheKey;
        this.apiServiceOptions.data = parameters.parameters;
        this.apiServiceOptions.pendingCommandCount = 0;
        this.apiServiceOptions.pendingCommandsSubject = new Subject<number>();
        this.apiServiceOptions.pendingCommands$ = this.apiServiceOptions.pendingCommandsSubject.asObservable();
        
        return this.request(this.apiServiceOptions);
    }

    private request(options: IApiServiceOptions): Observable<any> {
        //this.interpolateUrl(options);
        //this.addXsrfToken(options);
        //this.addContentType(options);

        let requestOptions = new RequestOptions();
        requestOptions.method = options.method;
        requestOptions.url = options.parameters.url;
        requestOptions.headers = options.headers;
        requestOptions.search = this.buildUrlSearchParams(options.parameters.parameters);
        requestOptions.body = JSON.stringify(options.data);

        let isCommand = (options.method !== RequestMethod.Get);

        if (isCommand) {
            options.pendingCommandsSubject.next(++options.pendingCommandCount);
        }

        return this.http.request(options.parameters.url, requestOptions)
            .map((res: Response) => res.json())
            .do((res: Response) => {
                this.logger.info(res);
                if (options.parameters.cacheKey != '') this.locker.set(options.parameters.cacheKey, res);
            })
            .catch((error: any) => {
                return Observable.throw(this.unwrapHttpError(error));
            })
            .share()
            .finally(() => {
                this.message.fire(false);
                if (isCommand) options.pendingCommandsSubject.next(--options.pendingCommandCount);
            });
    }

    private buildUrlSearchParams(params: any): URLSearchParams {
        var searchParams = new URLSearchParams();
        for (var key in params) {
            searchParams.append(key, params[key])
        }
        return searchParams;
    }

    private unwrapHttpError(error: any): any {
        try {
            this.message.fire(false);
            this.logger.error(error.json());
            return (error.json());
        } catch (jsonError) {
            this.message.fire(false);
            this.logger.error(jsonError);
            return ({
                code: -1,
                message: "An unexpected error occurred."
            });
        }
    }

    private catchBadResponse: <T>(errorResponse: any) => Observable<T> = (errorResponse: any) => {
        let msg = (errorResponse.message) ? errorResponse.message :
            errorResponse.status ? `${errorResponse.status} - ${errorResponse.statusText}` : 'Server error';
        this.logger.error(msg);
        //this.toastService.activate(`Error - Bad Response - ${emsg}`);
        return Observable.throw(msg); // TODO: We should NOT swallow error here.
        //return Observable.of(any);
    };
}
