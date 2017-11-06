import { Injectable } from '@angular/core';
import {
  Headers,
  Http,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  URLSearchParams
} from '@angular/http';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Rx';
import { Config } from '../../utilities/index';
import { StorageKey } from '../../interfaces/index';
import {
  LogService,
  StorageService
} from '../../../core/services/index';

@Injectable()
export class ApiService {

  private api: string = Config.ENVIRONMENT().API;
  private user: string = null;
  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': (this.user) ? JSON.parse(this.storage.getItem(StorageKey.USER_DETAIL)).token_char : null
  });
  private options: RequestOptions = new RequestOptions({
    headers: this.headers,
    method: 'Get'
  });

  constructor(
    private http: Http,
    private logger: LogService,
    private storage: StorageService
  ) { }

  get(
    endpoint: string,
    params?: any,
    options: RequestOptionsArgs = {}
  ): Observable<Response> {

    if (params) {
      const urlSearchParams: URLSearchParams = new URLSearchParams();
      _.forEach(params, (value: any, key: string): void => urlSearchParams.set(key, value));
      options.search = !options.search ? urlSearchParams : options.search;
    }

    return this.http
      .get(`${this.api}/${endpoint}`, this.options.merge(options))
      .map((res: Response) => res.json() as any)
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onEnd();
      }) as any;
  }

  post(
    endpoint: string,
    body: any,
    options?: RequestOptionsArgs
  ): Observable<Response> {

    return this.http
      .post(`${this.api}/${endpoint}`, body, this.options.merge(options))
      .map((res: Response) => res.json() as any)
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onEnd();
      }) as any;
  }

  put(
    endpoint: string,
    body: any,
    options?: RequestOptionsArgs
  ): Observable<Response> {

    return this.http
      .put(`${this.api}/${endpoint}`, body, this.options.merge(options))
      .map((res: Response) => res.json() as any)
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onEnd();
      }) as any;
  }

  delete(
    endpoint: string,
    options?: RequestOptionsArgs
  ): Observable<Response> {

    return this.http
      .delete(`${this.api}/${endpoint}`, this.options.merge(options))
      .map((res: Response) => res.json() as any)
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onEnd();
      }) as any;
  }

  patch(
    endpoint: string,
    body: any,
    options?: RequestOptionsArgs
  ): Observable<Response> {

    return this.http
      .patch(`${this.api}/${endpoint}`, body, this.options.merge(options))
      .map((res: Response) => res.json() as any)
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onEnd();
      }) as any;
  }

  private onCatch(error: any): Observable<any> {
    return Observable.throw(error) as Observable<any>;
  }

  private onSuccess(_res: Response): void {
    this.logger.info('Request successful');
  }

  private onError(res: Response): void {
    this.logger.error('Error, status code: '.concat(res.status.toString()));
  }

  private onEnd(): void {
    // this.hideLoader();
  }

  // private showLoader(): void {
  //   //this.loaderService.show();
  // }

  // private hideLoader(): void {
  //   this.loaderService.hide();
  // }
}
